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
    menu.ariaHidden="true";

    burgerBtn.addEventListener('click', (e)=> {
        e.stopPropagation();
        e.currentTarget.classList.toggle('burger--active');
        
        menu.classList.toggle('nav--mobile');
        
        const menuIsOpen = menu.classList.contains('nav--mobile');
        
        menu.ariaHidden=!menuIsOpen;
        burgerBtn.ariaExpanded=menuIsOpen;
     
    })
    
        window.addEventListener('click', (e)=> {
            if(e.target !== menu && e.target !== burgerBtn && menu.classList.contains('nav--mobile')) {
                burgerBtn.classList.remove('burger--active');
                menu.classList.remove('nav--mobile');
            }
        })
    

}

if (window.innerWidth < 768) {
    doBurgerMenu();
} else if (window.innerWidth < 1200) {
    console.log("Планшет");
} else {
    console.log("Десктоп");
}

doShowArticles();