$(document).ready(function() {
    var myMedia;

    $("#myTabContent2").hide();
    $(".btnBarChart").click(function() {
        $("#myTabContent2").show();
    });

    $("body").transition({
        opacity: 1
    }, 1000);

    // for bootstrap tabs script START-->
    $(function() {
        $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
            // Get the name of active tab
            var activeTab = $(e.target).text();
            // Get the name of previous tab
            var previousTab = $(e.relatedTarget).text();
            $(".active-tab span").html(activeTab);
            $(".previous-tab span").html(previousTab);
        });
    }); // for bootstrap tabs script END-->


    // ============================ get chart Details ADDITION --START-- ========================================= -->
    var scoreOnlyAddition = [];
    var dateOnlyAddition = [];
    var scoreArrayAddition = JSON.parse(window.localStorage.getItem("localCorrectScoreArrayAddition"));
    if (scoreArrayAddition == null || scoreArrayAddition == "null") {
        scoreArrayAddition = [];
        $(".txtBarError").html("No record yet");
    } else {
        $(".txtBarError").html("");
        for (i = 0, numberingLang = 1; i < scoreArrayAddition.length; i++, numberingLang++) {
            var places = "";
            if (numberingLang == 1) {
                places = "st Game";
            } else if (numberingLang == 2) {
                places = "nd Game";
            } else if (numberingLang == 3) {
                places = "rd Game";
            } else {
                places = "th Game";
            }
            scoreOnlyAddition.push(scoreArrayAddition[i]);
            dateOnlyAddition.push(numberingLang + "" + places);


        }
    }
    var randomScalingFactor = function() {
        return Math.round(Math.random() * 15)
    };
    var barChartDataAddition = {
        labels: dateOnlyAddition,
        datasets: [{
            label: "Progress Data set",
            fillColor: "rgba(220,220,220,0.4)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: scoreOnlyAddition,

        }]

    } // ============================ get chart Details ADDITION --END-- ========================================= -->

    // ============================ get chart Details Subtraction --START-- ========================================= -->
    var scoreOnlySubtraction = [];
    var dateOnlySubtraction = [];
    var scoreArraySubtraction = JSON.parse(window.localStorage.getItem("localCorrectScoreArraySubtraction"));
    if (scoreArraySubtraction == null || scoreArraySubtraction == "null") {
        scoreArraySubtraction = [];
        $(".txtBarError").html("No record yet");
    } else {
        $(".txtBarError").html("");
        for (i = 0, numberingLang = 1; i < scoreArraySubtraction.length; i++, numberingLang++) {
            var places = "";
            if (numberingLang == 1) {
                places = "st Game";
            } else if (numberingLang == 2) {
                places = "nd Game";
            } else if (numberingLang == 3) {
                places = "rd Game";
            } else {
                places = "th Game";
            }
            scoreOnlySubtraction.push(scoreArraySubtraction[i]);
            dateOnlySubtraction.push(numberingLang + "" + places);

        }
    }
    var randomScalingFactor = function() {
        return Math.round(Math.random() * 15)
    };
    var barChartDataSubtraction = {
        labels: dateOnlySubtraction,
        datasets: [{
            label: "Progress Data set",
            fillColor: "rgba(220,220,220,0.4)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: scoreOnlySubtraction
        }]

    } // ============================ get chart Details Subtraction --END-- ========================================= -->


    // ============================ get chart Details Multiplication --START-- ========================================= -->
    var scoreOnlyMultiplication = [];
    var dateOnlyMultiplication = [];
    var scoreArrayMultiplication = JSON.parse(window.localStorage.getItem("localCorrectScoreArrayMultiplication"));
    if (scoreArrayMultiplication == null || scoreArrayMultiplication == "null") {
        scoreArrayMultiplication = [];
        $(".txtBarError").html("No record yet");
    } else {
        $(".txtBarError").html("");
        for (i = 0, numberingLang = 1; i < scoreArrayMultiplication.length; i++, numberingLang++) {
            var places = "";
            if (numberingLang == 1) {
                places = "st Game";
            } else if (numberingLang == 2) {
                places = "nd Game";
            } else if (numberingLang == 3) {
                places = "rd Game";
            } else {
                places = "th Game";
            }
            scoreOnlyMultiplication.push(scoreArrayMultiplication[i]);
            dateOnlyMultiplication.push(numberingLang + "" + places);


        }
    }
    var randomScalingFactor = function() {
        return Math.round(Math.random() * 15)
    };
    var barChartDataMultiplication = {
        labels: dateOnlyMultiplication,
        datasets: [{
            label: "Progress Data set",
            fillColor: "rgba(220,220,220,0.4)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: scoreOnlyMultiplication
        }]

    } // ============================ get chart Details Multiplication --END-- ========================================= -->


    // ============================ get chart Details Division --START-- ========================================= -->
    var scoreOnlyDivision = [];
    var dateOnlyDivision = [];
    var scoreArrayDivision = JSON.parse(window.localStorage.getItem("localCorrectScoreArrayDivision"));
    if (scoreArrayDivision == null || scoreArrayDivision == "null") {
        scoreArrayDivision = [];
        $(".txtBarError").html("No record yet");
    } else {
        $(".txtBarError").html("");
        for (i = 0, numberingLang = 1; i < scoreArrayDivision.length; i++, numberingLang++) {
            var places = "";
            if (numberingLang == 1) {
                places = "st Game";
            } else if (numberingLang == 2) {
                places = "nd Game";
            } else if (numberingLang == 3) {
                places = "rd Game";
            } else {
                places = "th Game";
            }
            scoreOnlyDivision.push(scoreArrayDivision[i]);
            dateOnlyDivision.push(numberingLang + "" + places);


        }
    }
    var randomScalingFactor = function() {
        return Math.round(Math.random() * 15)
    };
    var barChartDataDivision = {
        labels: dateOnlyDivision,
        datasets: [{
            label: "Progress Data set",
            fillColor: "rgba(220,220,220,0.4)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: scoreOnlyDivision
        }]

    } // ============================ get chart Details Division --END-- ========================================= -->

    function generateBarChart(selectedBar) {
        var steps = 15;
        var a = selectedBar;

        var ctxAddition = document.getElementById("canvasBarChart").getContext("2d");
        window.myBar = new Chart(ctxAddition).Bar(a, {
            responsive: false,
            scaleOverride: true,
            scaleSteps: steps,
            scaleStepWidth: 1,
            scaleStartValue: 0,
            animationSteps: 5,
            scaleFontColor: "#ffffff",
            showTooltips: false,
        });
    }

    function generateChartSubstraction() {
        var steps = 15;
        var ctxSubstraction = document.getElementById("canvasAdditionSubstraction").getContext("2d");
        window.myBar = new Chart(ctxSubstraction).Bar(barChartDataAddition, {
            responsive: true,
            scaleOverride: true,
            scaleSteps: steps,
            scaleStepWidth: 1,
            scaleStartValue: 0,


        });
    }




    $(".btnProgressAddtion").click(function() {
        $(".txtSubject").html("Addition");
        generateBarChart(barChartDataAddition);
    });

    $(".btnProgressSubstraction").click(function() {
        $(".txtSubject").html("Substraction");
        generateBarChart(barChartDataSubtraction);
    });
    $(".btnProgressMultiplication").click(function() {
        $(".txtSubject").html("Multiplication");
        generateBarChart(barChartDataMultiplication);
    });
    $(".btnProgressDivision").click(function() {
        $(".txtSubject").html("Division");
        generateBarChart(barChartDataDivision);
    });

    //playBackgroundMusic('audio/1.mp3');
});


