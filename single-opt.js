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
        const filteredArray = [];
        for (let i = 0; i < 21; i++) {
            filteredArray.push(genreArray[i]);
        };
        const randomIndex = Math.floor(Math.random() * filteredArray.length);
        const randomGenreObject = filteredArray[randomIndex].genre;
        console.log(randomGenreObject);
        const genreToUse = randomGenreObject
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
            console.log(randomMovieObject);
            titleId = randomMovieObject.imdb_id;
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
            displayMovieInfo(movieImage, movieTitle, caption);
        })
        .catch(err => console.error(err));
};

// Function that displays the movie info to the UI
let displayMovieInfo = (movieImage, movieTitle, caption) => {
    console.log(movieTitle, caption);

    // Hides initial page content
	let featurePresentationLoad = document.querySelector('.screen-load-gif');
	featurePresentationLoad.style.display = 'none';

    let mainSection = document.getElementById('main-section')
	let movieSection = document.createElement('section')
	movieSection.classList.add('movie-data-container')
	mainSection.appendChild(movieSection)

    let movieFrame = document.createElement('section')
	movieFrame.classList.add('movie-frame', 'mb-5')
	movieSection.appendChild(movieFrame)

    let moviePoster = document.createElement('img');
	moviePoster.classList.add('movie-image')
	moviePoster.setAttribute('class', 'movie-image')
	moviePoster.src = movieImage;
	moviePoster.alt = caption;
	movieFrame.appendChild(moviePoster)

    let marqueeInfo = document.createElement('section')
	marqueeInfo.classList.add('marquee-section', 'mt-5')
	movieSection.appendChild(marqueeInfo)

    let titleName = document.createElement('p')
	titleName.classList.add('text-styling', 'is-size-4', 'is-size-5-touch')
    titleName.textContent = movieTitle;
	marqueeInfo.appendChild(titleName)

    let captionInfo = document.createElement('p')
    captionInfo.classList.add('text-styling', 'is-size-6', 'is-size-7-touch')
    captionInfo.textContent = caption;
	marqueeInfo.appendChild(captionInfo)
};