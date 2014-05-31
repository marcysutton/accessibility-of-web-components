var TwilioApp = function(document, options){
  var self = this;

  // set up defaults
  this.TWILIO_NUMBER = '+13608136586';
  this.TARGET_NUMBER = '+12068198408';
  this.TOKEN_URL = 'http://localhost:8001/';

  this.callStatus = 'offline';

  // store a reference to our ARIA Live Region
  this.ariaLiveDiv = document.querySelector('[aria-live]');

  // kick things off with some sweet access
  this.fetchAuthToken();
};
TwilioApp.prototype = {
  online: function(){
    return this.connection.status() === 'offline' ? false : true;
  },
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

    Twilio.Device.ready(function(device) {
      console.log('ready');

      self.callStatus = 'ready';
      self.updateLiveRegion('Ready for tacos!');
    });
    // Register an event handler for when a call ends for any reason
    Twilio.Device.disconnect(function(connection) {
      self.callStatus = 'ready';
      self.updateLiveRegion('Disconnected');
    });
  },
  makeCall: function() {
    this.connection = Twilio.Device.connect({
      CallerId: this.TWILIO_NUMBER,
      PhoneNumber: this.TARGET_NUMBER
    });
    this.connection.error(this.errorHandler);
  },
  checkStatus: function(){
    var connectionStatus = this.connection.status();
    if(connectionStatus !== this.callStatus) {
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
    this.callStatus = connectionStatus;
    this.updateLiveRegion('Call '+connectionStatus);
  },
  updateLiveRegion: function(message) {
    var messageEl = '<p>'+message+'</p>';
    this.ariaLiveDiv.innerHTML = messageEl;
  }
};

