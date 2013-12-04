var playlist = '1305267'
SC.initialize({
  client_id: '34651ca078f5adf77323b80bc915596b'
});
SC.get('/playlists/' + playlist, function(playlist) {
  $('#tracks').empty()
  $(playlist.tracks).each(function(index, track) {
    var week = index + 1
    console.log("Got", track)
    var element = $('<li class="track"><span class="week">Week ' + week + '</span> <a href="#">' + track.title + '</a></li>')
    element.data('track-id', track.id)
    $('#tracks').append(element)
  })
  $('#tracks li').on('click', function() {
    SC.stream("/tracks/" + $(this).data('track-id'), function(sound){
      sound.play();
    });
  })
})
