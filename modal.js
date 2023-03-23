// creating modal object that includes, titles, labels, text, button: properties we run through modal
class mainPageModal {
	constructor ({
		titleText,
		messageText,
		watchText,
		cancelText,
	}){
		this.titleText = titleText;
		this.messageText = messageText;
		this.watchText = watchText;
		this.cancelText = cancelText;
	}
}

const confirmModal = new mainPageModal ({
	titleText: 'Congrats! We found what youre looking for',
	messageText: 'Movie Insert',
	watchText: 'Watch Now',
	cancelText: 'Search Again',
});
console.log(confirmModal);
// creating modal that opens 
createAndOpen();{
	thisModalElem = document.createElement('div');
	thisModalElem.classList.add('modal');

	document.body.appendChild(this.ModalElem);
}
// when done we should be able to use modal with this function, once string is inputed
document.getElementById('openModal')
.addEventListener('click', () =>{
	console.log("click")
	confirmModal.createAndOpen();
});