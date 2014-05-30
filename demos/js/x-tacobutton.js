(function(window, document, undefined){

  var randomImg = new RandomImg(document);
  var twilioApp = new TwilioApp(document);

  function getMeTacos(component){
    var self = this;

    if(twilioApp.connection === undefined){
      twilioApp.makeCall();

      component.watch();
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
    accessors: {
      status: {
        attribute: { string: 'offline' }
      }
    },
    methods: {
      updateText: function(status) {
        this.textContent = 'Call ' + status;
      },
      watch: function(){
        var self = this;
        window.setInterval(function(){
        var status = twilioApp.checkStatus();
        if(status !== undefined){
          self.setAttribute('class', status);
          if(status === 'pending'){
            self.setAttribute('disabled', 'disabled');
          }
          self.updateText(status);
        }
      }, 300);
      }
    }
  });
})(window, window.document);
