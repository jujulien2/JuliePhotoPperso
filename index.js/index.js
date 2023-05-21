// Header reaction on click
// let preview = null
// const headerWrapper = Array.from(document.querySelectorAll('.headerWrapper ul li'))
// console.log(headerWrapper);

// let clickLink = function (event) {
//     event.target.classList.add('linkClicked')
//     if (preview !== null) {
//         preview.classList.remove('linkClicked');
//     }
//     preview = event.target
// }
// headerWrapper.forEach((el) => {
//     el.addEventListener('click', clickLink)
// })

// scroll delete header
const justheaderWrapper = document.querySelector('.headerWrapper')
window.addEventListener('scroll', function () {

    if (window.scrollY > 200) {
        justheaderWrapper.classList.add('hidden')
    } else {
        justheaderWrapper.classList.remove('hidden')

    }

})

// hover contact
const iconContact = document.querySelector('.fa-envelope-open-text')
const contactLinkJs = document.querySelector('.contactLinkJs')
contactLinkJs.classList.add('unVisibility')

console.log(iconContact);
iconContact.addEventListener('mouseenter', function () {
    contactLinkJs.classList.remove('unVisibility')

    contactLinkJs.classList.add('Visibility')
})
iconContact.addEventListener('mouseleave', function () {
    contactLinkJs.classList.add('unVisibility')

    contactLinkJs.classList.remove('Visibility')
})

