	GetOneImg(); //获取随机图片序号
	ChangerImg();//进行更换图片操作
	
	setInterval(ChangerImg,8000);//重复更换图片
	var OneImg,OneImgnumber;
	function GetOneImg(){ 
	OneImg=Math.round(Math.random() * 2200);
	 }

	function ChangerImg(){
	console.log("背景图已更换为"+OneImg);//调试图片
	OneImgnumber=OneImg;
	document.getElementById("oneimg").style.backgroundImage = "url(https://app.haotown.cn/img/bj@"+OneImg+".jpg)";
	GetOneImg();
	LoadImg("https://app.haotown.cn/img/bj@"+OneImg+".jpg");//预先加载下一张图片
	console.log("开始预加载"+OneImg)	 
	}


    function LoadImg(url) { 
	var img = new Image(); 
	img.src = url; 
	} 
	function showoneimg(){
        document.getElementById('oneimgmenu').style.display='block';
        document.getElementById('oneimgmenuimg').style.display='none';
    }
    function hideoneimg(){
        document.getElementById('oneimgmenu').style.display='none';
        document.getElementById('oneimgmenuimg').style.display='block';
    }
    function DownImg(){
    window.open("https://app.haotown.cn/img.html?img=" +OneImgnumber);
    }