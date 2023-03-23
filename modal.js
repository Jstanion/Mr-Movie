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
}

// creating modal that opens 
createAndOpen();{
	this.ModalElem = document.createElement('div');
	this.ModalElem.classList.add('modal');
    setTimeout(() => {
        this.ModalElem.classList.add('open');
    }, 10);

    const modalContentElem = document.createElement('div');
    modalContentElem.classList.add('content');

    this.ModalElem.appendChild(modalContentElem);

    //heading
    const titleTextElem = document.createElement('p');
    titleTextElem.classList.add('titleText');
    titleTextElem.textContent = this.titleText;

    modalContentElem.appendChild(titleTextElem);

    //message
    const messageTextElem = document.createElement('p');
    messageTextElem.classList.add('messageText');
    messageTextElem.textContent = this.message.Text;

    modalContentElem.appendChild(messageTextElem);

    //home button
    const homeButtonTextElem = document.createElement('button');
    homeButtonTextElem.classList.add('homeButtonText');
    homeButtonTextElem.textContent = this.homeText;

	document.body.appendChild(this.ModalElem);
}
