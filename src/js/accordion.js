// Order.html for Accordion Payment

    const accordionBtns = document.querySelectorAll(".accordion-button-1");

    for (let index = 0; index < accordionBtns.length; index++) {
        const btnAcc = accordionBtns[index];
        const accContent = btnAcc.nextElementSibling.querySelector('.accordion-content-1');

        btnAcc.addEventListener('click', () => {
            btnAcc.classList.toggle("active");
            if (accContent && accContent.classList.contains("hidden")) {
                accContent.classList.remove("hidden");
            } else if (accContent) {
                accContent.classList.add("hidden");
            }
        });
    }








