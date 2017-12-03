window.onload=function(){

	console.info("加载完毕");
	
//选择当前赛季比赛轮次
	var s_bottom = document.getElementsByClassName("s-bottom");
	var li = s_bottom[0].getElementsByTagName("li");

	for (var i = 0; i < li.length; i++) {
		var span = li[i].getElementsByTagName("span")[0];
		span.onclick = function li(){
			var span_a = s_bottom[0].getElementsByTagName("span");
			for (var b = 0; b < span_a.length; b++) {
				span_a[b].className = "";
			}
			this.className = "b-t-29abe2";
		}
	}

	
//展开和收起比赛轮次菜单
	var expand = document.getElementsByClassName("expand")[0];
	var expand_span = expand.getElementsByTagName("span")[0];
	var select = document.getElementById("select");
	
// console.info(expand_span.innerHTML)
		var s = select.offsetHeight/100;
//		console.info(s);
		var b = s_bottom[0].offsetHeight/100;
	expand.onclick = function expand(){
		var w = select.offsetHeight/100;
		if(s<b&&s==w){
			select.style.height = b+0.7+"rem";
			this.firstChild.nodeValue = "收起 ";
			expand_span.style.transform = "rotate(90deg)";
		}else{
			select.style.height = s+"rem";
			this.firstChild.nodeValue = "展开全部 ";
			expand_span.style.transform = "rotate(-90deg)";
		}
	}
			

	
//点击半透明背景关闭所有菜单
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
//选择完成后关闭菜单
	body_header_aside.onclick = function body_header_aside(){
		this.style.display = "none";
		bodyAside.style.display = "none";
	}

//选择显示选择赛季菜单
	var header_p = document.getElementById("header-p");
	header_p.onclick = function header_p(){
		bodyAside.style.display = "block";
		body_header_aside.style.display = "block";
	}
//选择赛季
	var headerTitle = document.getElementById("header-title");
	var seasonList = document.getElementById("season-list");
	var seasonList_a = seasonList.getElementsByTagName("a");
	// console.info(seasonList_a.length);
	for (var i = 0; i < seasonList_a.length; i++) {
		seasonList_a[i].onclick = function seasonList_a(){
			headerTitle.innerHTML = this.innerHTML;
		}
	}
	
//右上角主菜单点击事件
	var headerMenu = document.getElementById("header-menu");
	headerMenu.onclick = function headerMenu(){
		bodyAside.style.display = "block";
		menu_section.style.display = "block";
	}

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











