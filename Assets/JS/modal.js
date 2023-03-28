
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
	};

// creating modal that opens 
createAndOpen(onHome){
 
    // Removes the data container from previous search if it exists
    if (document.querySelector('.data-container')) {
        console.log('works')
        let previousContent = document.querySelector('.data-container');
        previousContent.remove();
    };
    
    // Modal element
	this.modalElem = document.createElement('div');
	this.modalElem.classList.add('home-modal', 'year-dropdown', 'genre-dropdown', 'search-input', 'is-flex', 'is-justify-content-center', 'is-align-items-center');
    document.body.appendChild(this.modalElem);

    // Content container
    const modalContentElem = document.createElement('div');
    modalContentElem.classList.add('my-content');
    this.modalElem.appendChild(modalContentElem);

    // Heading
    const titleTextElem = document.createElement('p');
    titleTextElem.classList.add('titleText');
    titleTextElem.textContent = this.titleText;
    modalContentElem.appendChild(titleTextElem);

    // Movie information
    const movieDataElem = document.createElement('p');
    movieDataElem.classList.add('data-container');
    modalContentElem.appendChild(movieDataElem);
    
    const movieInfoElem = document.createElement('p');
    movieInfoElem.classList.add('container-dos');
    movieDataElem.appendChild(movieInfoElem);
    
    // Home button
    const homeButtonTextElem = document.createElement('button');
    homeButtonTextElem.classList.add('homeButtonText');
    homeButtonTextElem.textContent = this.homeText;
    modalContentElem.appendChild(homeButtonTextElem);

    const modalElem = document.querySelector('.home-modal')
    modalElem.addEventListener('click', (event) => {
        if (event.target == homeButtonTextElem || event.target == modalElem) {
            this.close();
        };
    });
};

open(){
    return new Promise((resolve, reject)=>{
        console.log(this)
        this.createAndOpen(resolve, reject);
    });
};

close(){
    this.modalElem.classList.remove('open');
        document.body.removeChild(this.modalElem);
    };
};
