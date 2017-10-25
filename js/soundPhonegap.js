document.addEventListener("deviceready", onDeviceReady, false);
var getPhoneGapPath = function() {
	var path = window.location.pathname;
	path = path.substr( path, path.length - 10 );
	return path;
};

function onDeviceReady(){
	// Register the event listener
	//document.addEventListener("backbutton", onBackKeyDown, false);
	//document.addEventListener("pause", onPause, false);
	playBackgroundMusic("audio/1.mp3");
}

//for BG music (loop on media_stopped) START 

function playBackgroundMusic(pathOfAudio){
	var bgSound = null;//important to declare the variable
	//pathOfAudio = audio/1.mp3 -- sample lang
	bgSound = new Media( getPhoneGapPath() + pathOfAudio, onStatusBG);
	bgSound.play();
	bgSound.setVolume('1');
}
function onStatusBG(status) {
	if( status==Media.MEDIA_STOPPED ) {
		bgSound.play();
		bgSound.setVolume('1');
	}
}
function  pauseSound(){
	bgSound.pause();
}
function playSound(){
	bgSound.play();
}
function onBackKeyDown() {
	// Handle the back button
}
//for BG music (loop on media_stopped) END



//for other sounds like sound effects (NO loop)START
var soundEffect = null; // important to declare the variable
function playSoundEffect(pathOfAudio){
	soundEffect = new Media( getPhoneGapPath() + pathOfAudio);
	soundEffect.play();
	soundEffect.setVolume('1');
}

//for other sounds like sound effects (NO loop)END
