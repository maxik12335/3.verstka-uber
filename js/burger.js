window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu-list'),
        menuItem = document.querySelectorAll('.menu-list__item'),
        burger = document.querySelector('.burger')

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger-active')
        menu.classList.toggle('header__menu-list-active')
    })

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            burger.classList.toggle('burger-active')
            menu.classList.toggle('header__menu-list-active')
        })
    })
})