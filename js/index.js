$(document).ready(function() {

    startSplash();

    function startSplash() {
        var a = window.sessionStorage.getItem("splashScreen");
        if (a == null || a == "null" || a == undefined || a == "undefined") {

            $(".splashImages").fadeToggle(2000);
            setTimeout(function() {
                $(".splashImages1").transition({
                    opacity: 1
                }, 500);
            }, 3000);

            setTimeout(function() {
                $(".splashImages2").transition({
                    opacity: 1
                }, 2000);
            }, 4000);


            setTimeout(function() {
                $(".splashKo").fadeToggle();
            }, 10000);
            setTimeout(function() {
                $(".cloudToLeft").transition({
                    x: "-1500px"
                }, 3000);
                $(".cloudToRight").transition({
                    x: "+1500px"
                }, 3000);
                $("#wrapper").transition({
                    y: "1175px"
                }, 1000);
            }, 10000);

            window.sessionStorage.setItem("splashScreen", "1");
        } else if (a == "1") {
            $(".splashKo").css({
                display: "none"
            });
            $(".splashKo").hide();
            $(".cloudToLeft").transition({
                x: "-1500px"
            }, 3000);
            $(".cloudToRight").transition({
                x: "+1500px"
            }, 3000);
            $("#wrapper").transition({
                y: "1175px"
            }, 1000);
        }

    }
    $("body").transition({
        opacity: 1
    }, 1000);

    getCharacterSelected();

    //addScript("js/jquery.transit.js");
    $(".btnLoginLocalStorage").click(function() {
        var a = $("#inputLocalUsername").val();
        if (a == "") {
            $(".txtLoginLocalErrorMsg").html("Please input your Name");
        } else {
            localLogin($(".loginModalForm").hide());

        }
    });

    function localLogin() {
        var a = $("#inputLocalUsername").val();
        window.localStorage.setItem("localAccountUsername", a);
        var c = window.localStorage.getItem("localAccountUsername");
        $(".welcomeDiv").show();
        $(".txtWelcomeUsername").html("Welcome " + c);
        $(".txtHiUsername").html(c);
    }


    $(".btnChangeYourName").click(function() {
        $(".btnChangeYourName").hide();
        $(".editUsernameDiv").show();

    });
    $(".btnSaveChangesLocalUsername").click(function() {
        var a = $("#inputEditLocalUsername").val();
        if (a == "") {
            $(".txtLoginLocalErrorMsg").html("Please input your Name");
        } else {
            window.localStorage.setItem("localAccountUsername", a);
            $(".txtHiUsername").html(a);
            $(".txtLoginLocalErrorMsg").html("");
            $("#inputEditLocalUsername").val("");
        }
    });




    //selecting character START

    $(".charSelectOptionImg").click(function() {
        $(".charSelectOptionImg").removeClass("selectedChar");
        var a = $(this).attr("id");
        $("#" + a).addClass("selectedChar");
        window.localStorage.setItem("character", a);
    });
    $(".btn-to-option").click(function() {
        getCharacterSelected();
    });


    function getCharacterSelected() {
        var a = window.localStorage.getItem("character");
        if (a == null || a == "null") {
            $("#maleChar").addClass("selectedChar");
            window.localStorage.setItem("character", "maleChar"); //default character maleChar or femaleChar
        }
        //alert(a);
        $(".charSelectOptionImg").removeClass("selectedChar");
        $("#" + a).addClass("selectedChar");
        $("#" + a + "Edit").addClass("selectedChar");
        changeCharElements();
    }
    //selecting character END


    //playBackgroundMusic('audio/1.mp3');




});