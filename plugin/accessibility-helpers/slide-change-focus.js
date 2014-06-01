/*!
 * slide-change-focus.js
 * MIT licensed
 *
 * Copyright (C) 2014 Marcy Sutton, http://marcysutton.com
 */
 
var SlideChangeFocus = (function(){

	'use strict';

  var SLIDE_SELECTOR = 'section';

  // get slides, wrap contents in 'accessibilityWrapper'
  var slides = document.querySelectorAll( SLIDE_SELECTOR );
  for(var i=0; i<slides.length; i++){
    var contents = slides[i].innerHTML;
    slides[i].innerHTML = '<div class="accessibilityWrapper">'+contents+'</div>';
  }

  Reveal.addEventListener('slidechanged', sendFocusToCurrentSlide.bind(this));

	function sendFocusToCurrentSlide(args) {
		var currentSlide = Reveal.getCurrentSlide();
		window.setTimeout(function(){
			currentSlide.querySelector('.accessibilityWrapper').focus();
		},200);
	};

})();