/*!
 * skip-links-plugin.js
 * MIT licensed
 *
 * Copyright (C) 2013 Marcy Sutton, http://marcysutton.com
 */
 
var SkipLinks = (function(){

	'use strict';

	var SKIP_TO_NAV_LINK_SELECTOR = '#skip-to-toc',
		  SLIDE_SKIP_LINKS_SELECTOR = 'table-of-contents',
		  SLIDE_SELECTOR = '.slides section[id^="slide"]',
		  CONTROLS_SELECTOR = '.controls',
		  NUM_SLIDES = 1,
		  
  		// Cached references to DOM elements
  		dom = {};
    
  	// Copy options over to our config object
    if( typeof options === 'object' ) extend( config, options );
    
    // if controls are present, we'll insert table of contents after them
    if( document.querySelector( CONTROLS_SELECTOR )){
      dom.controls = document.querySelector( CONTROLS_SELECTOR );
    }
    
    // if the skip to nav link is present, we'll make it jump to our links
    if( document.querySelector( SKIP_TO_NAV_LINK_SELECTOR ) ){
      
      NUM_SLIDES = document.querySelectorAll( SLIDE_SELECTOR ).length;
      
      buildSkipLinks();
  	}
	
  /**
	 * Build skip links.
	 */
  function buildSkipLinks() {
		dom.wrapper = document.querySelector( '.reveal' );
		
    var skipLinkHTML = '';
    
    for(var i = 1; i < NUM_SLIDES; i++){
      skipLinkHTML += '<li><a href="#/slide' + i + '">Slide ' + i + '</a></li>';
    }
    skipLinkHTML += '</ul>';

		dom.skipLinks = createNodeAfterSibling( dom.wrapper, 'ul', SLIDE_SKIP_LINKS_SELECTOR, 'skip-links', skipLinkHTML, dom.controls );
    
		initSkipLinks();
  }
  /**
	 * Enable skip links.
	 */
	function initSkipLinks() {
    var skipToNavLink = document.querySelector( SKIP_TO_NAV_LINK_SELECTOR );
    
    dom.slideSkipLinks = dom.skipLinks.querySelectorAll('a');
		
    skipToNavLink.addEventListener('focus', skipLinkFocus);
    skipToNavLink.addEventListener('blur', skipLinkBlur);
    skipToNavLink.addEventListener('click', skipToNavLinkClick);
    
    var numSkipLinks = dom.slideSkipLinks.length;
    for(var i=numSkipLinks; i--;){
      dom.slideSkipLinks[i].addEventListener('focus', skipLinkFocus);
      dom.slideSkipLinks[i].addEventListener('blur', skipLinkBlur);
    }
	}
  function skipToNavLinkClick(event) {
    event.preventDefault();
    
    dom.slideSkipLinks[0].focus();
  }
	/**
	 * Change visibility of skip links on focus
	 */
	function skipLinkFocus(event) {
		event.currentTarget.style.left = '0px';
	}
	/**
	 * Hide skip links on blur
	 */
	function skipLinkBlur(event) {
		event.currentTarget.style.left = '-50000px';
	}
	
	/**
	 * Extend object a with the properties of object b.
	 * If there's a conflict, object b takes precedence.
	 */
	function extend( a, b ) {

		for( var i in b ) {
			a[ i ] = b[ i ];
		}

	}
	/**
	 * Creates an HTML element and returns a reference to it.
	 * If a sibling element is passed through, element is 
	 * inserted after.
	 */
	function createNodeAfterSibling( container, tagname, id, classname, innerHTML, sibling ) {

		var node = document.createElement( tagname );
		node.setAttribute('id', id);
		node.classList.add( classname );
		if( innerHTML !== null ) {
			node.innerHTML = innerHTML;
		}
		if(sibling) {
  		container.insertBefore( node, sibling.nextSibling );
		}
		else {
  		container.appendChild( node );
		}
		return node;

	}
})();