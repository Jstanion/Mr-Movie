
// creating modal object that includes, titles, labels, text, button: properties we run through modal
class mainPageModal {
	constructor ({
		titleText,
		messageText,
		homeText,
	}){
		this.titleText = titleText;
		this.messageText = messageText;
		this.homeText = homeText;
	}

// creating modal that opens 
createAndOpen(onHome){
	this.modalElem = document.createElement('div');
	this.modalElem.classList.add('home-modal');
    setTimeout(() => {
        this.modalElem.classList.add('year-dropdown');
    }, 10);

    const modalContentElem = document.createElement('div');
    modalContentElem.classList.add('content');

    this.modalElem.appendChild(modalContentElem);

    //heading
    const titleTextElem = document.createElement('p');
    titleTextElem.classList.add('titleText');
    titleTextElem.textContent = this.titleText;

    modalContentElem.appendChild(titleTextElem);

    //message
    const messageTextElem = document.createElement('p');
    messageTextElem.classList.add('messageText');
    messageTextElem.textContent = this.messageText;

    modalContentElem.appendChild(messageTextElem);

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