
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

// Pulls genre data from API
fetch('https://moviesminidatabase.p.rapidapi.com/genres/', moviesMiniDatabase)
.then(response => response.json())
.then(data => {
	// Create an array of selected data
	const genreArray = Array.from(data.results);
    const filteredArray = [];
    for (let i = 0; i < 21; i++) {
        filteredArray.push(genreArray[i]);
        // Create and append the dropdown items from the array
        let genreDropdownItem = document.createElement('a');
        genreDropdownItem.classList.add('navbar-item', 'genre-item');
        genreDropdownItem.textContent = filteredArray[i].genre;
        createGenreList.appendChild(genreDropdownItem);
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

// Array set to alphabetize genres for easier navigation using carousel
let slideGenres = ['Action', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Docoumentary', 'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'Romance', 'Sci-Fi', 'Sport', 'Thriller', 'War', 'Western'];

// Function to create and append carousel buttons and genre titles
// NOTE: I know we could have used this array for the genre movie title function but we wanted to show that we can pull a specific set of data from an API and create a usable array from that data.
for(let i = 0; i <= 20; i++){
	let createSlide = function() {
		const swiperContainer = document.querySelector(".slider-container");
		// Create slider list items
		const sliderLi = document.createElement("li");
		swiperContainer.appendChild(sliderLi);
		// Add anchor tag to button
		const anchorEl = document.createElement('a');
		anchorEl.setAttribute("href",'./movie-selection.html');
		sliderLi.appendChild(anchorEl);
		// Add img file to button
		const popcornImg = document.createElement("img");
		popcornImg.classList.add("popcorn-slide");
		popcornImg.src = "./Assets/images/popcorn.png";
		popcornImg.alt = slideGenres[i];
		anchorEl.appendChild(popcornImg);
		// Create genre title element
		const genreName = document.createElement('p');
		genreName.classList.add("genre-list-item");
		genreName.textContent = slideGenres[i];
		sliderLi.appendChild(genreName);
	};
	createSlide();
};

// Function that provides movie ID's based on title name search
let getMovieByTitle = (searchBarEntry) => {
	fetch(`https://moviesminidatabase.p.rapidapi.com/movie/imdb_id/byTitle/${searchBarEntry}/`, moviesMiniDatabase)
	.then(response => response.json())
	.then(response => {
		if(!response.results[0]) {
		// added redirect to 404 page
			// window.location.href = "./search-error.html"
			return;
		} else {
		console.log(response);
		console.log(response.results[0].imdb_id); 
		getMovieData(response.results[0].imdb_id);
		};
	})
	.catch(err => console.error(err));
};

// Function that provides actor ID's based on actor name search
let getActorId = (searchBarEntry) => {
	fetch(`https://moviesminidatabase.p.rapidapi.com/actor/imdb_id_byName/${searchBarEntry}/`, moviesMiniDatabase)
	.then(response => response.json())
	.then(response => {
		if(!response.results[0] || response.results[0].imdb_id.includes('title')) {
		// added redirect to 404 page ln 90
			// window.location.href = "./search-error.html"
			return;
		} else {
		console.log(response); 
		console.log(response.results[0].imdb_id);
		let actorId = response.results[0].imdb_id;
		getMovieByActor(actorId);
		};
	})
	.catch(err => console.error(err));
};

// Function that provides movie ID's based on an actor ID
let getMovieByActor = (actorId) => {
	fetch(`https://moviesminidatabase.p.rapidapi.com/movie/byActor/${actorId}/`, moviesMiniDatabase)
	.then(response => response.json())
	.then(response => {
		console.log(response);
		const myArray = response.results
		const randomIndex = Math.floor(Math.random() * myArray.length);
		const randomId = myArray[randomIndex][0].imdb_id;
		console.log(randomId)
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
		displayMovieInfo(movieImage, movieTitle, caption);
	})
	.catch(err => console.error(err));
};

// Function that displays the movie info to the modal
let displayMovieInfo = (movieImage, movieTitle, caption) => {
	const resultModal = document.querySelector(".data-container");
	const textContainer = document.querySelector(".container-dos");
	const moviePoster = document.createElement("img");
	moviePoster.classList.add('movie-image');
	moviePoster.setAttribute("id", "modal-image");
	moviePoster.src = movieImage;
	moviePoster.alt = caption;
	resultModal.appendChild(moviePoster);

	const titleName = document.createElement("p");
	titleName.textContent = movieTitle;
	textContainer.appendChild(titleName);

	const movieCaption = document.createElement("p");
	movieCaption.classList.add("is-size-5");
	movieCaption.textContent = caption;
	textContainer.appendChild(movieCaption);

	console.log(movieTitle, caption);
};

// Triggers the modal function in modal.js
const confirmModal = new mainPageModal ({
	titleText: 'Congrats! We found what you are looking for!',
	movieDataContainer: 'movie insert',
	homeText: 'Home',
});

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
searchInput.addEventListener('keypress', (event) => {
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

// Toggles the dropdown menus
const genreDropdownEl = document.querySelector('.has-dropdown.genre');
const genreMenu = genreDropdownEl.querySelector('.dropdown-menu');
genreDropdownEl.addEventListener('click', () => {
	genreDropdownEl.classList.toggle('is-active');
	genreMenu.classList.toggle('display-toggle');
});

const yearDropdownEl = document.querySelector('.has-dropdown.year');
const yearMenu = yearDropdownEl.querySelector('.dropdown-menu');
yearDropdownEl.addEventListener('click', () => {
	yearDropdownEl.classList.toggle('is-active');
	yearMenu.classList.toggle('display-toggle');
});

// Stores the genre selection to be used on the movie-selections page
const carouselButtons = document.querySelectorAll('.popcorn-slide');
console.log(carouselButtons);
carouselButtons.forEach(button => {
	button.addEventListener('click', function(button) {
		const buttonValue = button.target.alt;
		localStorage.setItem('storedGenre', buttonValue);
	});
});