//for strengths pie START
var localCorrectAnswerAddition = (window.localStorage.getItem("localCorrectAnswerAddition"));
if (localCorrectAnswerAddition == undefined || localCorrectAnswerAddition == "undefined" || localCorrectAnswerAddition == NaN || localCorrectAnswerSubtraction == "null") {
    localCorrectAnswerAddition = 0;
    //alert(localCorrectAnswerSubtraction);
} else {
    parseInt(localCorrectAnswerAddition);
}
$(".txtLocalCorrectAnswerAddition").html(localCorrectAnswerAddition);

var localCorrectAnswerSubtraction = (window.localStorage.getItem("localCorrectAnswerSubtraction"));
if (localCorrectAnswerSubtraction == undefined || localCorrectAnswerSubtraction == "undefined" || localCorrectAnswerSubtraction == NaN || localCorrectAnswerSubtraction == "null") {
    localCorrectAnswerSubtraction = 0;
    //alert(localCorrectAnswerSubtraction);
} else {
    parseInt(localCorrectAnswerSubtraction);
}
$(".txtLocalCorrectAnswerSubtraction").html(localCorrectAnswerSubtraction);



var localCorrectAnswerMultiplication = (window.localStorage.getItem("localCorrectAnswerMultiplication"));
if (localCorrectAnswerMultiplication == undefined || localCorrectAnswerMultiplication == "undefined" || localCorrectAnswerMultiplication == NaN || localCorrectAnswerMultiplication == "null") {
    localCorrectAnswerMultiplication = 0;
    //alert(localCorrectAnswerSubtraction);
} else {
    parseInt(localCorrectAnswerMultiplication);
}
$(".txtLocalCorrectAnswerMultiplication").html(localCorrectAnswerMultiplication);

var localCorrectAnswerDivision = (window.localStorage.getItem("localCorrectAnswerDivision"));
if (localCorrectAnswerDivision == undefined || localCorrectAnswerDivision == "undefined" || localCorrectAnswerDivision == NaN || localCorrectAnswerDivision == "null") {
    localCorrectAnswerDivision = 0;
    //alert(localCorrectAnswerSubtraction);
} else {
    parseInt(localCorrectAnswerDivision);
}
$(".txtLocalCorrectAnswerDivision").html(localCorrectAnswerDivision);


