'use strict';

(function(window, document, undefined){

	// define a timeBox for the animation to be run
	var timeBox = 500;

	// Create a list of animated element
	var el = document.querySelectorAll('.floating');

	// definite moltiplicator limitation to avoid element
	// to be positioned outside of the window
	var moltiplicatorW = (window.innerWidth / (el.length * 1.2)) - Math.random();
	var moltiplicatorH = (window.innerHeight / (el.length * 1.2)) - Math.random();

	var elPosition = [];

	var setInitialPosition = function(ease){

		ease = ease || 'easeOut';

	    snabbt(el, {
	        position: function(i, total){
	        	var randomW = (Math.random() * el.length) * moltiplicatorW;
	        	var randomH = (Math.random() * el.length) * moltiplicatorH;
	        	var randomZ = (Math.random() * el.length) * 100;

	        	// store the initial element positions
	        	elPosition[i] = {x: randomW, y: randomH, z: randomZ};
	            return [randomW, randomH, randomZ];
	        },
			delay: function(i) {
			    return i * timeBox;
			},
			easing: ease,
	    });
	}

	var animate = function(){
		snabbt(el, {
			position: function(i, total){
				return [
					elPosition[i].x - (Math.random() * 30),
					elPosition[i].y - (Math.random() * 30),
					elPosition[i].z - (Math.random() * 30)
				];
			},
			delay: function(i) {
			    return i * timeBox;
			},
			easing: 'easeOut'
		});
	}

	window.addEventListener('mousewheel', function(){
		setInitialPosition('spring');
	}, false);

	setInitialPosition();

	window.setInterval(function(){
	    animate();
	},timeBox * el.length);
})(window, document);