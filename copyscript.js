alert ("hello");

let button = document.getElementById("song-button");
let songs = [];
let index = 0;
let userInput = document.getElementById("search").input.value;


async function loadSongs() {
  let response = await fetch("https://student-data-api.rhyantotherescue-d9d.workers.dev/api/v1/datasets/viral-50-usa/records?limit=10&search=
  ");
  console.log("Status: " + response.status);
  let data = await response.json();
  songs = data.records;
  console.log("Records: " + songs.length);

  showSong();
  
  document.getElementById("track-name").textContent = song["Track Name"];
  document.getElementById("track-facts").textContent = "#" + song.Position + " — " + song.Artist; 
}

function showSong() {
  let song = songs[index];
  index = index + 1;
 
  
  if(index >= songs.length){
	  let index = 0;
	  
	  
  }
   
 
}


button.addEventListener("click", function () {
  loadSongs();
});