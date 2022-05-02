// 1. определяем переменные меню и menu-item

const headerMenu = document.querySelector('.header__menu-list'),
    headerMenuLink = document.querySelectorAll('.menu-list__item')

// 2. создаём массив с блоками, к которым при клике будет происходить прокрута (id)
const nameBlock = ['#promo', '#promo', '#option', '#conditions', '#footer', '#promo']

// 3.  создаём функцию для прокрутки
function anchorScroll(nameLink, nameBlock) {
    nameLink.addEventListener('click', (e) => {
        e.preventDefault()
        document.querySelector(`${nameBlock}`).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

// 4. Перебираем все элементы menu-item и при переборе сразу вызываем функцию с нужными параметрами
headerMenuLink.forEach((item, idx) => {
    anchorScroll(item, nameBlock[idx])
})


// 5. Ниже много кода (хотя можно сделать и ещё больше :) )
// const headerMenuLinkMain = headerMenuLink[0],
//     headerMenuLinkCar = headerMenuLink[1],
//     headerMenuLinkNoCar = headerMenuLink[2],
//     headerMenuLinkRequirements = headerMenuLink[3],
//     headerMenuLinkContacts = headerMenuLink[4],
//     headerMenuLinkApplication = headerMenuLink[5]


// function anchorScroll(nameLink, nameBlock) {
//     nameLink.addEventListener('click', (e) => {
//         e.preventDefault()
//         document.querySelector(`${nameBlock}`).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         })
//     })
// }

// anchorScroll(headerMenuLinkMain, '#promo')
// anchorScroll(headerMenuLinkCar, '#promo')
// anchorScroll(headerMenuLinkNoCar, '#option')
// anchorScroll(headerMenuLinkRequirements, '#conditions')
// anchorScroll(headerMenuLinkContacts, '#promo')
// anchorScroll(headerMenuLinkApplication, '#promo')

