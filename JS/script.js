function bounceImage() {
    var image = document.getElementById("img");
    var maxX = window.innerWidth - image.width;
    var maxY = window.innerHeight - image.height;
    var posX = 0;
    var posY = 0;
    var dirX = 1;
    var dirY = 1;

    setInterval(function() {
      posX += 5 * dirX;
      posY += 5 * dirY;

      if (posX >= maxX || posX <= 0) {
        dirX *= -1;
      }

      if (posY >= maxY || posY <= 0) {
        dirY *= -1;
      }

      image.style.transform = "translate(" + posX + "px, " + posY + "px)";
    }, 50);
  }