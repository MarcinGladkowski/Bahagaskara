$(document).ready(function(){
console.log('DOM load properly!');

    
var header_buttons = $('.iconShape'),
    nav_links = $('.menu').find('li:not(:first)'),
    slide_down = $('#iconSlide');

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
var nav = $('#container2'),
    top = nav.offset().top,
    scrollT = $(document).scrollTop();
       
var sticky_menu = function() {
    scrollT = $(document).scrollTop();
    if( scrollT > top) {
    nav.addClass('sticky')
  } else {
    nav.removeClass('sticky');
  }
};
    
$(window).on('scroll', sticky_menu);    
  
var divUl = $('.slider');
var ul = $('.slider').find('ul').css('padding', 0).css('margin', 0).width(2450).css('position', 'relative');
var li = $('.slider').find('ul').children().css('display', 'inline-block');
var img = $('li').find('.prof');


divUl.width(25+'vh').css('overflow', 'hidden');
    
function slider(){
    var prev = $('#arr1');
    var next = $('#arr2');
    var index = 0;
    
    li.each(function(i){
       $(this).attr('index', i);
    }) 
   
    next.on('click', function(){
        index += 1;
        if (index > li.length - 1) {
            index = 0;
        } 
        ul.animate({left: (-index * 25)+'vh'},2000);
    })
    prev.on('click', function(){
        index -= 1;
        if (index < 0) {
            index = 5;
        }
        ul.animate({left: (-index * 25)+'vh'},2000);
    })  
};
slider();
});


