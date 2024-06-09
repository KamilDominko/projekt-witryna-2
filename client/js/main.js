import { getArticles, getExperts } from "../api/index.js";

window.addEventListener('load', () => {
  const menuBtnNode = document.querySelector('.menu__btn');
  const menuNode = document.querySelector('.menu');
  const menuListLinks = document.querySelectorAll('.menu__list-link');

  if (window.innerWidth <= 860) {
    menuNode.classList.remove('menu-visible');
    menuNode.classList.add('menu-hidden');
  }

  menuBtnNode.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (menuNode.classList.contains('menu-visible')) {
      menuNode.classList.remove('menu-visible');
      menuNode.classList.add('menu-hidden');
    } else {
      menuNode.classList.add('menu-visible');
      menuNode.classList.remove('menu-hidden');
    }
  });

  menuListLinks.forEach(menuListLink => {
    menuListLink.addEventListener('click', (e) => {
      menuNode.classList.remove('menu-visible');
      menuNode.classList.add('menu-hidden');
    });
  })
  
  getExperts();
  getArticles().then(() => {
    $('.slider').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      dots: true,
      draggable: true,
      infinite: false,
      responsive: [
        {
          breakpoint: 1175,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
})