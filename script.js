

let menu1 = document.getElementById('menu');

let toggle_open = document.getElementById ('toggle_open');

toggle_open.addEventListener('click', toggleMenu);

function toggleMenu () {
    menu1.classList.toggle('show-menu')
}