// Header Modal Search
const modal = document.getElementById("searchModal");
const btn = document.getElementById("searchBtn");
const bgModal = document.getElementsByClassName("closeBtn")[0];
const btnEl = "hidden";
function  showSearch() {
    modal.classList.toggle(btnEl);
  
  }

 
  btn.addEventListener('click', showSearch);
  bgModal.addEventListener('click', showSearch);

  
 
// succes.html
const btnModal = document.querySelector('.tombol-modal');
const bgModalSucces = document.querySelector('.bg-modal-succes');

