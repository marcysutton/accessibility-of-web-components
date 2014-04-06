var Slider = function(target){
	var self = this;

	this.el = target.querySelector('.component-wrapper');
	this.elTrack = this.el.querySelector('.well');
	this.elSlider = this.el.querySelector('#slider');
	this.elButton = this.el.querySelector('.trigger-button')

	this.wellWidth = 250;

	$(this.elSlider).draggable({
		axis: 'x',
		containment: 'parent',
		cancel: false,
		drag: function(event, ui) {
			if (ui.position.left > self.wellWidth) {
				$(self.elTrack).fadeOut();
				$(self.elSlider)
					.attr({
						'aria-hidden':'true',
						'aria-disabled':'true'
					});
				$(self.elButton)
					.addClass('visible')
					.removeAttr('disabled')
					.attr({
						'aria-hidden':'false',
						'aria-disabled':'false'
					});
			}
		},
		stop: function(event, ui) {
			if (ui.position.left < (self.wellWidth + 1)) {
				$(this).animate({
					left: 0
				})
			}
		}
	});
	this.numKeypresses = 0;
	this.elSlider.addEventListener('keydown', this.keydownHandler.bind(this), false);
	this.elSlider.addEventListener('touchmove', this.touchMoveHandler.bind(this), false);
	this.elSlider.addEventListener('touchend', this.touchEndHandler.bind(this), false);
}
Slider.prototype = {
	keydownHandler: function(event){
		if(event.which === 38 || event.which === 39){
			var target = event.target;
	    this.numKeypresses++;
	    curX = this.numKeypresses * 100;
	    if(curX <= 0) return;
	    if(curX > this.wellWidth){
	    	$(this.el).fadeOut();
	    }
	   	target.style.webkitTransform = 'translateX(' + curX + 'px)'; 
		}
	},
	touchMoveHandler: function(event){
    event.preventDefault();
    var target = event.target;
    var touch = event.touches[0];
    curX = touch.pageX - this.offsetLeft - 73;
    if(curX <= 0) return;
    if(curX > this.wellWidth){
    	this.elTrack.fadeOut();
    }
   	target.style.webkitTransform = 'translateX(' + curX + 'px)'; 
	},
	touchEndHandler: function(event) {	
    this.style.webkitTransition = '-webkit-transform 0.3s ease-in';
    this.addEventListener( 'webkitTransitionEnd', function( event ) { this.style.webkitTransition = 'none'; }, false );
    this.style.webkitTransform = 'translateX(0px)';
	}
}