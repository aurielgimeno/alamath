$(document).ready(function(){

	$("body").velocity({opacity:1},1000);
	
	$(".level-item").click(function(){
		$(".level-item").removeClass("selected");
		$(this).addClass("selected");
		//$(this).velocity('callout.pulse');
		selectedOp = $(this).attr("id");
		$(".selectedOpTxt").html(selectedOp);
		$(".opContainer").velocity('transition.bounceDownOut');
		setTimeout(function(){
			$(".levelsContainer").velocity('transition.bounceDownIn');
		},1300);
		
		if(selectedOp == "Addition"){
			window.localStorage.setItem("quizLevelSelected",0);
			$(".instructionTxt").html("sum");
			$(".instructionImg").attr("src","img/png/instructions/instruction-addition.png");
			$(".selectedOpTxt").attr("src","img/png/levels/ADDITION.png");
			
		}else if(selectedOp == "Subtraction"){
			window.localStorage.setItem("quizLevelSelected",1);
			$(".instructionTxt").html("difference");
			$(".instructionImg").attr("src","img/png/instructions/instruction-subtraction.png");
			$(".selectedOpTxt").attr("src","img/png/levels/SUBTRACTION.png");
			
		}else if(selectedOp == "Multiplication"){
			window.localStorage.setItem("quizLevelSelected",2);
			$(".instructionTxt").html("product");
			$(".instructionImg").attr("src","img/png/instructions/instruction-multiplication.png");
			$(".selectedOpTxt").attr("src","img/png/levels/MULTIPLICATION.png");
			
		}else if(selectedOp == "Division"){
			window.localStorage.setItem("quizLevelSelected",3);
			$(".instructionTxt").html("quotient");
			$(".instructionImg").attr("src","img/png/instructions/instruction-division.png");
			$(".selectedOpTxt").attr("src","img/png/levels/DIVISION.png");
		}
	});
	
	$(".btnBackToOperators").click(function(){
		$(".levelsContainer").velocity('transition.bounceDownOut');
		setTimeout(function(){
			$(".opContainer").velocity('transition.bounceDownIn');
		},1300);
	});
	
	$(".levels").click(function(){
		var levelSelectedId = $(this).attr("id");
		window.localStorage.setItem("levelOfGame",levelSelectedId);
		location.href = "main-game-page.html";
	});
	
	//playBackgroundMusic('audio/1.mp3');
});
