import { readFile } from '@relay/git';
import { markdownHtmlFromGetContext } from '@relay/md';
import { ssrClientHookFromGetContext } from '@relay/ssr';
// Opt-in: commit-pinned embed + shared mesh chat hosts (assets/chat/*).
import { pinnedPrefix } from '@relay/web-assets';

// server.hooks.get — Clevertree app shell: SSR client hook for browser HTML / ?embed=1 / `/`.
// CleverScript throws on missing object properties — guard flag reads.
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
  if (rel.length > 5 && rel.slice(-5) === '.html') {
    rel = rel.slice(0, -5);
  }
  if (rel.length > 3 && rel.slice(-3) === '.md') {
    rel = rel.slice(0, -3);
  }
  return rel;
}

function isThankYouPath(ctx) {
  return normalizeRelPath(ctx) === 'thankyou';
}

function thankYouHtmlResponse() {
  var body = null;
  try {
    body = readFile('thankyou.html');
  } catch (e) {
    body = null;
  }
  if (body === null || body === undefined) {
    try {
      body = readFile('public/thankyou.html');
    } catch (e2) {
      body = null;
    }
  }
  if (body === null || body === undefined) {
    return null;
  }
  var text = '' + body;
  if (text.length < 32) {
    return null;
  }
  return {
    kind: 'file',
    contentType: 'text/html; charset=utf-8',
    bodyUtf8: text,
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
