// Header User Dropdown
const btnDropdown = document.getElementById('menu-user');
const dropContent = document.getElementById('myDropdown');
const showDrop = "hidden";
function showDropUser(){
    dropContent.classList.toggle(showDrop);
}

btnDropdown.addEventListener('click', showDropUser);