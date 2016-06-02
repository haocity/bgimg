
	GetOneImg();  //获取随机图片地址
	ChangeOneImg();//进行更换图片操作
	setInterval(changeBgImg,8000);
	function GetOneImg(){
	OneImg="http://haocity.top/img/bj@"+Math.round(Math.random()*2000)+".jpg"

	 }

	function ChangeOneImg(){
	console.log(OneImg);
	document.getElementById("oneimg").style.backgroundImage = "url("+bj+")";
	GetOneImg();
	LoadImg(OneImg);
	 }


    function LoadImg(url) { 
	var img = new Image(); 
	img.src = url; 
	} 
