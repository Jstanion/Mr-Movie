// Get genre list from API
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3c02005a87mshb2ae9fa4e6ea20ap173d47jsn23043256962d',
		'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
	}
};

// Global variables
const createGenreList = document.querySelector('#genre-dropdown');
const createYearList = document.querySelector('#year-dropdown');
const searchEl = document.querySelectorAll('.search-element');

// Pulls genre data from API
fetch('https://moviesminidatabase.p.rapidapi.com/genres/', options)
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
				let genreDropdownItem = document.createElement('option');
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
	let yearDropdownItem = document.createElement('option');
	yearDropdownItem.textContent = year;
	yearDropdownItem.value = year;
	createYearList.appendChild(yearDropdownItem);
});

// Function that pulls API results from search bar
let getMovieBySearchBar = function(searchBarEntry) {
	console.log(searchBarEntry)
	fetch(`https://moviesminidatabase.p.rapidapi.com/movie/imdb_id/byTitle/${searchBarEntry}/`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
};

// Function that provides a movie selection based on dropdown selections
let getMovieByDropdown = function(selectedOption, dropdownCategory) {
	console.log(selectedOption, dropdownCategory);
	fetch(`https://moviesminidatabase.p.rapidapi.com/movie/${dropdownCategory}/${selectedOption}/`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
};

searchEl.forEach(searchEl => {
	searchEl.addEventListener('change', (event) => {
		const dropdownCategory = event.target.dataset.myParam;
		const selectedOption = event.target.value;
		getMovieByDropdown(selectedOption, dropdownCategory);
	});

	searchEl.addEventListener('click', (event) => {
		const searchBarEntry = event.target.value
		getMovieBySearchBar();
	});
});



// dropdownList.addEventListener('change', function(event) {
// 	const dropdownCategory = document.querySelector('#genre');
// 	let getParam = function(param) {
// 		console.log(param)
// 	}
// 	const dropdownParam = event.target.dataset.myParam;
// 	const selectedOption = event.target.value;
// 	getParam(dropdownParam);
// 	getMovieByGenre(selectedOption, dropdownCategory);
