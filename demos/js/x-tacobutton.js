(function(window, document, undefined){

  var randomImg = new RandomImg();

  xtag.register('x-tacobutton', {
    prototype: Object.create(HTMLButtonElement.prototype),
    lifecycle: {
      created: function(){
        console.log(this);
      }
    },
    events: {
      'click': function(){
        randomImg.showTacos();
      }
    }
  });            
})(window, window.document);