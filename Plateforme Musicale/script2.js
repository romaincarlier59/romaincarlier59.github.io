var logo = document.querySelector('.hamburger');
var menu = document.querySelector('.menu');
var music = document.querySelector('.music');
var player = document.querySelector('.player');
var playerImage = document.querySelector('.imgBox');
var podcasts = document.querySelector('.podcasts');
var favoris = document.querySelector('.favoris');
var recherche = document.querySelector('.recherche');
var premium = document.querySelector('.premium');


logo.addEventListener("click", function(){
    menu.classList.toggle('showmenu')
});

music.addEventListener("click", function(){
    player.classList.add("visible");
    playerImage.classList.add("visible");
        
})
podcasts.addEventListener("click", function () {
    player.classList.remove("visible");
    playerImage.classList.remove("visible");
})