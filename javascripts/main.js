
	changeBgImg();
	setInterval(changeBgImg,30000);
	function changeBgImg(){
	bj="http://haocity.top/img/bj@"+Math.round(Math.random()*2000)+".jpg"
	 console.log(bj);
	document.getElementById("oneimg").style.backgroundImage = "url("+bj+")";
	 }

