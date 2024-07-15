// script.js

const popupForm = document.querySelector('.popup-form');
const contactUsButton = document.querySelector('#contact-us-button');
const overlay = document.querySelector('.overlay');
const endPointUrl = 'https://getform.io/f/bjjemrrb';

contactUsButton.addEventListener('click', () => {
    popupForm.classList.add('show');
    overlay.classList.add('show');
});

overlay.addEventListener('click', () => {
    popupForm.classList.remove('show');
    overlay.classList.remove('show');
});

popupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // add your form submission logic here
    console.log('Form submitted!');
});
 // replace with your endpoint URL
