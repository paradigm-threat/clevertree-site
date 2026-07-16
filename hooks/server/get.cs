import { markdownHtmlFromGetContext } from '@relay/md';
import { ssrClientHookFromGetContext } from '@relay/ssr';

// server.hooks.get — CleverTree: opt into SSR for embed; markdown HTML otherwise.
// CleverScript throws on missing object properties — never read ctx.embedMarkdownRequest
// unless we know it exists (embed path sets it; normal GETs do not).
function isEmbedMarkdownRequest(ctx) {
  try {
    return ctx.embedMarkdownRequest === true;
  } catch (e) {
    return false;
  }
}

export default function run(ctx, next) {
  if (isEmbedMarkdownRequest(ctx)) {
    var ssr = ssrClientHookFromGetContext(ctx, {
      clientHookPath: "hooks/client/get.jsx"
    });
    if (ssr !== null) { return ssr; }
  }

  var html = markdownHtmlFromGetContext(ctx);
  if (html !== null) { return html; }

  return next();
}
