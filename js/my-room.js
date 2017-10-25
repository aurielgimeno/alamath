
$(document).ready(function(){
	$("body").transition({opacity:1},1000);
	// for bootstrap tabs script START-->
	$(function(){
		  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		  // Get the name of active tab
		  var activeTab = $(e.target).text(); 
		  // Get the name of previous tab
		  var previousTab = $(e.relatedTarget).text(); 
		  $(".active-tab span").html(activeTab);
		  $(".previous-tab span").html(previousTab);
	   });
	});// for bootstrap tabs script END-->
	
	displayStars();
	displayUserDetails();
	changeCharElements();
	function displayStars(){
		var operation1 = "Addition";
		var operation2 = "Subtraction";
		var operation3 = "Multiplication";
		var operation4 = "Division";
		var a = (window.localStorage.getItem("localStars"+operation1));
		if(a == null || a == "null" || a == "" || a == "NaN" || a == undefined){
			a = 0;
		}
		$(".txtLocalStars"+operation1).html(a);
		
	
		var b = (window.localStorage.getItem("localStars"+operation2));
		if(b == null || b == "null" || b == "" || b == "NaN" || b == undefined){
			b = 0;
		}
		$(".txtLocalStars"+operation2).html(b);
		
		var c = (window.localStorage.getItem("localStars"+operation3));
		if(c == null || c == "null" || c == "" || c == "NaN" || c == undefined){
			c = 0;
		}
		$(".txtLocalStars"+operation3).html(c);
		
		var d = (window.localStorage.getItem("localStars"+operation4));
		if(d == null || d == "null" || d == "" || d == "NaN" || d == undefined){
			d = 0;
		}
		$(".txtLocalStars"+operation4).html(d);
		
		var totalStars = parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d);
		$(".txtlocalTotalStars").html(totalStars);
		
		
	}
	function displayUserDetails(){
		var a = window.localStorage.getItem("localAccountUsername");
		$(".txtLocalUsername").html(a);
	}
	
	$(".btn-back-to-main-menu").click(function(){
		location.href = "index.html";
	});
	//playBackgroundMusic('audio/1.mp3');

});