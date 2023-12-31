
var logOut = document.querySelector('.logOut')
var welcome = document.querySelector('.auto-text')

if (localStorage.getItem('name') != null) {
    var userName = JSON.parse(localStorage.getItem('name'))
}




logOut.addEventListener('click' , function () {
    window.location = 'index.html'
})


//--------------------imageChanger

var userImageChanger = document.querySelector('.userImageChanger')
userImageChanger.src = JSON.parse(localStorage.getItem('img'))

//userImageChanger.src = localStorage.getItem('url')

