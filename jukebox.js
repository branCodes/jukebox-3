$(document).ready(function() {
  var songString = $('#song-form [type="text"]').val();
  $('#song-form-submit-button').on('click', function() {
    $('#song-queue').append('<li>' + songString + '</li>')
    $('#song-form-text-field').val("")
  });
});

