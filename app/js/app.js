const headerTitle = document.querySelector('.header__title');
const btnHamburger =document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const bannerImage =document.querySelector('.banner__image')
const fadeElemems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', () => {
    if(!header.classList.contains('open')){
        header.classList.add('open');
        fadeElemems.forEach(element => {
            console.log(element);
            element.classList.remove('has-fade');
        });     
    }else{
        header.classList.remove('open');
        fadeElemems.forEach(element => {

            element.classList.add('has-fade');
        }); 
       
    }
});