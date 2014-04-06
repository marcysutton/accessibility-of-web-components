var CustomDropdown = function($el, options){

  this.elCustomDropdown = null;
  this.elCustomDropdownUl = null;

  this.elCustomDropdown = $el;
  
  if($el){
    this.elDropdownTrigger = this.elCustomDropdown.querySelector('button');
    this.elCustomDropdownUl = this.elCustomDropdown.querySelector('ul');
    this.elListItems = this.elCustomDropdownUl.querySelectorAll('li');
    this.elFirstSelectItem = this.elCustomDropdownUl.querySelector('li');

    // # Event bindings
    this.elCustomDropdown.addEventListener('click', this.customDropdownToggle.bind(this));
    document.addEventListener('keydown', this.escapeKeyHandler.bind(this));
  }
};
CustomDropdown.prototype = {
  escapeKeyHandler: function (event) {
    if(event.keyCode == 27){
      this.customDropdownToggle(event);
      this.elDropdownTrigger.focus();
    }
  },
  customDropdownToggle: function (event) {
    ddClasslist = this.elCustomDropdown.classList;

    if(ddClasslist.contains('active')){
      ddClasslist.remove('active');
      this.elCustomDropdownUl.setAttribute('aria-hidden', true);
      this.elDropdownTrigger.setAttribute('aria-expanded', false);
    } 
    else {
      ddClasslist.add('active');
      this.elFirstSelectItem.focus();
      this.elCustomDropdownUl.setAttribute('aria-hidden', false);
      this.elDropdownTrigger.setAttribute('aria-expanded', true);
    }
  }
}
