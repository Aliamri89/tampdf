// OAuth redirect target for "Save to Dropbox". Dropbox sends the visitor's
// popup here with ?code=…&state=… (or ?error=…); this page just hands those
// to the window that opened it (same origin only) and closes itself. The code
// is useless without the PKCE verifier that never leaves the opener.
export const dynamic = "force-dynamic";

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Dropbox</title>
<style>body{font-family:system-ui,sans-serif;display:flex;min-height:100vh;align-items:center;justify-content:center;margin:0;color:#444}</style>
</head>
<body>
<p id="m">…</p>
<script>
(function () {
  var p = new URLSearchParams(location.search);
  var payload = {
    type: "tampdf-dropbox",
    code: p.get("code"),
    state: p.get("state"),
    error: p.get("error")
  };
  if (window.opener) {
    window.opener.postMessage(payload, location.origin);
    window.close();
  } else {
    document.getElementById("m").textContent = "You can close this window.";
  }
})();
</script>
</body>
</html>`;

export function GET() {
  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}
