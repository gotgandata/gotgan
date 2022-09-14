
// variables
var $header_top = $('.header-top');
var $nav = $('nav');



// toggle menu 
$header_top.find('a').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});



// fullpage customization
$('#fullpage').fullpage({
  sectionsColor: ['#FFFFF', '#FFFFFF', '#ffffff', '#3E3A45', '#164391', '#FFFFFF','#568A35','#568A35'],
  sectionSelector: '.vertical-scrolling',
  slideSelector: '.horizontal-scrolling',
  navigation: false,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ['home','service','service1','service2', 'intro',  'introduce', 'contact', 'footer'],
  menu: '#menu',

  afterLoad: function(origin, destination, direction) {
    $header_top.css('background', 'rgba(0, 47, 77, 0.3)');
    $nav.css('background', 'rgba(0, 0, 0, 0.2)');
    if (origin.index == 5) {
        $('#fp-nav').hide();
      } 
      // if(destination === 2) {
      //   div.main_list ul li a
      //   alert("section1");
      //   document.querySelector('#section1').querySelector('.partner-part').style.left = 0 + 'px';
      // }
    //   if(destination === 2) {
    //     alert("section1");
    //     document.querySelector('#section1').querySelector('.partner-part').style.left = 0 + 'px';
    //   }  else if(origin && origin.index == 1){
    //     alert("section1");
        
    // }
  },

  onLeave: function(index, nextIndex, direction) {
    if(index == 5) {
      $('#fp-nav').show();
    }
  },

  // afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
  //   if(anchorLink == 'fifthSection' && slideIndex == 1) {
  //     $.fn.fullpage.setAllowScrolling(false, 'up');
  //     $header_top.css('background', 'transparent');
  //     $nav.css('background', 'transparent');
  //     $(this).css('background', '#374140');
  //     $(this).find('h2').css('color', 'white');
  //     $(this).find('h3').css('color', 'white');
  //     $(this).find('p').css(
  //       {
  //         'color': '#DC3522',
  //         'opacity': 1,
  //         'transform': 'translateY(0)'
  //       }
  //     );
  //   }
  // },

}); 

$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

$('#fullpage').click(function () {
  $('.navTrigger').removeClass('active');
  $("#mainListDiv").removeClass("show_list");
  $("#mainListDiv").fadeIn();
});

$('#mainListDiv').click(function () {
  $('.navTrigger').removeClass('active');
  $("#mainListDiv").removeClass("show_list");
  $("#mainListDiv").fadeIn();
});

  window.onload = function () {
    document.documentElement.classList.remove('preparation');


}