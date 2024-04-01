// Order.html for Accordion Payment

// const accordionBtns = document.querySelectorAll(".accordion-button-1");

// for (let index = 0; index < accordionBtns.length; index++) {
//     const btnAcc = accordionBtns[index];
//     const accContent = btnAcc.nextElementSibling.querySelector('.accordion-content-1');

//     btnAcc.addEventListener('click', () => {
//         btnAcc.classList.toggle("active");
//         if (accContent && accContent.classList.contains("hidden")) {
//             accContent.classList.remove("hidden");
//         } else if (accContent) {
//             accContent.classList.add("hidden");
//         }
//     });
// }


const caraItem = document.querySelectorAll('.content-item');

caraItem.forEach(element => {
    const caraBtn = element.querySelector('.icon-btn');
  
    element.addEventListener('click', () => {
        const open = element.classList.toggle('open');
        if (open) {
            caraBtn.classList.add("rotate-180");
            caraBtn.classList.add('duration-300');
            caraBtn.classList.add('transition-all');
   
        } else {
            caraBtn.classList.remove("rotate-180");
        }
      
    });

});