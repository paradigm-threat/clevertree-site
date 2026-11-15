/* Tip LobbyPlaylist — load ct-tree-grow host (gateway injects LobbyPlaylist.js?v=45). */
(function (g) {
  if (!g.document) return
  if (g.document.querySelector('script[src*="TreeGrow.host.js"]')) return
  var s = g.document.createElement('script')
  s.src = '/hooks/client/native/TreeGrow.host.js?v=8'
  s.setAttribute('data-fb-park-native', '1')
  s.setAttribute('data-ct-tree-grow-host', '1')
  g.document.head.appendChild(s)
})(typeof globalThis !== 'undefined' ? globalThis : this)
