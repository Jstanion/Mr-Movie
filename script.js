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

// Global variables
const createGenreList = document.querySelector('#genre-dropdown');
const createYearList = document.querySelector('#year-dropdown');
const searchInput = document.getElementById('search-input');
const dropdownEl = document.querySelectorAll('.search-element');
const dropdownSelection = document.querySelectorAll('.genre-item');
const homeButton = document.getElementById('btn-home');

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
				
				// Create and append the dropdown items from the array
				let genreDropdownItem = document.createElement('a');
				genreDropdownItem.classList.add('navbar-item', 'genre-item')
				genreDropdownItem.textContent = genreName;
				createGenreList.appendChild(genreDropdownItem);
			};
		};
	};
})
.catch(error => {
	console.error(error);
});

// Create an array of years ranging from 1960 to 2021
const yearArray = Array.from({length: 62}, (_, i) => i + 1960).reverse();

yearArray.forEach(year => {
	
	// Create and append the years array to a dropdown list
	let yearDropdownItem = document.createElement('a');
	yearDropdownItem.classList.add('navbar-item', 'genre-item');
	yearDropdownItem.textContent = year;
	yearDropdownItem.value = year;
	createYearList.appendChild(yearDropdownItem);
});

// Function that provides movie ID's based on title name search
let getMovieByTitle = (searchBarEntry) => {
	fetch(`https://moviesminidatabase.p.rapidapi.com/movie/imdb_id/byTitle/${searchBarEntry}/`, moviesMiniDatabase)
	.then(response => response.json())
	.then(response => {
		if(!response.results[0]) {
			return;
		} else {
		console.log(response);
		console.log(response.results[0].imdb_id); 
		getMovieData(response.results[0].imdb_id);
		}
	})
	.catch(err => console.error(err));
};

// Function that provides actor ID's based on actor name search
let getActorId = (searchBarEntry) => {
	fetch(`https://moviesminidatabase.p.rapidapi.com/actor/imdb_id_byName/${searchBarEntry}/`, moviesMiniDatabase)
	.then(response => response.json())
	.then(response => { 
		if(!response.results[0]) {
			return;
		} else {
		console.log(response); 
		console.log(response.results[0].imdb_id);
		let actorId = response.results[0].imdb_id
		getMovieByActor(actorId)
		}
	})
	.catch(err => console.error(err));
};

// Function that provides movie ID's based on an actor ID
let getMovieByActor = (actorId) => {
	fetch(`https://moviesminidatabase.p.rapidapi.com/movie/byActor/${actorId}/`, moviesMiniDatabase)
	.then(response => response.json())
	.then(response => {
		console.log(response);
		const myArray = response.results;
		const randomIndex = Math.floor(Math.random() * myArray.length);
		const randomId = myArray[randomIndex][0].imdb_id;
		getMovieData(randomId);
	})
	.catch(err => console.error(err));
};

// Function that provides movie ID's based on dropdown selections
let getMovieByDropdown = (selectedOption, dropdownCategory) => {
	console.log(selectedOption, dropdownCategory);
	fetch(`https://moviesminidatabase.p.rapidapi.com/movie/${dropdownCategory}/${selectedOption}/`, moviesMiniDatabase)
	.then(response => response.json())
	.then(response => { 
		console.log(response);
		const myArray = response.results;
		const randomIndex = Math.floor(Math.random() * myArray.length);
		const randomId = myArray[randomIndex].imdb_id;
		console.log(randomId);
		getMovieData(randomId); 
	})
	.catch(err => console.error(err));
};

// Function that provides movie data based on IMDB ID
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
	let moviePoster = document.querySelector('#movie-image');
	moviePoster.src = movieImage;
	moviePoster.alt = caption;
	console.log(movieTitle, caption, releaseDate.month, releaseDate.day, releaseDate.year);
};

// Event listener grabbing the dropdown value and selected option value
dropdownEl.forEach(dropdownEl => {
	dropdownEl.addEventListener('click', (event) => {
		const dropdownCategory = event.target.dataset.myParam;
		const dropdownSelection = document.querySelectorAll('.genre-item');
		
		dropdownSelection.forEach(dropdownSelection => {
			dropdownSelection.addEventListener('click', (event) => {
				const selectedOption = event.target.textContent;
				getMovieByDropdown(selectedOption, dropdownCategory);
				console.log('modal button click');
				confirmModal
				.open()
			//taking further action
			.then(value => console.log('User clicked Home: ', value));	
			});
		});
	});
});

// Event listener for the search bar
searchInput.addEventListener('keydown', (event) => {
	if(event.key === 'Enter') {
		// Sets the text entry to a string value in a variable
		const searchBarEntry = searchInput.value;
		getMovieByTitle(searchBarEntry);
		getActorId(searchBarEntry);
		console.log('modal button click');
		confirmModal
		.open()
		.then(value => console.log('User clicked Home: ', value));
	};
});





// Start Jace's work section

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

// function showMovieRecommendations() {
// 	// Get the selected option value
// 	const selectedOption = document.getElementById("movie-dropdown").value;
  
// 	// Construct the URL of the new page with the parameter
// 	const url = "file:///C:/Users/jacel/documents/amazing-project-1/movie-selection.html" + encodeURIComponent(selectedOption);
  
// 	// Open the new page
// 	window.open(url, "_blank");
//   }
  
	
// End Jace's work section






// Start Abigail's work section


const confirmModal = new mainPageModal ({
	titleText: 'Congrats! We found what you are looking for!',
	messageText: 'Movie Insert',
	homeText: 'Home',
});

// End Abigail's work section






// Start Michael's work section


// End Michael's work section







// Start Joey's work section


// End Joey's work section