(function(window, document, undefined){

  var randomImg = new RandomImg(document);
  var twilioApp = new TwilioApp(document);

  function getMeTacos(el){
    var self = this;

    console.log(el);
    if(twilioApp.connection === undefined){
      twilioApp.makeCall();

      window.setInterval(function(){
        var status = twilioApp.checkStatus();
        if(status !== undefined){
          console.log(status);
          el.setAttribute('class', status);
          if(status === 'pending'){
            el.setAttribute('disabled', 'disabled');
          }
          el.innerHTML = 'Call '+ status;
        }
      }, 300);
    }
    randomImg.showTacos();
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
        getMeTacos(this);
      },
      'keydown': function(event){
        if(event.which === 13 || event.which === 32) {
          // not preventing slide change in Reveal
          event.preventDefault();
          getMeTacos(this);
        }
      }
    },
    methods: {
      updateText: function(text) {
        console.log(this);
      }
    }
  });
})(window, window.document);
