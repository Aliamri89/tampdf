"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";

/**
 * Touch (and pen) drag-to-reorder. The browsers' built-in HTML5 drag-and-drop
 * that the tools use for the mouse does not work on phones, so each item gets a
 * grab handle driven by pointer events instead:
 *
 *   - spread `handleProps(id)` on the handle element (it turns off the page's
 *     own touch scrolling for that element only, so the rest of the page still
 *     scrolls normally);
 *   - put `data-reorder-id={id}` on each list item, so the item under the
 *     finger can be found while dragging;
 *   - `draggedId` / `overId` drive the same highlight styles as the mouse drag.
 *
 * Mouse pointers are ignored here — they keep using the existing HTML5 drag.
 */
export function useTouchReorder(onReorder: (fromId: string, toId: string) => void) {
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [overId, setOverId] = useState<string | null>(null);
  const fromRef = useRef<string | null>(null);
  const overRef = useRef<string | null>(null);
  const callbackRef = useRef(onReorder);
  useEffect(() => {
    callbackRef.current = onReorder;
  });

  function reset() {
    fromRef.current = null;
    overRef.current = null;
    setDraggedId(null);
    setOverId(null);
  }

  function handleProps(id: string) {
    return {
      style: { touchAction: "none" as const },
      onContextMenu: (e: React.MouseEvent) => e.preventDefault(),
      onPointerDown: (e: PointerEvent<HTMLElement>) => {
        if (e.pointerType === "mouse") return;
        try {
          // Keeps the move/up events coming even when the finger leaves the handle.
          e.currentTarget.setPointerCapture(e.pointerId);
        } catch {
          // Not capturable (e.g. a synthetic pointer): dragging still works while over the handle.
        }
        fromRef.current = id;
        overRef.current = null;
        setDraggedId(id);
        setOverId(null);
      },
      onPointerMove: (e: PointerEvent<HTMLElement>) => {
        if (!fromRef.current) return;
        const target = document
          .elementFromPoint(e.clientX, e.clientY)
          ?.closest<HTMLElement>("[data-reorder-id]");
        const next = target?.dataset.reorderId ?? null;
        const over = next && next !== fromRef.current ? next : null;
        if (over !== overRef.current) {
          overRef.current = over;
          setOverId(over);
        }
        // Nudge the page when the finger nears the top or bottom edge.
        const edge = 72;
        if (e.clientY < edge) window.scrollBy(0, -14);
        else if (e.clientY > window.innerHeight - edge) window.scrollBy(0, 14);
      },
      onPointerUp: () => {
        const from = fromRef.current;
        const over = overRef.current;
        reset();
        if (from && over) callbackRef.current(from, over);
      },
      onPointerCancel: reset,
    };
  }

  return { draggedId, overId, handleProps };
}
