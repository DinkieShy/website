var loaded = false;
var currentSize = "large";

$(document).ready(function(){
	console.log("init");
	loaded = true
	checkWindowSize();
});

$(window).resize(checkWindowSize);

function checkWindowSize(){
	if(window.innerWidth < 900){
		swapLogo("small");
	}
	else{
		swapLogo("large");
	}
}

function swapLogo(size){
	if(size == "small" && currentSize == "large"){
		$('#linkedInButton img')[0].src = "./assets/LI-In-Bug.png";
		$('#githubButton img')[0].src = "./assets/GitHub-Mark-Light-64px.png";
		currentSize = "small";
	}
	else if (size == "large" && currentSize == "small"){
		$('#linkedInButton img')[0].src = "./assets/LI-Logo.png";
		$('#githubButton img')[0].src = "./assets/GitHub_Logo_White.png";
		currentSize = "large";
	}
}