var image = document.images[1]
var bigImage = document.createElement("img")

bigImage.onload = function() {
        image.src = this.src
}

    setTimeout(function() {bigImage.src = "https://joshie6f.github.io/Articels/Science/electrical%20engineering/Current%20Kills/img/thomas-kelley-unsplash.jpg";},
     50)
