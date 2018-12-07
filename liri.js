require("dotenv").config();

var spotify = require('node-spotify-api');

var fs = require("fs");

var axios = require("axios");

var command = process.argv[2]
var objOfInterest = process.argv[3]
var artist = process.argv[3]
var date = process.argv[4] //MM/DD/YYYY
// eventDate = moment(date, "MM/DD/YYYY")
/*
BandsInTown API = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=42da45a0ffa6b10f2e5b56acac6fa4a0" <--- Artist Information?
OMDB API = "http://www.omdbapi.com/?i=tt3896198&apikey=150b895d"

                                var = artist name                                                var date (in MM/DD/YYY)
https://rest.bandsintown.com/artists/Kanye/events?app_id=42da45a0ffa6b10f2e5b56acac6fa4a0&date=2015-05-05
*/


if (command === `concert-this`) {

    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=42da45a0ffa6b10f2e5b56acac6fa4a0").then(
        function (response) {
            // console.log(response.data[1]);

            var show = [
                "Artist: " + objOfInterest,
                "Name Of The Venue: " + response.data[1].venue.name,
                "Venue Location: " + response.data[1].venue.latitude +", " + response.data[1].venue.longitude,
                "Venue Date: " + response.data[1].datetime //moment(response.data[1].datetime, "YYYY-MM-DD").format("DD/MM/YYYY")
            ].join("\n\n");


            console.log("---------------------------\nInfo: \n" + "\n" + show + "\n");
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

    axios.get("http://www.omdbapi.com/?t=" + objOfInterest + "&y=&plot=short&apikey=150b895d").then(
        function (response) {

            var show = [
                "Name: " + response.data.Title,
                "Runtime: " + response.data.Runtime,
                "Genre: " + response.data.Genre,
                "Rating: " + response.data.Rated,
                "Writer: " + response.data.Released,
                "Director: " + response.data.Director,
                "Plot: " + response.data.Plot
            ].join("\n\n")

            console.log(show)

            fs.appendFile("log.txt", show + "\n-------------------------------------\n\n", function (err) {
                if (err) throw err
            })
        }
    );

} else if (command === `do-what-it-says`) {
    // must be done after spotify thing is done
    console.log(command);
}

// var spotify = new Spotify(keys.spotify);