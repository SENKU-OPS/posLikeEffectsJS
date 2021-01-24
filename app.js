const textContentSection1 = document.querySelector('.section1__text');
const textContentSection2 = document.querySelector('.section2__text');
const imageSection1 = document.querySelector('.section1__image-img1');
const imageSection2 = document.querySelector('.section2__image-img1');

let windowHeight = window.innerHeight;
window.addEventListener('scroll', () => {
    let textContentPositionSection1 = textContentSection1.getBoundingClientRect().top;


    if (textContentPositionSection1 < windowHeight * 1.1) {
        textContentSection1.style.transform = "translateY(0px)";
        textContentSection1.style.opacity = "1";
    } else {
        textContentSection1.style.transform = "translateY(200px)";
        textContentSection1.style.opacity = "0";

    }
});
window.addEventListener('scroll', () => {
    let textContentPositionSection2 = textContentSection2.getBoundingClientRect().top;
    if (textContentPositionSection2 < windowHeight * 1.1) {
        textContentSection2.style.transform = "translateY(0px)";
        textContentSection2.style.opacity = "1";

    } else {
        textContentSection2.style.transform = "translateY(200px)";
        textContentSection2.style.opacity = "0";

    }

});

window.addEventListener('scroll', () => {
    let imagePositionSection1 = imageSection1.getBoundingClientRect().top;
    if (imagePositionSection1 < windowHeight * 1.1) {
        imageSection1.style.transform = "translateY(0px)";
        imageSection1.style.opacity = "1";

    } else {
        if (window.innerHeight < 400) {
            imageSection1.style.transform = "translateY(90px)";
        } else {
            imageSection1.style.transform = 'translateY(290px)';
        }
        imageSection1.style.opacity = "0";

    }

});

window.addEventListener('scroll', () => {
    let imagePositionSection2 = imageSection2.getBoundingClientRect().top;
    if (imagePositionSection2 < windowHeight * 1.1) {
        imageSection2.style.transform = "translateY(0px)";
        imageSection2.style.opacity = "1";

    } else {
        if (window.innerHeight < 400) {
            imageSection2.style.transform = "translateY(90px)";
        } else {
            imageSection2.style.transform = 'translateY(290px)';
        }
        imageSection2.style.opacity = "0";

    }

});