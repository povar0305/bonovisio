
AOS.init();
console.log(AOS)
const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        0: { slidesPerView: 1 },
        460: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1240: {
            slidesPerView: 2,
            spaceBetween: 42
        }
    }
});
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
function formValidation() {
    event.preventDefault();
    const formData = new FormData(document.getElementById('form1')); // создаём объект FormData, передаём в него элемент формы
    let name = formData.get('name');
    let email = formData.get('email');
    let text = formData.get('text');

    let element_name = document.getElementsByClassName('form__inner--name');
    let element_email = document.getElementsByClassName('form__inner--email');
    let element_text = document.getElementsByClassName('form__inner--text');
    
    if (name == '' || name.length < 2) {
        element_name[0].classList.add('error');
    } else {
        element_name[0].classList.remove('error');
    };

    if (text == '' || text.length < 2) {
        element_text[0].classList.add('error');
    } else {
        element_text[0].classList.remove('error');
    };

    if (email == '' || !EMAIL_REGEXP.test(email)) {
        element_email[0].classList.add('error');
    } else {
        element_email[0].classList.remove('error');
    };
    if(!(email == '' || !EMAIL_REGEXP.test(email))&&!(text == '' || text.length < 2)&&!(name == '' || name.length < 2)){
        console.log('name',name);
        console.log('email',email);
        console.log('text',text);
    }

}