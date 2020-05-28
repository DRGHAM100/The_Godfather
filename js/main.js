$(function(){

    "use strict";

    $('#menu').slicknav({
        label :'',

    });

    $('.slider-carousle').carouFredSel({
        responsive:true,
        width:'100%;',
        circular:true,
        scroll:
        {
            items:1,
            duration:500,
            pauseOnHover:true
        },
        auto:true,
        items:
        {
            visible:{
                        min:1,
                        max:3
                     },
            height:"variable"        
        },
       

    });
    
    $('.marlon p').fadeOut('5000').fadeIn('5000').fadeOut('5000').fadeIn('5000');
    // $('.marlon p').css('transition','.5s ease-in-out');
    // $('.marlon p').fadeIn('5000').fadeOut('5000');
    // // $('.marlon p').animate({width:'2px'},2000);
    $('.marlon p').hover(function(){   
        $('.marlon p').css('textShadow','1px 1px 5px #fff').css('transition','.5s ease-in-out');
    },function(){
        $('.marlon p').css('textShadow','').css('transition','.5s ease-in-out');
    });

    $(window).scroll(function(){
        if($(this).scrollTop() >= 400){
            $('.one').animate({marginLeft:'0'},500);
            $('.two img').animate({width:'27rem'},1500);
        }

        
    });
    
    
    

    $('.two img').hover(function(){
        $('.two').fadeOut('5000').fadeIn('5000').fadeOut('5000').fadeIn('5000').css('cursor','pointer');
    },function(){
        $('.two').css('cursor','');
    });

    $('.one p').hover(function(){
        $('.one p').css('cursor','pointer').css('textShadow','#979696 1px 2px 10px').css('transition','.5s ease-in-out');
    },function(){
        $('.one p').css('textShadow','').css('transition','.5s ease-in-out');
    });

    var scrollButton = $('.scrollToTop');

    $(window).scroll(function(){
        scrollButton.on('click',function(){
            $('html').stop().animate({scrollTop:0},1000);
        });
        if($(this).scrollTop() >= 700){
            scrollButton.fadeIn('2000');
        }else{
            scrollButton.fadeOut('2000');
        }

        console.log($(this).scrollTop());
    });




});

$(window).on('load', function (){
    $('.overlay').fadeOut("1500");
    $('body').css('overflow-y','scroll');
    $('.overlay').remove();
});

