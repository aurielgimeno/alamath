$(document).ready(function() {
    var myMedia;
    $("body").transition({
        opacity: 1
    }, 1000);
    openWindow();
    $(".cloudToLeft").animate({
        'left': '1000px'
    }, 2000);
    $(".cloudToRight").animate({
        'left': '-=1000px'
    }, 2000);


    $(".levelSelect").click(function() {
        var a = $(this).attr("id");
        //alert(a);
        showInstructions();
        $(".levelSelect").removeClass("levelSelected");
        $(this).addClass("levelSelected");
        setTimeout(function() {
            $(".instructionContainer").hide();
            if (a == "levelAddition") {
                $(".instructionAddition").show();
            } else if (a == "levelSubtraction") {
                $(".instructionSubtraction").show();
            } else if (a == "levelMultiplication") {
                $(".instructionMultiplication").show();
            } else if (a == "levelDivision") {
                $(".instructionDivision").show();
            }
        }, 500);

    });
    //playBackgroundMusic('audio/1.mp3');

    $(".startGame").click(function() {
        var a = $(this).attr("id");

        //alert(a);
        window.localStorage.setItem("quizLevelSelected", a);
        location.href = "main-game-page.html";
        window.localStorage.setItem("levelTest", 2);
    });

});

function showInstructions() {
    $(".instructionsWrapper").transition({
        bottom: "-50%"
    }, 500, function() {
        $(".instructionsWrapper").transition({
            bottom: "0%"
        }, 1000)

    });
}