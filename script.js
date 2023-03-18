// Get genre list from API
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3c02005a87mshb2ae9fa4e6ea20ap173d47jsn23043256962d',
		'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
	}
};

// Global variables
const genreDropdownList = document.querySelector('#genre-dropdown');

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
		genreDropdownItem.setAttribute('id', 'genre-choice')
		genreDropdownItem.textContent = genreName;
		genreDropdownList.appendChild(genreDropdownItem);
		};
	};
	};
})
.catch(error => {
  console.error(error);
});

// Function that provides a movie selection based on genre selection
let getMovieByGenre = function(selectedOption) {

	fetch(`https://moviesminidatabase.p.rapidapi.com/movie/byGen/${selectedOption}/`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
};


genreDropdownList.addEventListener('change', function(event) {
	const selectedOption = event.target.value;
	getMovieByGenre(selectedOption);
});




