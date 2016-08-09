$(document).ready(function(){
console.log('DOM load properly!');

    
var header_buttons = $('.iconShape');
var nav_links = $('#menu').find('li:not(:first)');

header_buttons.each(function(i) {
    $(this).attr("data-index", i+1 );
});
nav_links.each(function(i) {
    $(this).attr("data-index", i+1 );
});
    
    
var slide = function(){
  var c = $(this).attr('data-index');
    $('body').animate({scrollTop: $('.slide'+c).offset().top}, 2000);
};
    
header_buttons.on('click', slide);
nav_links.on('click', slide)
    
});
