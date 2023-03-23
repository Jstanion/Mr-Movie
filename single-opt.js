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
	
	// convert data to array
        const genreArray = Array.from(data.results);

        for (let i = 0; i < 21; i++) {
            const obj = genreArray[i];
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    const genreName = obj[key];
                    console.log(genreName)

                };
            };
        };
    })
    .catch(error => {
        console.error(error);
    });

// Function that provides movie ID's based on dropdown selections
let getRandomGenre = (genreName, ) => {
    fetch(`https://moviesminidatabase.p.rapidapi.com/movie/byGen/${genreName}/`, moviesMiniDatabase)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            console.log(response.results[0].imdb_id);
            getMovieData(response.results[0].imdb_id);
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