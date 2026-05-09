const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('#nav-bar');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    menuButton.classList.toggle('show');
});
