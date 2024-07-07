
//JavaScript Kodları
//Devamı Gelcek
//. 
//.
//.
//.
//.
//. 
//.33
//.
function scrollToElement(elementSelector, instance = 0) {

    if (elementSelector.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }

    // if(!elements[instance]) {
    //     console.error('Element bulunamadı');
    //     return;
    // }


}



const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2"); g
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    scrollToElement('.header', 1);

});

link3.addEventListener('click', () => {
    scrollToElement('.column');
})


//HTML Kodları
//Javascript


