var RandomImg = function(document){
  this.imgArray = ["img1.gif", "img2.gif", "img3.gif", "img4.gif", "img5.gif"];
  this.tacoDiv = document.querySelector('#tacodiv');
  this.contentDiv = document.querySelector('#contentdiv');
}
RandomImg.prototype = {
  generateRandom: function(min, max) {
    var num = Math.random() * (max - min) + min;
    return Math.floor(num);
  },
  showTacos: function() {
    var self = this;
    var path = '';
    if(window.imgPath){
      path = window.imgPath;
    }
    this.contentDiv.setAttribute('class','initialized');
    for(var i=0; i<this.imgArray.length; i++){
        var left = self.generateRandom(-600, 800);
        var top = self.generateRandom(-400, 800);
        var img = document.createElement("img");
        img.setAttribute('src', path+"img/tacos/"+self.imgArray[i]);
        img.setAttribute('style', "position:absolute; top:"+ top +"px; left:"+ left +"px;");
        self.tacoDiv.appendChild(img);
    }
  }
};
