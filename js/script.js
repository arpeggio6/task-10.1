var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
	draggable: true,
	// freeScroll: true,
	pageDots: false,
  	cellAlign: 'center',
  	contain: true
});

var restartButton = document.getElementById('restart-button');

restartButton.addEventListener('click', function(){
	flkty.select( 0 );
});

var slideButtons = document.getElementsByTagName('a');

for (var i = 0; i < slideButtons.length; i++) {
	slideButtons[i].addEventListener('click', function () {
		flkty.select(this.getAttribute('id'));
	})
}

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});
