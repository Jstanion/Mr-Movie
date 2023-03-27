
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
    homeButtonTextElem.setAttribute("onclick", "document.location='./main-page.html'");
    homeButtonTextElem.textContent = this.homeText;

    homeButtonTextElem.addEventListener('click', () => {
        onHome('Success');
        this.close();
    });

    modalContentElem.appendChild(homeButtonTextElem);

	document.body.appendChild(this.modalElem);
}

open(){
    console.log('It is open');
    return new Promise((resolve, reject)=>{
        console.log(this)
        this.createAndOpen(resolve, reject);
    });
};

close(){
    this.modalElem.classList.remove('open');
    setTimeout(()=>{
        document.body.removeChild(this.modalElem); }, 400);
    };
};