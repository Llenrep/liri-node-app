require("dotenv").config();
var Spotify = require('node-spotify-api');
var axios = require("axios");

var command = process.argv[2]
var objOfInterest = process.argv[3]
/*
BandsInTown API = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=42da45a0ffa6b10f2e5b56acac6fa4a0" <--- Artist Information?
OMDB API = "http://www.omdbapi.com/?i=tt3896198&apikey=150b895d"

*/
if (command === `concert-this`) {
    var queryURL = "https://rest.bandsintown.com/artists/" + objOfInterest + "/events?app_id=42da45a0ffa6b10f2e5b56acac6fa4a0"
    
    var nameOfVenue;
    var venueLocation;
    // var eventDate = moment().format("MM/DD/YYYY");

    axios.get(queryURL).catch(err).then(
        function(response) {

          console.log(response);
          conseole.log("We got results");

        }
    );

} else if (command === 'spotify-this-song') {
// need it so that if user does not pick a song after command, default to -The Sign, by Ace of Base-
    if (objOfInterest === undefined) {

        var artist = "Ace of Base";
        var songName = "The Sign";
        console.log("It ran the if statement");

    } else {

        console.log("It ran the else statement");
        var artist;
        var songName;
        var preview;
        var album;  

    }

} else if (command === `movie-this`) {

    console.log(command);

} else if (command === `do-what-it-says`) {

    console.log(command);
}

// var spotify = new Spotify(keys.spotify);