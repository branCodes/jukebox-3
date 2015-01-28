// parseNote
//
// Accepts a note string (e.g. "C#*2")
// Returns a note object (e.g. {pitch: "C#", beats: 2}).
// If a number of beats is not present, then it defaults to 1.
//
var parseNote = function(string) {
  var parts = string.split('*');
  var pitch = parts[0];
  var beats;

  if (typeof parts[1] === "undefined") {
    beats = 4;
  } else {
    beats = parseInt(parts[1]);
  }

  return {
    pitch: pitch,
    beats: beats
  };
};


// parseSong
//
// Accepts a song string (e.g. "A*1 C#*2 D*4")
// Returns an array of note objects.
//
var parseSong = function(string) {
  var noteStrings = string.split(' ');
  var notes = [];

  for (var i=0; i < noteStrings.length; i++) {
    notes.push( parseNote(noteStrings[i]) );
  }

  return notes;
};

// ## Part 1

// 1. When the song form is submitted, 
// create a new list item in the "Song Queue" list, 
// containing the song string. ALSO, clear the text field 
// contents.

// 2. When the "Play" button is clicked:
//   - Start playing the top song in the queue.
//   - Remove the top song in the queue.
//   - When the song is finished playing, repeat 
//   with the next top song until there are no songs 
//   left to play.

// 3. When the "Play" button is clicked, slide it up. 
// When the last song is finished playing, slide the 
// "Play" button back down.







