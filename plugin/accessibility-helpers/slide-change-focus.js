/*!
 * slide-change-focus.js
 * MIT licensed
 *
 * Copyright (C) 2014 Marcy Sutton, http://marcysutton.com
 */
 
var SlideChangeFocus = (function(){

	'use strict';
	
	Reveal.addEventListener('slidechanged', sendFocusToCurrentSlide.bind(this));

	function sendFocusToCurrentSlide(args) {
		var currentSlide = Reveal.getCurrentSlide();
		window.setTimeout(function(){
			currentSlide.querySelector('.accessibilityWrapper').focus();
		},200);
	};

})();