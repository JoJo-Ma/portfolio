const primaryNav = document.querySelector(".navbar")
const navToggle = document.querySelector(".navbar-toggle")


navToggle.addEventListener('click', (e) => {
    const visibility = primaryNav.getAttribute('data-visible')

    if (visibility === 'false') {
        primaryNav.setAttribute('data-visible', true)
        navToggle.classList.remove('fa-bars')
        navToggle.classList.add('fa-xmark')
    } else {
        primaryNav.setAttribute('data-visible', false)
        navToggle.classList.remove('fa-xmark')
        navToggle.classList.add('fa-bars')
    }
})
