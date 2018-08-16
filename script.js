document.querySelector('#display-button').addEventListener('click', () => {
	let element = document.querySelector('.container11');
	if(element.classList.contains('messenger-active')) {
		element.classList.remove('messenger-active');
		element.classList.add('messenger-inactive');
	} else {
		element.classList.remove('messenger-inactive');
		element.classList.add('messenger-active');
	}
});
