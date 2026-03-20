$(document).ready(function () {

    //The shineLoop function uses the chaining technique to utilize multiple animate event methods in the same function 
    function shineLoop() {
        $(".shine").animate({ backgroundPositionX: "500px" }, 3000)
            .animate({ backgroundPositionX: "-800px" }, 3000);
    };
    //setInerval will repeat the shineLopp function and 0 sets the delayed amount of time between each repeat
    setInterval(shineLoop, 0);

    //Shrinks header size when the document is scrolled down by 50 pixels
    $(document).on("scroll", function () {
        if ($(document).scrollTop() > 50) {
            $("h1").addClass("header-scrolled");
        } else {
            $("h1").removeClass("header-scrolled");
        }
    });

    $("#classicCars").on({

        //Triggers the images to slide down one after the other when the users mourse enters the div area with the #classicCars ID
        mouseenter: function(){
            $("#titleOne").show(1000);
            $("#titleTwo").show(1500);
            $("#titleThree").show(2000);
        },

        //Triggers the iamges to slide up and hide each title one after the other when the users mouse leaves the div area with the #classicCars ID
        mouseleave: function(){
            $("#titleOne").hide(2000);
            $("#titleTwo").hide(1500);
            $("#titleThree").hide(1000);
        }
    });

    //Creates a toggle effect on each FAQ question by checking each elements"s sibling so they don't all display when one question is clicked
    $("div.question").on("click", function(){
        $(this).next().slideToggle("slow");
    });    
})


$(document).ready(function(){//Wait until page is fully loaded

    //If you click on chevy.jpg it will swap to mgb.jpg
    $("#swap1").on("click", function(){
        $(this).attr("src", "images/mgb.jpg");
    });

    //If you click on prosche.jpg it will swap to chevy.jpg
    $("#swap2").on("click", function(){
        $(this).attr("src", "images/chevy.jpg");
    });

    //If you click on mgb.jpg it will swap to porsche.jpg
    $("#swap3").on("click", function(){
        $(this).attr("src", "images/porsche.jpg");
    });
})

//When you click on a question in the FAQs page, it will show the answer, then fade out of .75s
$(document).ready(function(){
    $("div.question").on("click", function(){
        $("div.answer").fadeOut(750);
    });
})