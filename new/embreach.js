var playlist = '1305267'
SC.initialize({
  client_id: '34651ca078f5adf77323b80bc915596b'
});
SC.get('/playlists/' + playlist + '.json', function(hep) {
  console.log("Got", hep)
})
