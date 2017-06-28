$(document).ready(function(){
addClass();
$('.taste').addClass("not-here");
$('.ft').addClass("not-here");
});

function addClass(){
  $('.btm1').each(function(i){
    setTimeout(function(){
    $('.btm1').eq(i).addClass("hello");
}, i* 300);
  });
}

  $(window).scroll(function(){
    var scroller = $(this).scrollTop();
    console.log(scroller);

  if (scroller > $('.taste').offset().top - 200) {
    $('.taste').addClass("here");
  }

  if (scroller > $('.footer').offset().top - 160) {
    addClass2();
  }
});

function addClass2(){

  $('.ft').each(function(i){
    setTimeout(function(){
      $('.ft').eq(i).addClass('fadeInLeft').removeClass("not-here")
    }, i *300);
  });
}
