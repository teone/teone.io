'use strict';

(function(window, document, undefined){

	var timeBox = 500;

	var el = document.querySelectorAll('.floating');

	var moltiplicatorW = (window.innerWidth / (el.length * 1.1)) - Math.random();
	var moltiplicatorH = (window.innerHeight / (el.length * 1.1)) - Math.random();

	var animate = function(){
	    snabbt(document.querySelectorAll('.floating'), {
	        position: function(i, total){
	        	var randomW = (Math.random() * el.length) * moltiplicatorW;
	        	var randomH = (Math.random() * el.length) * moltiplicatorH;
	        	var randomZ = (Math.random() * el.length) * 100;
	            return [randomW, randomH, randomZ];
	        },
			delay: function(i) {
			    return i * timeBox;
			},
			easing: 'easeOut',
	    });
	}

	window.setInterval(function(){
	    animate();
	},timeBox * el.length);
})(window, document);