if (localCorrectAnswerDivision == 0 && localCorrectAnswerMultiplication == 0 && localCorrectAnswerSubtraction == 0 && localCorrectAnswerAddition == 0) {
    $(".txtNoStrengths").html("Dont have any record yet");
} else {
    $(".txtNoStrengths").html("");
}
var pieDataStrengths = [{
        value: parseInt(localCorrectAnswerDivision),
        color: "#e38c12",
        highlight: "#f59814",
        label: "Division"
    },
    {
        value: parseInt(localCorrectAnswerMultiplication),
        color: "#358435",
        highlight: "#3e9a3e",
        label: "Multiplication"
    },
    {
        value: parseInt(localCorrectAnswerSubtraction),
        color: "#2d7dec",
        highlight: "#3f8df8",
        label: "Subtraction"
    },
    {
        value: parseInt(localCorrectAnswerAddition),
        color: "#F7464A",
        highlight: "#FF5A5E",
        label: "Addition"
    }


];

function generatePieStrengths() {
    var ctx = document.getElementById("chart-area-strengths").getContext("2d");
    window.myPie = new Chart(ctx).Pie(pieDataStrengths, {
        segmentShowStroke: true,
        segmentStrokeWidth: 1,

    });

};



$("#btnStrengthsTab").click(function() {
    generatePieStrengths();
});
//for strengths pie END


//for things to improves pie START
var localWrongAnswerAddition = (window.localStorage.getItem("localWrongAnswerAddition"));
if (localWrongAnswerAddition == undefined || localWrongAnswerAddition == "undefined" || localWrongAnswerAddition == NaN || localCorrectAnswerSubtraction == "null") {
    //alert(localWrongAnswerAddition);
    localWrongAnswerAddition = 0;
    //alert(localCorrectAnswerSubtraction);
} else {
    parseInt(localWrongAnswerAddition);
}
$(".txtLocalWrongAnswerAddition").html(localWrongAnswerAddition);


var localWrongAnswerSubtraction = (window.localStorage.getItem("localWrongAnswerSubtraction"));
if (localWrongAnswerSubtraction == undefined || localWrongAnswerSubtraction == "undefined" || localWrongAnswerSubtraction == NaN || localCorrectAnswerSubtraction == "null") {
    localWrongAnswerSubtraction = 0;
    //alert(localCorrectAnswerSubtraction);
} else {
    parseInt(localWrongAnswerSubtraction);
}
$(".txtLocalWrongAnswerSubtraction").html(localWrongAnswerSubtraction);


var localWrongAnswerMultiplication = (window.localStorage.getItem("localWrongAnswerMultiplication"));
if (localWrongAnswerMultiplication == undefined || localWrongAnswerMultiplication == "undefined" || localWrongAnswerMultiplication == NaN || localCorrectAnswerSubtraction == "null") {
    localWrongAnswerMultiplication = 0;
    //alert(localCorrectAnswerSubtraction);
} else {
    parseInt(localWrongAnswerSubtraction);
}
$(".txtLocalWrongAnswerMultiplication").html(localWrongAnswerMultiplication);

var localWrongAnswerDivision = (window.localStorage.getItem("localWrongAnswerDivision"));
if (localWrongAnswerDivision == undefined || localWrongAnswerDivision == "undefined" || localWrongAnswerDivision == NaN || localCorrectAnswerSubtraction == "null") {
    localWrongAnswerDivision = 0;
    //alert(localCorrectAnswerSubtraction);
} else {
    parseInt(localWrongAnswerSubtraction);
}

if (localWrongAnswerDivision == 0 && localWrongAnswerMultiplication == 0 && localWrongAnswerSubtraction == 0 && localWrongAnswerAddition == 0) {
    $(".txtNoThingsToImprove").html("Dont have any record yet");
} else {
    $(".txtNoThingsToImprove").html("");
}
$(".txtLocalWrongAnswerDivision").html(localWrongAnswerDivision);
var pieDataThingsToImprove = [{
        value: parseInt(localWrongAnswerDivision),
        color: "#e38c12",
        highlight: "#f59814",
        label: "Division"
    },
    {
        value: parseInt(localWrongAnswerMultiplication),
        color: "#358435",
        highlight: "#3e9a3e",
        label: "Multiplication"
    },
    {
        value: parseInt(localWrongAnswerSubtraction),
        color: "#2d7dec",
        highlight: "#3f8df8",
        label: "Subtraction"
    },
    {
        value: parseInt(localWrongAnswerAddition),
        color: "#F7464A",
        highlight: "#FF5A5E",
        label: "Addition"
    }


];

function generatePieThingsToImprove() {
    var ctx = document.getElementById("chart-area-things-to-improve").getContext("2d");
    window.myPie = new Chart(ctx).Pie(pieDataThingsToImprove, {
        segmentShowStroke: true,
        segmentStrokeWidth: 1,
    });
};



$("#btnThingsToImprove").click(function() {
    generatePieThingsToImprove();
});
$(".btn-back-to-main-menu").click(function() {
    location.href = "index.html";

});
//for strengths pie END