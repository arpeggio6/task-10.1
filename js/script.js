var template = document.getElementById('template').innerHTML;
Mustache.parse(template);

var cell = document.getElementsByClassName('carousel-cell');
var container = document.getElementsByClassName('container');

data.forEach(function(slide, i){
	var mainCarousel = document.getElementsByClassName('main-carousel')[0];
	var carouselCell = document.createElement('div'); 
	var container = document.createElement('div');

	mainCarousel.appendChild(carouselCell).appendChild(container);

	carouselCell.classList.add("carousel-cell");
	carouselCell.setAttribute("id", "carousel-cell" + [i+1]);
	container.classList.add("container");
	
	container.innerHTML = Mustache.render(template, slide);
	cell[i].style.backgroundImage  = 'url('+ slide.image + ')';
})


var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
	draggable: true,
	hash: true,
	pageDots: false,
  	cellAlign: 'center',
  	contain: true
});

var restartButton = document.getElementById('restart-button');

restartButton.addEventListener('click', function(){
	flkty.select( 0 );
});

var slideButtons = document.getElementsByTagName('a');

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});
