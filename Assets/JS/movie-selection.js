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

// Pulls carousel selection from home page and passes to getMovieBy Genre function
let searchGenre = localStorage.getItem('storedGenre');
console.log(searchGenre);

let getMovieByGenre = () => {

	// Grabs movie data by selected genre
    fetch(`https://moviesminidatabase.p.rapidapi.com/movie/byGen/${searchGenre}/`, moviesMiniDatabase)
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
        console.log(randomId1, randomId2, randomId3);
        getMovieData(randomId1);
		getMovieData(randomId2);
		getMovieData(randomId3);
    })
	.catch(err => console.error(err));
};

// Function generates 3 random indices to pass through the displayMovieInfo function
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
};

// Function that displays the movie info to the UI
let displayMovieInfo = (movieImage, movieTitle, caption, releaseDate) => {
	console.log(movieTitle, caption, releaseDate.month, releaseDate.day, releaseDate.year);

	// Hides initial page content
	let featurePresentationLoad = document.querySelector('.screen-load-gif');
	featurePresentationLoad.style.display = 'none';
	
	let mainSection = document.getElementById('main-section');
	let movieSection = document.createElement('section');
	movieSection.classList.add('movie-data-container');
	mainSection.appendChild(movieSection);
	// Background frame image
	let movieFrame = document.createElement('section');
	movieFrame.classList.add('movie-frame');
	movieSection.appendChild(movieFrame);
	// Movie poster URL from API
	let moviePoster = document.createElement('img');
	moviePoster.classList.add('movie-image');
	moviePoster.setAttribute('class', 'movie-image');
	moviePoster.src = movieImage;
	moviePoster.alt = caption;
	movieFrame.appendChild(moviePoster);
	// Info section for movie profile
	let marqueeInfo = document.createElement('section');
	marqueeInfo.classList.add('marquee-section');
	movieSection.appendChild(marqueeInfo);
	// Title info from API
    let titleName = document.createElement('p');
	titleName.classList.add('text-styling', 'is-size-4', 'is-size-5-touch');
    titleName.textContent = movieTitle;
	marqueeInfo.appendChild(titleName);
	// Caption info from API
    let movieCaption = document.createElement('p');
    movieCaption.classList.add('text-styling', 'is-size-6', 'is-size-7-touch');
	movieCaption.textContent = caption;
	marqueeInfo.appendChild(movieCaption);
};

getMovieByGenre();
