// Start Jace's work section
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
	const genreArray = Array.from(data.results)
    for (let i = 0; i < 21; i++) {
        const obj = genreArray[i];
        for (const key in obj) {
            if (obj.hasOwnProperty(key)){
                let genreName = obj[key];
            };
        };
    };
});

const practiceButton = document.getElementById("practice-button");
practiceButton.addEventListener("click", function() {
    // Your code to execute when the button is clicked goes here
});


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


//   // Make a request to the API
//   fetch('https://moviesdatabase.p.rapidapi.com/titles/utils/genres')
//     .then(response => response.json())
//     .then(data => {
//       // Parse the data and update the HTML section
//       let apiData = document.getElementById('api-data');
//       apiData.innerHTML = `The temperature is ${data.temperature} degrees.`;
//     });

// // Get the parameter value from the URL
// const urlParams = new URLSearchParams(window.location.search);
// const genre = urlParams.get("genre");

// // Fetch the movie recommendations from the web API
// fetch("https://moviesminidatabase.p.rapidapi.com/movie/${dropdownCategory}/${selectedOption}/" + encodeURIComponent(genre))
//   .then(response => response.json())
//   .then(data => {
//     // Display the movie recommendations on the page
//     // ...
//   })
//   .catch(error => {
//     console.error(error);
//   });

fetch()


// End Jace's work section






// Start Abigail's work section 


// End Abigail's work section







// Start Michael's work section


// End Michael's work section







// Start Joey's work section


// End Joey's work section