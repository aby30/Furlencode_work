

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /2 +'%)'
    });

    $('.owl').css({
      'transform' : 'translate(0px, '+ wScroll /4 +'%)'
    });

  });

  
  
  

google.maps.event.addDomListener(window, 'load', initialize);





function element(){
	document.getElementById('view1').scrollIntoView();
    var h = window.innerHeight;
     document.getElementById('view0').style.height = h+"px";
     document.getElementById('view1').style.height = h+"px";
     document.getElementById('view2').style.height = h+"px";
     document.getElementById('content3').style.height = h+"px";



}

