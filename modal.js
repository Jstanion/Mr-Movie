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
createAndOpen(onConfirm){
	this.modalElem = document.createElement('div');
	this.modalElem.classList.add('modal');
    setTimeout(() => {
        this.modalElem.classList.add('open');
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
    homeButtonTextElem.textContent = this.homeText;

    homeButtonTextElem.addEventListener('click', () => {
        onConfirm('Success');
        this.close();
    });

    modalContentElem.appendChild(homeButtonTextElem);

	document.body.appendChild(this.modalElem);
}

open(){
    return new Promise((resolve, reject)=>{
        this.createAndOpen(resolve, reject);
    });
}

close(){
    this.modalElem.classList.remove('open');
    setTimeout(()=>{
        document.body.removeChild(this.modalElem); }, 400);
    }
}