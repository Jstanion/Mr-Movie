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



// Pulls genre data from API
fetch('https://moviesminidatabase.p.rapidapi.com/genres/', moviesMiniDatabase)
    .then(response => response.json())
    .then(data => {
        const genreArray = Array.from(data.results);
	// convert data to array
        for (let i = 0; i < 21; i++) {
            const obj = genreArray[i];
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    let genreName = obj[key];
                };
            };
        };
        const randomGenreObject = genreArray[Math.floor(Math.random() * genreArray.length)];
        console.log(randomGenreObject.genre) 
        const genreToUse = randomGenreObject.genre
        getMovieId(genreToUse);
    })
    .catch(error => {
        console.error(error);
    })
   

// Function that provides movie ID's based on dropdown selections
let getMovieId = (genreName) => {
    fetch(`https://moviesminidatabase.p.rapidapi.com/movie/byGen/${genreName}/`, moviesMiniDatabase)
        .then(response => response.json())
        .then(response => {
            const randomMovieObject = response.results[Math.floor(Math.random() * response.results.length)]; 
            console.log('getmovie', response);
            console.log(response.results[0].imdb_id);
            titleId = response.results[0].imdb_id;
            getMovieData(titleId);
        })
        .catch(err => console.error(err));
        
};


// Function that provides movie data based on IMDB ID
let getMovieData = (titleId) => {
    fetch(`https://moviesdatabase.p.rapidapi.com/titles/x/titles-by-ids?idsList=${titleId}`, moviesDatabase)
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
	let moviePoster = document.querySelector('#movie-image');
	moviePoster.src = movieImage;
	moviePoster.alt = caption;
	let titleName = document.querySelector('#title');
    titleName.textContent = movieTitle;
    let captionInfo = document.querySelector('#caption');
    captionInfo.textContent = caption;
    let movieDate = document.querySelector('#release-date');
    movieDate.textContent = 'Release Date: ' + releaseDate.month + '/' + releaseDate.day + '/' + releaseDate.year; 
};