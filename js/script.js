var template = document.getElementById('template').innerHTML;
Mustache.parse(template);
var cell = document.getElementsByClassName('carousel-cell');
var container = document.getElementsByClassName('container');

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



window.initMap = function() {
  // The location of Uluru
  var uluru = {lat: 51.107713, lng: 17.032452};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 10, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});

	data.forEach(function(slide, i){
		container[i].innerHTML = Mustache.render(template, slide);
		cell[i].style.backgroundImage  = 'url('+ slide.image + ')';
	  	var marker = [];
		marker[i] = new google.maps.Marker({
			position: slide.coords,
			map: map
		});
		marker[i].addListener('click', function(){
			event.preventDefault();
			flkty.select( i );
		});	
		
		flkty.on( 'change', function( index ) {
			map.panTo(data[index].coords)
		});
	})
}