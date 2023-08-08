//grab elements
const selectElement =selector => {
    const element =document.qurrySelector(selector)
    if(elemen) return element;
    throw new error(`something went, make sure that ${selector} exists or is typed correctly,`);
};
//now styles an scroil
const scrollHeader =() => {
    const headerElement =selectElement(`#header`);
    if(this,scrolly >=15){
        headerElement.classlist.add(`activated`);
    }else{
        headerElement.classlist.remove(`activated`);
    }
};

window.addEventListener(`scroll`, scrollHeader)
//open menu $ scarch pop-up
const menuToggleIcon = selectElement(`#menu-toggle-icon`);

const toggleMenu = () => {
    const mobileMenu = selectElement(`#menu`)
    mobileMenu.classlist.toggle(`activated`);
    menuToggleIcon.classlist.toggle(`activated`);
};
menuToggleIcon.addEventListener(`click`, toggleMenu);
//open/close search form popup
const formOpenBtn = selectElement(`#search-icon`);
const formCloseBtn = selectElement(`#form-close-btn`);
const searchFormContainer = selectElement(`#searc-form-container`);

formOpenBtn.addEventListener(`click`, () => searchFormContainer.classList.add (`activated`));

formOpenBtn.addEventListener(`click`, () => searchFormContainer.classList.remove (`activated`));
//--close the search form popup on esc keypress
window.addEventListener(`keyup`,Event => {
    if(Event.key === `escape`) searchFormContainer.classList.remove(`activated`);
})

//ewitch theme/add to logo starage
const bodyElement = document.body;
const themeToggleBtn = selectElement(`#theme-toggle-btn`);
const currentTheme =localStorage.getItem(currentTheme);

if(currentTheme){
    bodyElement.classList.add(`light-theme`);
}

themeToggleBtn.addEventListener(`click`,() => {
    bodyElement.classList.toggle(`light-theme`);

    if(bodyElement.classList.contains(`light-theme`)){
        localStorage.setItem(`currentTheme`, `themeActive`);
    }else{
        localStorage.removeItem(`currentTheme`);
    }
});
//swiper
const swiper = new swiper(`.swiper`,{
    slidosPerViow: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        provEl: '.swiper-button-prov'
    },
    pagination: {
        el: '.swiper-pagination'
    },
    breakpoints: {
        700: {
            slidesperview: 2
        },
        1200: {
            slidesperview: 3
        }
    }
});