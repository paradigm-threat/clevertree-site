import { readFile } from '@relay/git';
import { markdownHtmlFromGetContext } from '@relay/md';
import { ssrClientHookFromGetContext } from '@relay/ssr';
// Opt-in: commit-pinned embed + shared mesh chat hosts (assets/chat/*).
import { pinnedPrefix } from '@relay/web-assets';

// server.hooks.get — Clevertree app shell: SSR client hook for browser HTML / ?embed=1 / `/`.
// CleverScript throws on missing object properties — guard flag reads.
// CleverScript has no `undefined` and no quoted object keys.
function wantsSiteShell(ctx) {
  try {
    if (ctx.embedMarkdownRequest === true) return true;
  } catch (e) {}
  try {
    if (ctx.siteShellRequest === true) return true;
  } catch (e) {}
  return false;
}

function normalizeRelPath(ctx) {
  var rel = '';
  try {
    rel = '' + (ctx.relPath || '');
  } catch (e) {
    rel = '';
  }
  while (rel.length > 0 && rel.charAt(0) === '/') {
    rel = rel.slice(1);
  }
  while (rel.length > 0 && rel.charAt(rel.length - 1) === '/') {
    rel = rel.slice(0, -1);
  }
  return rel;
}

function isThankYouPath(ctx) {
  var rel = normalizeRelPath(ctx);
  return rel === 'thankyou' || rel === 'thankyou.html';
}

function thankYouHtmlResponse() {
  var body = readFile('thankyou.html');
  if (!body) return null;
  return {
    kind: 'file',
    contentType: 'text/html; charset=utf-8',
    bodyUtf8: '' + body,
    status: 200,
  };
}

export default function run(ctx, next) {
  // Google Ads conversion: serve static thank-you HTML immediately (no SSR dependency).
  if (isThankYouPath(ctx)) {
    var ty = thankYouHtmlResponse();
    if (ty !== null) {
      return ty;
    }
  }

  if (wantsSiteShell(ctx)) {
    var ssr = ssrClientHookFromGetContext(ctx, {
      clientHookPath: "hooks/client/get.jsx"
    });
    if (ssr !== null) { return ssr; }
  }

  var html = markdownHtmlFromGetContext(ctx);
  if (html !== null) { return html; }

  return next();
}
