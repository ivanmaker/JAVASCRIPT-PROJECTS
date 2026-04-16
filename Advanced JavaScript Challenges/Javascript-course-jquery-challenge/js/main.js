$(document).ready(function() {

    $('.initiallyHidden').hide();

    $('.headingButton').click(function(){
        $('.heading').toggle();
    });

    $('.paraButton').click(function(){
        $('#stPara').slideToggle(1000);
        $("p").css("color", "red");
    });

    $('.stopParaButton').click(function(){
        $('#stPara').stop();
    });

    $('.showParaButton').click(function(){
        $('#showPara').show().css('background-color', 'red');
    });

     $('.ulButton').click(function(){
        $('ul li:first-child').css("font-size", "40px");
    });

    $('.hoverOver').hover(function(){
        $(this).css('color', 'red');
    }, function(){
        $(this).css('color', 'black');
    });

    $('input').blur(function(){
        $(this).css('font-size', '30px');
    });

    $('.slideDownButton').click(function(){
        $('.showAll').slideDown();
    });

    $('.fadeOutButton').click(function(){
        $('#fadeOut').fadeOut();
    });

     $('.textChangeButton').click(function(){
        $('.textChange').text("Woah!");
    });
});
