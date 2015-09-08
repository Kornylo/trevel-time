var $ = jQuery;

/*-------------------------------- Fancy box -------------------------*/
$(document).ready(function() {
  if($(".fancybox").size()){
    $(".fancybox").fancybox({
      openEffect : 'none',
      closeEffect : 'none'
    });
  }
});

$(document).ready(function() {
      $('#fullpage').fullpage({
        sectionsColor: ['rgba(27, 188, 155, 0.41)', 'rgba(75, 191, 195, 0.52)', 'rgba(123, 170, 190, 0.58)', 'rgba(109, 130, 201, 0.52)', '#ccddff'],
        anchors: ['home', 'secondPage', '3rdPage', 'second', 'lastPage'],
        menu: '#menu',
        scrollingSpeed: 200
      });

    });
$.vegas('slideshow', {
  delay:5000,
  backgrounds:[
     { src:'./img/nature1.jpg', fade:2000 },
	 { src:'./img/bw1.jpg', fade:2000 },
    { src:'./img/portrait1.jpg', fade:2000 },
	 { src:'./img/portrait5.jpg', fade:2000 },
    { src:'./img/portrait2.jpg', fade:2000 },
    { src:'./img/portrait3.jpg', fade:2000 },
	 { src:'./img/portrait4.jpg', fade:2000 },
	   { src:'./img/forest.jpg', fade:2000 }
	   
  ]
})('overlay', {
src:'./img/overlay.png'
});



