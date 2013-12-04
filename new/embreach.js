var playlist = '1305267'
SC.initialize({
  client_id: '34651ca078f5adf77323b80bc915596b'
});
SC.get('/playlists/' + playlist, function(playlist) {
  $('#tracks').empty()
  $(playlist.tracks).each(function(index, track) {
    var week = index + 1
    $('#tracks').append('<li class="track"><span class="week">Week ' + week + '</span> ' + track.title + '</li>')
  })
})
