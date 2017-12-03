window.onload=function(){

	console.info("加载完毕");

	// 选择赛季事件
	var bodyHeader = document.getElementsByClassName("body-header")[0];
	var menu_section = document.getElementById("menu-section");
	var body_header_aside = bodyHeader.getElementsByTagName("aside")[0];
	// console.info(typeof body_header_aside);
	var bodyAside = document.getElementsByClassName("body-aside")[0];
	bodyAside.onclick = function bodyAside(){
		this.style.display = "none";
		body_header_aside.style.display = "none";
		menu_section.style.display = "none";
	}
	body_header_aside.onclick = function body_header_aside(){
		this.style.display = "none";
		bodyAside.style.display = "none";
	}

	var header_p = document.getElementById("header-p");
	header_p.onclick = function header_p(){
		bodyAside.style.display = "block";
		body_header_aside.style.display = "block";
	}
	var headerTitle = document.getElementById("header-title");
	var seasonList = document.getElementById("season-list");
	var seasonList_a = seasonList.getElementsByTagName("a");
	// console.info(seasonList_a.length);
	for (var i = 0; i < seasonList_a.length; i++) {
		seasonList_a[i].onclick = function seasonList_a(){
			headerTitle.innerHTML = this.innerHTML;
		}
	}

	// 头部足球、篮球点击事件
	var headNav = document.getElementById("head-nav");
	var headNavLi = headNav.getElementsByTagName("li");
	var headMenu = document.getElementsByClassName("head-menu")[0];
	// console.info(headNavLi.length);
	for (var i = 0; i < headNavLi.length; i++) {
		headNavLi[i].onclick = function headNavLi(){
			var headNavLi = headNav.getElementsByTagName("li");
			for (var b = 0; b < headNavLi.length; b++) {
				headNavLi[b].className = "";
			}
			// this.className = "current";
			this.className = "liactive";
			headMenu.style.transitionDuration = "300ms";
			// console.info(this.getAttribute("title"));
			// console.info(headNavLi.length);
			// if (this.getAttribute("title") == "left"){
			// 	headMenu.style.transform = "translateX(0%)";
			// }else{
			// 	headMenu.style.transform = "translateX(-50%)";
			// }
		}
	}

	// 主菜单事件
	var headerMenu = document.getElementById("header-menu");
	headerMenu.onclick = function headerMenu(){
		bodyAside.style.display = "block";
		menu_section.style.display = "block";
	}

	//点击“今天”显示项目
	var nav = document.getElementsByClassName("nav")[0];
	var navLi = nav.getElementsByTagName("li");

	var myDate=new Date();
	var weekday = new Array(14);
	weekday[0] = "星期日";
	weekday[1] = "星期一";
	weekday[2] = "星期二";
	weekday[3] = "星期三";
	weekday[4] = "星期四";
	weekday[5] = "星期五";
	weekday[6] = "星期六"
	weekday[7] = "星期日";;
	weekday[8] = "星期一";
	weekday[9] = "星期二";
	weekday[10] = "星期三";
	weekday[11] = "星期四";
	weekday[12] = "星期五";
	weekday[13] = "星期六";


	for (var i = 0; i < navLi.length; i++) {
		navLi[i].childNodes[0].nodeValue = "0"+(myDate.getMonth()+1)+"-"+(myDate.getDate()+i);
		navLi[i].childNodes[2].nodeValue = weekday[myDate.getDay()+i];

		navLi[i].onclick = function navLi(){
			var navLi = nav.getElementsByTagName("li");
			for (var b = 0; b < navLi.length; b++) {
				navLi[b].className  = "";
				// console.info(b);
			}
			this.className = "liactive-b";
		}
	}
	navLi[0].innerHTML = "今天";

//点击关闭所有菜单
	var close = document.getElementsByClassName("close");
	for(var i=0; i<close.length; i++){
		close[i].onclick = function close(){
			body_header_aside.style.display = "none";
			bodyAside.style.display = "none";
			menu_section.style.display = "none";
		}
	}

}











