window.onload=function(){

	console.info("加载完毕");

//点击半透明背景关闭所有菜单
	var bodyHeader = document.getElementsByClassName("body-header")[0];
	var menu_section = document.getElementById("menu-section");
	// console.info(typeof body_header_aside);
	var bodyAside = document.getElementsByClassName("body-aside")[0];
	bodyAside.onclick = function bodyAside(){
		this.style.display = "none";
		menu_section.style.display = "none";
	}
	
//右上角主菜单点击事件
//	var headerMenu = document.getElementById("header-menu");
//	headerMenu.onclick = function headerMenu(){
//		bodyAside.style.display = "block";
//		menu_section.style.display = "block";
//	}

//点击关闭所有菜单
	var close = document.getElementsByClassName("close");
	for(var i=0; i<close.length; i++){
		close[i].onclick = function close(){
			if(body_header_aside !== null){
				body_header_aside.style.display = "none";
			}
			bodyAside.style.display = "none";
			menu_section.style.display = "none";
		}
	}



}











