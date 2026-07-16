import { markdownHtmlFromGetContext } from '@relay/md';
import { ssrClientHookFromGetContext } from '@relay/ssr';

// server.hooks.get — CleverTree: opt into SSR for embed; markdown HTML otherwise.
export default function run(ctx, next) {
  if (ctx.embedMarkdownRequest === true) {
    var ssr = ssrClientHookFromGetContext(ctx, {
      clientHookPath: "hooks/client/get.jsx"
    });
    if (ssr !== null) { return ssr; }
  }

  var html = markdownHtmlFromGetContext(ctx);
  if (html !== null) { return html; }

  return next();
}
