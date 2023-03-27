
// creating modal object that includes, titles, labels, text, button: properties we run through modal
class mainPageModal {
	constructor ({
		titleText,
        movieDataContainer,
		homeText,
	}){
		this.titleText = titleText;
		this.movieDataContainer = movieDataContainer;
		this.homeText = homeText;
	}

// creating modal that opens 
createAndOpen(onHome){
	this.modalElem = document.createElement('div');
	this.modalElem.classList.add('home-modal');
    setTimeout(() => {
        this.modalElem.classList.add('year-dropdown');
        //new modal
        this.modalElem.classList.add('genre-dropdown');
        // new modal search input
        this.modalElem.classList.add('search-input');
    }, 10);

    const modalContentElem = document.createElement('div');
    modalContentElem.classList.add('my-content');

    this.modalElem.appendChild(modalContentElem);

    

    //heading
    const titleTextElem = document.createElement('p');
    titleTextElem.classList.add('titleText');
    titleTextElem.textContent = this.titleText;

    modalContentElem.appendChild(titleTextElem);

    const movieDataElem = document.createElement('p');
    movieDataElem.classList.add('data-container');
    const movieInfoElem = document.createElement('p');
    movieInfoElem.classList.add('container-dos');
    
    movieDataElem.appendChild(movieInfoElem);
    modalContentElem.appendChild(movieDataElem);

    //home button
    const homeButtonTextElem = document.createElement('button');
    homeButtonTextElem.classList.add('homeButtonText');
    //refresh homepage
    homeButtonTextElem.setAttribute("onclick", "document.location='./mainpage.html'")
    homeButtonTextElem.textContent = this.homeText;

    homeButtonTextElem.addEventListener('click', () => {
        onHome('Success');
        this.close();
    });

    const body = document.querySelector('.hero-body');
    window.onclick = function(event) {
        console.log('clicked')
        if (event.target == body) {
          location.reload();
        }
      }

    modalContentElem.appendChild(homeButtonTextElem);

	document.body.appendChild(this.modalElem);
}

open(){
    console.log('It is open');
    return new Promise((resolve, reject)=>{
        console.log(this)
        this.createAndOpen(resolve, reject);
    });
}

close(){
    this.modalElem.classList.remove('open');
    setTimeout(()=>{
        document.body.removeChild(this.modalElem); }, 400);
    }
}

// creating function for api to be called into modal

// function fetchDataApi() {
//         fetch('apiurl')
//     .then (response => response.json())
//     .then(data => {
//         // Display API data in modal
//         const apiDataDiv = document.querySelector('#apiData');
//         apiDataDiv.innerHTML = `<p>${data.title}</p><p>${data.body}</p>`;
//       });

//       // Trigger function on modal open
// const modal = document.querySelector('#myModal');
// const btn = document.querySelector('#myBtn');
// const span = document.querySelector('.close');

// btn.onclick = function() {
//   modal.style.display = 'block';
//   fetchDataFromAPI();
// }

// span.onclick = function() {
//   modal.style.display = 'none';
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = 'none';
//   }
// }
//   }

