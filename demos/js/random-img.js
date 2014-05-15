var RandomImg = function(){
  this.imgArray = ["img1.gif", "img2.gif", "img3.gif", "img4.gif", "img5.gif"];
  this.contentDiv = $('#contentdiv');
  this.tacoDiv = $('#tacodiv');
}
RandomImg.prototype = {
  generateRandom: function(min, max) {
    var num = Math.random() * (max - min) + min;
    return Math.floor(num);
  },
  showTacos: function() {
    this.contentDiv.css('background-color','rgba(0,0,0,0.8)');
    var self = this;
    var k = 0;
    for(var i=0; i<this.imgArray.length; i++){
        var left = self.generateRandom(-600, 800);
        var top = self.generateRandom(-400, 800);
        var img = $("<img src='img/tacos/"+self.imgArray[i]+"'>")
                    .css({"position":"absolute", "top": top + "px", "left": left + "px"});
        self.tacoDiv.append(img);
    }
  }
};