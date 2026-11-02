/** Colours the first occurrence of `highlight` (e.g. "PDF") red without changing the text itself. */
export function HighlightedText({ text, highlight }: { text: string; highlight: string }) {
  const index = highlight ? text.indexOf(highlight) : -1;
  if (index === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, index)}
      <span className="text-brand-500">{highlight}</span>
      {text.slice(index + highlight.length)}
    </>
  );
}
