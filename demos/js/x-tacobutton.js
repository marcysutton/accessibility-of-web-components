(function(window, document, undefined){

  var randomImg = new RandomImg();
  var twilioApp = new TwilioApp();

  xtag.register('x-tacobutton', {
    prototype: Object.create(HTMLButtonElement.prototype),
    lifecycle: {
      created: function(){
        console.log(this);
      }
    },
    events: {
      'click': function(){
        randomImg.showTacos(document);
      },
      'keydown': function(event){
        if(event.which === 13 || event.which === 32) {
          // not preventing slide change in Reveal
          event.preventDefault();

          randomImg.showTacos(document);
        }
      }
    }
  });
})(window, window.document);
