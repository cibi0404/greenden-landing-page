let menuIcon = document.getElementById('menuicon')
let sideNav = document.getElementById('sidenav')
let closeNav = document.getElementById('closenav')   

menuIcon.addEventListener('click', function () {
    sideNav.style.right = '0%'
})

closeNav.addEventListener('click', function () {     
    sideNav.style.right = '-50%'
})