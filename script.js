// Get genre list from API
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3c02005a87mshb2ae9fa4e6ea20ap173d47jsn23043256962d',
		'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
	}
};

fetch('https://moviesminidatabase.p.rapidapi.com/genres/', options)
.then(response => response.json())
.then(data => {
	console.log(data);
	
	// convert data to array
	const genreArray = Array.from(data.results);
	console.log(genreArray);

	const genreDropdownList = document.querySelector('#genre-dropdown');

	for (let i = 0; i < 26; i++) {
	const obj = genreArray[i];
	for (const key in obj) {
		if (obj.hasOwnProperty(key)) {
		const genreName = obj[key];
		console.log(genreName);

		// Create and append the dropdown items from the array
		let genreDropdownItem = document.createElement('option');
		genreDropdownItem.textContent = genreName;
		genreDropdownList.appendChild(genreDropdownItem);
		};
	};
	};
})
.catch(error => {
  console.error(error);
});






// // Function to pull genres from API
// let getGenres = function() {
// 	let searchGenre = document.querySelector('#genre-dropdown').ariaValueMax;
// 	console.log(searchGenre);
// 	fetch('https://moviesminidatabase.p.rapidapi.com/genres/', options)
// }
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '3c02005a87mshb2ae9fa4e6ea20ap173d47jsn23043256962d',
// 		'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
// 	}
// };

// fetch('https://moviesminidatabase.p.rapidapi.com/genres/', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));





