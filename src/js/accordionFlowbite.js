
const accordionElement = document.getElementById('accordion-flush');

// create an array of objects with the id, trigger element (eg. button), and the content element
const accordionItems = [
    {
        id: 'accordion-heading-1',
        triggerEl: document.querySelector('#accordion-heading-1'),
        targetEl: document.querySelector('#accordion-body-1'),
        active: false
    },
    {
        id: 'accordion-heading-2',
        triggerEl: document.querySelector('#accordion-heading-2'),
        targetEl: document.querySelector('#accordion-body-2'),
        active: false
    },
    {
        id: 'accordion-heading-3',
        triggerEl: document.querySelector('#accordion-heading-3'),
        targetEl: document.querySelector('#accordion-body-3'),
        active: false
    },
   
];

// options with default values
const options = {
    alwaysOpen: true,
    activeClasses: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
    inactiveClasses: 'text-gray-500 dark:text-gray-400 bg-white',
    onOpen: (item) => {
       
    },
    onClose: (item) => {
        
    },
    onToggle: (item) => {
       
    },
};


// instance options object
const instanceOptions = {
    id: 'accordion-flush',
    override: true
   
    
};


const accordion = new Accordion(accordionElement, accordionItems, options, instanceOptions);

// open accordion item based on id
accordion.close('accordion-heading-1');

accordion.close('accordion-heading-2');

accordion.close('accordion-heading-3');

