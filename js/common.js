
// variables
var $header_top = $('.header-top');
var $nav = $('nav');



// toggle menu 
$header_top.find('a').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});



// fullpage customization
$('#fullpage').fullpage({
  sectionsColor: ['#FFFFF', '#568A35', '#F9F9F9', '#F9F9F9', '#164391', '#3E3A45','#568A35'],
  sectionSelector: '.vertical-scrolling',
  slideSelector: '.horizontal-scrolling',
  navigation: false,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ['home','service','service1','service2', 'intro',  'introduce', 'contact'],
  menu: '#menu',

  afterLoad: function(origin, destination, direction) {
    $header_top.css('background', 'rgba(0, 47, 77, .3)');
    $nav.css('background', 'rgba(0, 0, 0, 1)');
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
// $(function(){
  window.onload = function () {
    document.documentElement.classList.remove('preparation');
// https://westzero.tistory.com/112
    String.prototype.toKorChars = function() { 
        var cCho = [ 'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ' ], 
        cJung = [ 'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ' ], 
        cJong = [ '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ' ], cho, jung, jong; 
        var str = this, 
        cnt = str.length,  
        chars = [], 
        cCode; 
        for (var i = 0; i < cnt; i++) { 
            cCode = str.charCodeAt(i); 
            if (cCode == 32) { 
              chars.push(" ");
              continue;
            } // 한글이 아닌 경우 
            if (cCode < 0xAC00 || cCode > 0xD7A3) { 
                chars.push(str.charAt(i)); continue; 
                } 
            cCode = str.charCodeAt(i) - 0xAC00; 

            jong = cCode % 28; 
            // 종성 
            jung = ((cCode - jong) / 28 ) % 21 

            // 중성 
            cho = (((cCode - jong) / 28 ) - jung ) / 21 
            // 초성 

            //기본 코드 테스트가 ㅌㅔㅅ-ㅌ- 형식으로 저장됨 
            // chars.push(cCho[cho], cJung[jung]); 
            // if (cJong[jong] !== '') { 
            //     chars.push(cJong[jong]); 
            //     } 


            //  테스트라는 문장이 있으면 ㅌ테ㅅ스ㅌ트 형식으로 저장되도록함 (타이핑을 위해서)
            chars.push(cCho[cho]);
            chars.push(String.fromCharCode( 44032 + (cho * 588) + (jung  * 28)));
            if (cJong[jong] !== '') { 
                chars.push(String.fromCharCode( 44032 + (cho * 588) + (jung  * 28) + jong ));
            }
           
        } 
        
        return chars; 
    }

//타이핑할 문장
    var result  = "상생을 꿈꾸다";
    var typeing1=[];
    result = result.split(''); // 한글자씩자름

    //각글자 초성,중성,종성으로 나눠서 배열로 저장함.
    for(var i =0; i<result.length; i++){
        typeing1[i]=result[i].toKorChars();
    }

    //출력할 엘리먼트요소 가져옴 -result클래스에 출력
    var resultDiv = document.getElementsByClassName("result")[0];

 
    var text = "";
    var i=0; 
    var j=0; 
    

    //총글자수
    var imax = typeing1.length;

    //setInterval을 이용해 반복적으로 출력 
    // var inter = setInterval(typi,150);


    // function typi(){
    //     //글자수만큼 반복후 종료 
    //     if(i<=imax-1){
    //         //각 글자가 초성 중성 종성 순서대로 추가되도록 
    //         var jmax = typeing1[i].length;
    //         resultDiv.innerHTML = text + typeing1[i][j];
    //         j++;
    //         if(j==jmax){
    //             text+=  typeing1[i][j-1];
    //             //초성중성종성 순서대로 출력된 후 글자는 저장 ( 다음 글자와 이어붙이기 위해서 )
               
    //             i++;
    //             j=0;
    //         }
    //     } else{
    //       document.getElementsByClassName("result")[0].style.border="0";
    //         clearInterval(inter);
    //     }
    // }




// //타이핑할 문장 2줄

//     var result1  = "상생의 가치를";
//     var result2  = "실현합니다.";
//     var typeing1=[], typeing2=[];;
//     result1 = result1.split(''); // 한글자씩자름
//     result2 = result2.split(''); // 한글자씩자름

//     //각글자 초성,중성,종성으로 나눔
//     for(var i =0; i<result1.length; i++){
//         typeing1[i]=result1[i].toKorChars();
//     }
//    for(var i =0; i<result2.length; i++){
//         typeing2[i]=result2[i].toKorChars();
//     }

//     //출력할 엘리먼트요소 가져옴 
//     var resultDiv1 = document.getElementsByClassName("result1")[0];
//     var resultDiv2 = document.getElementsByClassName("result2")[0];

//     //
//     var text = "";
//     var i=0; 
//     var j=0; 

//     //총글자수
//     var imax1 = typeing1.length;
//     var imax2 = typeing2.length;

//     //setInterval을 이용해 반복적으로 출력 
//     var inter = setInterval(typi,150);
//     var inter2;


//     function typi(){
//         //글자수만큼 반복후 종료 
//       resultDiv1.classList.add("cursor");
//         if(i<=imax1-1){
//             //각 글자가 초성 중성 종성 순서대로 추가되도록 
//             var jmax1 = typeing1[i].length;
//             resultDiv1.innerHTML = text + typeing1[i][j];
//             j++;
//             if(j==jmax1){
//                 text+=  typeing1[i][j-1];//초성중성종성 순서대로 출력된 글자는 저장 ( 다음 글자와 이어붙이기 위해서 )
//                 i++;
//                 j=0;
//             }
//         } else{
//             clearInterval(inter);
//              text ="";
//             i=0;
//             j=0; 
//        setTimeout(function(){    
//           resultDiv1.classList.remove("cursor");
//           setTimeout(function(){             
//              resultDiv2.classList.add("cursor");
//              setTimeout(function(){
//                 inter2 = setInterval(typi2,150);
//              },400);
//            },300);
//          },400);
//         }
//     }

//  function typi2(){
//         //글자수만큼 반복후 종료 

//         if(i<=imax2-1){
//             //각 글자가 초성 중성 종성 순서대로 추가되도록 
//             var jmax2 = typeing2[i].length;
//             resultDiv2.innerHTML = text + typeing2[i][j];
//             j++;
//             if(j==jmax2){
//                 text+=  typeing2[i][j-1];//초성중성종성 순서대로 출력된 글자는 저장 ( 다음 글자와 이어붙이기 위해서 )
//                 i++;
//                 j=0;
//             }
//         }
//          else{
//             clearInterval(inter);
//         }
//     }



  // var typed1 = new Typed('#typed1', {
  //   strings: ['상생을 꿈꾸다'],
  //   typeSpeed: 300,
  //   startDelay: 2000,
  //   backDelay: 7000,
  //   backSpeed: 300,
  //   loop: true,
  //   showCursor: true
  // });
// });
}