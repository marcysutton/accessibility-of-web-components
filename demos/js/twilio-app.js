var TwilioApp = function(document, options){
  var self = this;

  // set up defaults
  this.TWILIO_NUMBER = '+13608136586';
  this.TARGET_NUMBER = '+12068198408';
  this.TOKEN_URL = 'http://localhost:8001/';

  this.callStatus = undefined;

  // store a reference to our ARIA Live Region
  this.ariaLiveDiv = document.querySelector('[aria-live]');

  // kick things off with some sweet access
  this.fetchAuthToken();

  // Register an event handler for when a call ends for any reason
  Twilio.Device.disconnect(function(connection) {
    self.updateLiveRegion('Disconnected');
  });
};
TwilioApp.prototype = {
  fetchAuthToken: function(){
    var self = this;
    var r = new XMLHttpRequest();
    r.overrideMimeType("application/json");
    r.open("GET", this.TOKEN_URL, true);
    r.onreadystatechange = function () {
      if (r.readyState == 4) {
        if(r.status == 200) {
          self.setUpDevice(JSON.parse(r.responseText));
        }
        else {
         console.log('Error connecting to Twilio server.');
        }
      }
    };
    r.send(null);
  },
  setUpDevice: function(response){
    var self = this;

    Twilio.Device.setup(response.token);

    Twilio.Device.ready(function() {
      console.log('ready');

      self.updateLiveRegion('Ready for tacos!');
    });
  },
  makeCall: function() {
    console.log(this);

    this.connection = Twilio.Device.connect({
      CallerId: this.TWILIO_NUMBER,
      PhoneNumber: this.TARGET_NUMBER
    });
    this.connection.error(this.errorHandler);
  },
  checkStatus: function(){
    var connectionStatus = this.connection.status();
    if(connectionStatus !== this.callStatus) {
      this.callStatus = connectionStatus;
      this.updateStatus(connectionStatus);
      return connectionStatus;
    }
  },
  errorHandler: function(error){
    console.log(error);
    this.updateLiveRegion(error);
  },
  hangUp: function(){
    Twilio.Device.disconnectAll();
    this.connection = undefined;
  },
  updateStatus: function(connectionStatus) {
    console.log(connectionStatus);
    this.updateLiveRegion('Call '+connectionStatus);
  },
  updateLiveRegion: function(message) {
    var messageEl = '<p>'+message+'</p>';
    this.ariaLiveDiv.innerHTML = messageEl;
  }
};

