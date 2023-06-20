var image = document.body.style.backgroundImage
var bigImage = document.createElement("img")

bigImage.onLoad = function() {
    image.src = this.src
}

    setTimeout(function() {

bigImage.src = "https://joshie6f.github.io/img/ss.jpeg";
    }, 1000)