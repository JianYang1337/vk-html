const userTopNav = document.getElementsByClassName('user')[0];
const userDropdown = document.getElementsByClassName('dropdown')[0];

userTopNav.addEventListener('click', (e) => {
	e.stopPropagation();
	userDropdown.classList.toggle('dropdown--active');
	userTopNav.classList.add('user--active');
});

document.body.addEventListener('click', () => {
	userDropdown.classList.remove('dropdown--active');
	userTopNav.classList.remove('user--active');
});

userDropdown.addEventListener('click', (e) => {
	e.stopPropagation();
});



const infoToggle = document.getElementsByClassName('show-detailed-info')[0];

infoToggle.addEventListener('click', () => {
	infoToggle.classList.toggle('show-detailed-info--show-more');
});


const modalPhoto = document.getElementsByClassName('modal-photo')[0];
const modalPhotoContent = document.getElementsByClassName('modal-photo__content')[0];
const avatar = document.getElementsByClassName('avatar')[0];

avatar.addEventListener('click', () => {
    modalPhoto.classList.add('modal-photo--active');
});

modalPhotoContent.addEventListener('click', (e) => {
	e.stopPropagation();
});

modalPhoto.addEventListener('click', () => {
	modalPhoto.classList.remove('modal-photo--active');
});

// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/1');
// xhr.send();

// xhr.addEventListener('load', () => {
// 	const data = JSON.parse(xhr.responseText);
// 	// console.log(data);
// 	const fullName = document.getElementsByClassName('fullname')[0];
// 	fullName.innerText = data.name;

// 	console.log(data.name);
	
// });