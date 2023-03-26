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
		const myArray = response.results;
		const randomIndex1 = Math.floor(Math.random() * myArray.length);
		const randomIndex2 = Math.floor(Math.random() * myArray.length);
		const randomIndex3 = Math.floor(Math.random() * myArray.length);
		const randomId1 = myArray[randomIndex1].imdb_id;
		const randomId2 = myArray[randomIndex2].imdb_id;
		const randomId3 = myArray[randomIndex3].imdb_id;
        console.log(randomId1, randomId2, randomId3)
        getMovieData(randomId1)
		getMovieData(randomId2)
		getMovieData(randomId3)
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

	let mainSection = document.getElementById('main-section')
	let movieSection = document.createElement('section')
	movieSection.classList.add('movie-data-container')
	mainSection.appendChild(movieSection)

	let movieFrame = document.createElement('section')
	movieFrame.classList.add('movie-frame')
	movieSection.appendChild(movieFrame)

	let moviePoster = document.createElement('img');
	moviePoster.setAttribute('class', 'movie-image'), ('src', ''), ('alt', '')
	moviePoster.src = movieImage;
	moviePoster.alt = caption;
	movieFrame.appendChild(moviePoster)

	let marqueeInfo = document.createElement('section')
	marqueeInfo.classList.add('marquee-section')
	movieSection.appendChild(marqueeInfo)

    let titleName = document.createElement('p')
	titleName.classList.add('text-styling', 'is-size-4')
    titleName.textContent = movieTitle
	marqueeInfo.appendChild(titleName)

    let movieCaption = document.createElement('p')
    movieCaption.classList.add('text-styling', 'is-size-5')
	movieCaption.textContent = caption
	marqueeInfo.appendChild(movieCaption)
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