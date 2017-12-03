window.onload=function(){

	console.info("加载完毕");
	
//半透明背景点击隐藏事件
	var bodyHeader = document.getElementsByClassName("body-header")[0];
	var menu_section = document.getElementById("menu-section");
	var bodyAside = document.getElementsByClassName("body-aside")[0];
	bodyAside.onclick = function bodyAside(){
		this.style.display = "none";
		menu_section.style.display = "none";
	}

//头部主菜单点击事件
//	var headerMenu = document.getElementById("header-menu");
//	headerMenu.onclick = function headerMenu(){
//		bodyAside.style.display = "block";
//		menu_section.style.display = "block";
//	}

	
	var nav = document.getElementsByClassName("nav")[0];
	var navLi = nav.getElementsByTagName("li");
	var contentUl = document.getElementsByClassName("content-ul")[0];
	for(var i=0; i<navLi.length; i++){
		navLi[i].onclick = function(event,n){
			return function(){
				for(var j=0; j<navLi.length; j++){
					navLi[j].classList.remove("liactive-b");
				}
				this.classList.add("liactive-b");
				contentUl.style.left = "-"+n*100+"%";
			}
		}(event,i)
	}
	

////点击“全部,进行中,未进行”显示项目
//	var nav = document.getElementsByClassName("nav")[0];
//	var navLi = nav.getElementsByTagName("li");
//
//	var list = document.getElementsByClassName("list")[0];
//	var list_li = list.getElementsByTagName("li");
//	// console.info(list_li.length);
//	var item = document.getElementsByClassName("item");
//	var not_begin = document.getElementsByClassName("not-begin")
//	for (var i = 0; i < navLi.length; i++) {
//		navLi[i].i = i;
//		navLi[i].onclick = function navLi(){
//			var navLi = nav.getElementsByTagName("li");
//			for (var b = 0; b < navLi.length; b++) {
//				navLi[b].className = "";
//			}
//			this.className = "liactive-b";
//			for (var i = 0; i < list_li.length; i++) {
//				list_li[i].style.display = "none";
//			}
//			// console.info(j);
//			// console.info(item.length);
//			if(this.i<1){
//				for (var i = 0; i < list_li.length; i++) {
//					list_li[i].style.display = "block";
//				}
//			}else if (this.i>1){
//				for (var i = 0; i < not_begin.length; i++) {
//					not_begin[i].style.display = "block";
//				}
//			}else{
//				for (var i = 0; i < item.length; i++) {
//					item[i].style.display = "block";
//				}
//			}
//		}
//	}
	
//点击关闭所有菜单
	var close = document.getElementsByClassName("close");
	for(var i=0; i<close.length; i++){
		close[i].onclick = function close(){
			bodyAside.style.display = "none";
			menu_section.style.display = "none";
		}
	}

}











