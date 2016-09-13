	OneImg=new Object();
	OneImg.obj=document.getElementById("oneimg");
	OneImg.down=document.getElementById("downimg");
	OneImg.join=document.getElementById("join");
	GetOneImg(); //获取随机图片序号
	ChangerImg();//进行更换图片操作
	setInterval(ChangerImg,8000);//重复更换图片
	function GetOneImg(){ 
	OneImg.id=Math.round(Math.random() *4358);
	}
	function ChangerImg(){
	OneImg.obj.style.backgroundImage = "url(https://t4.haotown.cn/img/bj@"+OneImg.id+".jpg)";
	OneImg.down.href="https://t4.haotown.cn/img/bj@"+OneImg.id+".jpg";
	OneImg.join.href="https://t5.haotown.cn/img.html?img="+OneImg.id;
	GetOneImg();
	LoadImg("https://app.haotown.cn/img/bj@"+OneImg.id+".jpg");//预先加载下一张图片
	}
    function LoadImg(url) { 
	var img = new Image(); 
	img.src = url; 
	} 
	