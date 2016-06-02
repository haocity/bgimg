GetOneImg();  //获取随机图片地址
	ChangeOneImg();//进行更换图片操作
	setInterval(ChangeOneImg,8000);//重复更换图片
	function GetOneImg(){ 
	OneImg="http://haocity.top/img/bj@"+Math.round(Math.random()*2000)+".jpg"
	 }

	function ChangeOneImg(){
	console.log(OneImg);//调试图片地址
	document.getElementById("oneimg").style.backgroundImage = "url("+OneImg+")";
	GetOneImg();
	LoadImg(OneImg);//预先加载下一张图片
	 }


    function LoadImg(url) { 
	var img = new Image(); 
	img.src = url; 
	} 
