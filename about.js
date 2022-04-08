console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}

const compliment = () => {
	
	alert(`You Look nice today`)
}

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let img = document.querySelector(`img`);

img.addEventListener(`mouseover`, compliment)