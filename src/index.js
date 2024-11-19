import './styles/styles.scss';

function doShowArticles() {
    const showArticlesBtn = document.getElementById('show-more-articles');
    const articles = document.querySelectorAll('.article');

    const showArticles = () => {
        articles.forEach(elem => elem.style.display = 'block');
    }

    showArticlesBtn.addEventListener('click', showArticles);
}


function doBurgerMenu () {
    const burgerBtn = document.getElementById('burger');
    const menu = document.getElementById('mob-menu');

    burgerBtn.addEventListener('click', ()=> {
        burgerBtn.classList.toggle('burger--active');
        menu.classList.toggle('nav--mobile');
    })
}



doBurgerMenu ();
doShowArticles();