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


