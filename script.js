// Set up API key for application use
const apiKey ="3c02005a87mshb2ae9fa4e6ea20ap173d47jsn23043256962d"

// Set genre list to an array
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3c02005a87mshb2ae9fa4e6ea20ap173d47jsn23043256962d',
		'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
	}
};

fetch('https://moviesminidatabase.p.rapidapi.com/genres/', options)
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(err => console.error(err));
	
	//using an array constructor to build genre array
	let genreArray = Array.from(data);






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





