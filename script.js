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
	console.log(data);
	
	// convert data to array
	const genreArray = Array.from(data.results);
	console.log(genreArray);
	
	for (let i = 0; i < 21; i++) {
		const obj = genreArray[i];
		for (const key in obj) {
			if (obj.hasOwnProperty(key)) {
				const genreName = obj[key];
				console.log(genreName);
				
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
console.log(yearArray);

yearArray.forEach(year => {
	
	// Create and append the years array to a dropdown list
	let yearDropdownItem = document.createElement('a');
	yearDropdownItem.classList.add('navbar-item', 'genre-item');
	yearDropdownItem.textContent = year;
	yearDropdownItem.value = year;
	createYearList.appendChild(yearDropdownItem);
});

// Function that provides movies based on title name search
let getMovieByTitle = (searchBarEntry) => {
	console.log(searchBarEntry)
	fetch(`https://moviesminidatabase.p.rapidapi.com/movie/imdb_id/byTitle/${searchBarEntry}/`, moviesMiniDatabase)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
};

// Function that provides movies based on dropdown selections
let getMovieByDropdown = (selectedOption, dropdownCategory) => {
	console.log(selectedOption, dropdownCategory);
	fetch(`https://moviesminidatabase.p.rapidapi.com/movie/${dropdownCategory}/${selectedOption}/`, moviesMiniDatabase)
	.then(response => response.json())
	.then(response => { 
		console.log(data); 
		getMovieData(data.results[0].imdb_id) 
	})
	.catch(err => console.error(err));
};

// Function that provides movies based on actor name search
let getMovieByActor = (searchBarEntry) => {
	fetch(`https://moviesminidatabase.p.rapidapi.com/actor/imdb_id_byName/${searchBarEntry}/`, moviesMiniDatabase)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}

// Function that provides movie data based on IMDB ID
let getMovieData = (titleId) => {
	fetch(`https://moviesdatabase.p.rapidapi.com/titles/x/titles-by-ids?idsList=${titleId}`, moviesDatabase)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}

// Event listener grabbing the dropdown value and selected option value
dropdownEl.forEach(dropdownEl => {
	dropdownEl.addEventListener('click', (event) => {
		const dropdownCategory = event.target.dataset.myParam;
		console.log(dropdownCategory);
		const dropdownSelection = document.querySelectorAll('.genre-item');
		
		dropdownSelection.forEach(dropdownSelection => {
			dropdownSelection.addEventListener('click', (event) => {
				const selectedOption = event.target.textContent;
				console.log(selectedOption);
				getMovieByDropdown(selectedOption, dropdownCategory);	
			});
		});
	});
});

searchInput.addEventListener('keydown', (event) => {
	if(event.key === 'Enter') {
		const searchBarEntry = searchInput.value;
		console.log(searchBarEntry)
		getMovieByTitle(searchBarEntry);
		getMovieByActor(searchBarEntry);
	};
});

// submitActorButton.addEventListener('click', () => {
// 	const searchBarEntry = actorSearchBar.value;
// 	console.log(searchBarEntry)
// 	getMovieByActor(searchBarEntry);
// });





// Start Jace's work section


// End Jace's work section






// Start Abigail's work section


// End Abigail's work section







// Start Michael's work section


// End Michael's work section







// Start Joey's work section


// End Joey's work section