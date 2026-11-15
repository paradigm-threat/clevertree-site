/* Loads ct-tree-grow host (gateway always injects Hits.host.js?v=32). */
(function (g) {
  if (!g.document || g.document.querySelector('script[data-ct-tree-grow-host="1"]')) return
  var s = g.document.createElement('script')
  s.src = '/hooks/client/native/TreeGrow.host.js?v=5'
  s.setAttribute('data-fb-park-native', '1')
  s.setAttribute('data-ct-tree-grow-host', '1')
  g.document.head.appendChild(s)
})(typeof globalThis !== 'undefined' ? globalThis : this)
