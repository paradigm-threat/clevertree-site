import { markdownHtmlFromGetContext } from '@relay/md';
import { ssrClientHookFromGetContext } from '@relay/ssr';

var CANONICAL_ORIGIN = "https://clevertree.net";

// server.hooks.get — CleverTree app shell: SSR client hook for browser HTML / ?embed=1 / `/`.
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

function requestHeader(ctx, name) {
  try {
    var headers = ctx.requestHeaders;
    try {
      var direct = headers[name];
      if (direct) return direct;
    } catch (e) {}
  } catch (e) {}
  return "";
}

function hostName(ctx) {
  var host = requestHeader(ctx, "host");
  if (!host) host = requestHeader(ctx, "Host");
  var colon = host.indexOf(":");
  if (colon > 0) host = host.slice(0, colon);
  return host.toLowerCase();
}

function forwardedProto(ctx) {
  var proto = requestHeader(ctx, "x-forwarded-proto");
  if (!proto) proto = requestHeader(ctx, "X-Forwarded-Proto");
  var comma = proto.indexOf(",");
  if (comma > 0) proto = proto.slice(0, comma);
  return proto.trim().toLowerCase();
}

function requestPath(ctx) {
  var rel = "";
  try {
    rel = ctx.relPath;
  } catch (e) {}
  if (!rel) return "/";
  if (rel.startsWith("/")) rel = rel.slice(1);
  if (rel.startsWith(".well-known/acme-challenge/")) return null;
  if (!rel) return "/";
  return "/" + rel;
}

function canonicalRedirect(ctx) {
  var path = requestPath(ctx);
  if (path === null) return null;
  var host = hostName(ctx);
  var proto = forwardedProto(ctx);
  var needsRedirect = false;
  if (host === "www.clevertree.net") needsRedirect = true;
  if (proto === "http") needsRedirect = true;
  if (!needsRedirect) return null;
  return {
    kind: "file",
    status: 301,
    contentType: "text/plain; charset=utf-8",
    bodyUtf8: "Redirecting to the canonical origin.\n",
    headers: {
      Location: CANONICAL_ORIGIN + path
    }
  };
}

export default function run(ctx, next) {
  var redirect = canonicalRedirect(ctx);
  if (redirect !== null) { return redirect; }

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
