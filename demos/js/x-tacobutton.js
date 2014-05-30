(function(window, document, undefined){

  var randomImg = new RandomImg(document);
  var twilioApp = new TwilioApp(document);

  function getMeTacos(){
    twilioApp.makeCall();
    // randomImg.showTacos();
  }
  xtag.register('x-tacobutton', {
    prototype: Object.create(HTMLButtonElement.prototype),
    lifecycle: {
      created: function(){
        console.log(this);
      }
    },
    events: {
      'click': function(){
        getMeTacos();
      },
      'keydown': function(event){
        if(event.which === 13 || event.which === 32) {
          // not preventing slide change in Reveal
          event.preventDefault();
          getMeTacos();
        }
      }
    }
  });
})(window, window.document);
