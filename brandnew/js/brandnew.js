function toggleSong(i) {
  var song = "song";
  var songnum = song + i;
  console.log(song + i);
  document.getElementsByClassName(songnum)[0].classList.toggle("responsive");
}
