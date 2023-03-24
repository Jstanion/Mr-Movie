// Start Jace's work section
// API key and URL for MoviesMiniDatabase (first API)
const moviesMiniDatabase = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3c02005a87mshb2ae9fa4e6ea20ap173d47jsn23043256962d',
		'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
	}
};

// API key and URL for MoviesDatabase (second API)
const moviesDatabase = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3c02005a87mshb2ae9fa4e6ea20ap173d47jsn23043256962d',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

let getMovieByGenre = (searchGenre) => {
    fetch('https://moviesminidatabase.p.rapidapi.com/movie/byGen/Horror/', moviesMiniDatabase)
	.then(response => response.json())
	.then(response => {
        console.log(response);
        console.log(response.results[0].imdb_id);
        let randomId = response.results[0].imdb_id
        getMovieData(randomId)
    })
	.catch(err => console.error(err));
}

let getMovieData = (randomId) => {
	fetch(`https://moviesdatabase.p.rapidapi.com/titles/x/titles-by-ids?idsList=${randomId}`, moviesDatabase)
	.then(response => response.json())
	.then(response => {
		console.log(response);
		let movieImage = response.results[0].primaryImage.url;
		let movieTitle = response.results[0].titleText.text;
		let caption = response.results[0].primaryImage.caption.plainText;
		let releaseDate = response.results[0].releaseDate;
		displayMovieInfo(movieImage, movieTitle, caption, releaseDate);
	})
	.catch(err => console.error(err));
}
// Function that displays the movie info to the UI
let displayMovieInfo = (movieImage, movieTitle, caption, releaseDate) => {
	console.log(movieTitle, caption, releaseDate.month, releaseDate.day, releaseDate.year);
	let moviePoster = document.querySelectorAll('.movie-image');
	moviePoster.forEach(moviePoster =>{
		moviePoster.src = movieImage;
		moviePoster.alt = caption;
	})
    let titleName = document.querySelector('.title')
    titleName.textContent = movieTitle
    let movieCaption = document.querySelector('.subtitle')
    movieCaption.textContent = caption
    let movieReleaseDate = document.querySelector('.release-date')
    movieReleaseDate.textContent = 'Release Date: ' + releaseDate.month + '/' + releaseDate.day + '/' + releaseDate.year
};




// Pulls genre data from API

// const practiceButton = document.querySelector("#practice-button");
// practiceButton.addEventListener("click", function() {
    
    // });
    
    getMovieByGenre()













// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '7b91725223mshb07bf7162834af7p11e9eajsn13d5d2d4fcee',
// 		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
// 	}
// };

// fetch('https://moviesdatabase.p.rapidapi.com/titles/utils/genres', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


//   // Make a request to the API
//   fetch('https://moviesdatabase.p.rapidapi.com/titles/utils/genres')
//     .then(response => response.json())
//     .then(data => {
//       // Parse the data and update the HTML section
//       let apiData = document.getElementById('api-data');
//       apiData.innerHTML = `The temperature is ${data.temperature} degrees.`;
//     });

// // Get the parameter value from the URL
// const urlParams = new URLSearchParams(window.location.search);
// const genre = urlParams.get("genre");

// // Fetch the movie recommendations from the web API
// fetch("https://moviesminidatabase.p.rapidapi.com/movie/${dropdownCategory}/${selectedOption}/" + encodeURIComponent(genre))
//   .then(response => response.json())
//   .then(data => {
//     // Display the movie recommendations on the page
//     // ...
//   })
//   .catch(error => {
//     console.error(error);
//   });




// End Jace's work section






// Start Abigail's work section 


// End Abigail's work section







// Start Michael's work section


// End Michael's work section







// Start Joey's work section


// End Joey's work section