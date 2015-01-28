$(document).ready(function() {

  $('#song-form-submit-button').on('click', function() {


  var songString = $('#song-form [type="text"]').val();

    $('#song-queue').append('<li>' + songString + '</li>')
      $('#song-form-text-field').val("");
      event.preventDefault();
    });

    $('#play-button').on('click', function() {
      playSong(parseSong($('li:first-child').text()),100)
    });

});

