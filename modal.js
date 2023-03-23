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
	thisModalElem = document.createElement('div');
	thisModalElem.classList.add('modal');

	document.body.appendChild(this.ModalElem);
}
