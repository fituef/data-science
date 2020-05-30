const html = document.querySelector('html')
const header = document.querySelector('header')
const topBar = document.getElementById('top-bar')
const navToggler = document.getElementById('top-bar__navigation-toggler')
const links = [...document.querySelectorAll('#top-bar__navigation li a')]

links.forEach(link => {
  link.addEventListener('click', () => {
    html.style = ''
    header.classList.remove('is-expanded')
    topBar.classList.remove('is-expanded')
    navToggler.classList.remove('is-active')
  })
})