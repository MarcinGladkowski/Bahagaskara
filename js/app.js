$(document).ready(function(){
console.log('DOM load properly!');

    
var header_buttons = $('.iconShape');
var nav_links = $('.menu').find('li:not(:first)');
var slide_down = $('#iconSlide');

//add data index to header and menu
header_buttons.each(function(i) {
    $(this).attr("data-index", i+1 );
});
nav_links.each(function(i) {
    $(this).attr("data-index", i+1 );
});
//slide to sections    
var slide = function(){
  var c = $(this).attr('data-index');
    $('body').animate({scrollTop: $('.slide'+c).offset().top}, 1000);
};
    
var slide2 = function(){
  var c = $(this).attr('data-index');
    $('body').animate({scrollTop: $('.slide'+c).offset().top - $('#container2').height()}, 1000);
};   

header_buttons.on('click', slide2);
nav_links.on('click', slide);
//slide for slide_down button
    
var home_slide = function (){
    $('body').animate({scrollTop: $('#container2').offset().top}, 1000);
};
var home_slide2 = function (){
    $('body').animate({scrollTop: $('section').offset().top - $('#container2').height() }, 1000);
};    
var first_li_home = $('.menu').find('li:first');
slide_down.on('click', home_slide);
first_li_home.on('click', home_slide2);
    
//sticky menu
var nav = $('#container2');
var top = nav.offset().top;
    
var sticky_menu = function() {
    var scrollT = $(document).scrollTop();
    if( scrollT > top) {
    nav.addClass('sticky')
  } else {
    nav.removeClass('sticky');
  }
};
    
$(window).on('scroll', sticky_menu);    
    
});


