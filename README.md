# 一图 一个小小的壁纸库
项目主页 https://app.haotown.cn
使用方法（cookie带菜单版）
1.给予要修改背景图片的标签ID="oneimg"
2.在head标签里加入

     <link rel="stylesheet" href="https://raw.githubusercontent.com/haocity/oneimg/gh-pages/css/oneimg-cookie.css">
     <script src="https://raw.githubusercontent.com/haocity/oneimg/gh-pages/js/oneimg-cookie.js"></script>
3.在body里加入

         <div class="changerimg" onmousemove="showoneimg()" onmouseout="hideoneimg()" onclick="hideoneimg()">
              <img  id="oneimgmenuimg" src="https://www.haotown.cn/b/imgmenu.png" style="width: 70px;">
              <div id="oneimgmenu">
                  <img src="https://www.haotown.cn/b/imgdown.png" title="下载/评论图片" style="width: 70px;"   onclick="DownImg()">    
      <img src="https://www.haotown.cn/b/imgchanger.png"title="更换图片" style="width: 70px;" onclick="ChangerImg()">    
       </div>
更多还是看看实例吧
