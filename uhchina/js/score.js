window.onload=function(){

	console.info("加载完毕");
	// 主菜单事件
	var headerMenu = document.getElementById("header-menu");
	headerMenu.onclick = function headerMenu(){
		bodyAside.style.display = "block";
		menu_section.style.display = "block";
	}
	
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

// 显示选择赛季菜单
	var header_p = document.getElementById("header-p");
	header_p.onclick = function header_p(){
		bodyAside.style.display = "block";
		body_header_aside.style.display = "block";
	}
	// var headerTitle = document.getElementById("header-title");
	// var seasonList = document.getElementById("season-list");
	// var seasonList_a = seasonList.getElementsByTagName("a");
	// // console.info(seasonList_a.length);
	// for (var i = 0; i < seasonList_a.length; i++) {
	// 	seasonList_a[i].onclick = function seasonList_a(){
	// 		headerTitle.innerHTML = this.innerHTML;
	// 	}
	// }

//点击“全部,进行中,未进行”显示项目
	var nav = document.getElementsByClassName("nav")[0];
	var navLi = nav.getElementsByTagName("li");

	var list = document.getElementsByClassName("list")[0];
	var list_li = list.getElementsByTagName("li");
	// console.info(list_li.length);
	var item = document.getElementsByClassName("item");
	var not_begin = document.getElementsByClassName("not-begin")
	for (var i = 0; i < navLi.length; i++) {
		navLi[i].i = i;
		navLi[i].onclick = function navLi(){
			var navLi = nav.getElementsByTagName("li");
			for (var b = 0; b < navLi.length; b++) {
				navLi[b].className = "";
			}
			this.className = "liactive-b";
			for (var i = 0; i < list_li.length; i++) {
				list_li[i].style.display = "none";
			}
			// console.info(j);
			// console.info(item.length);
			if(this.i<1){
				for (var i = 0; i < list_li.length; i++) {
					list_li[i].style.display = "block";
				}
			}else if (this.i>1){
				for (var i = 0; i < not_begin.length; i++) {
					not_begin[i].style.display = "block";
				}
			}else{
				for (var i = 0; i < item.length; i++) {
					item[i].style.display = "block";
				}
			}
		}
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

//点击确定
	var submit = document.getElementById("submit");
	submit.onclick = function submit(){
		body_header_aside.style.display = "none";
		bodyAside.style.display = "none";
	}

//点击复选框项目
	var match_list = document.getElementsByClassName("match-list")[0];
	var input = match_list.getElementsByTagName("input");
	for (var i = 0; i < input.length; i++) {
		// input[i].checked = "true";
		input[i].onclick = function input(){
			// console.info(this.checked);
			if(this.className == "checkbox"){
				this.className = "";
			}else{
				this.className = "checkbox";
			}
		}
	}
//点击复选框主菜单切换背景
	var match_menu = document.getElementById("match-menu");
	var match_menu_li = match_menu.getElementsByTagName("li");
	var match_list_li = match_list.getElementsByTagName("li");

	for(var i=0; i<match_menu_li.length; i++){
		match_menu_li[i].i = i;
		match_menu_li[i].onclick = function match_menu_li(){
			console.info(this.i);
			var match_menu_li = match_menu.getElementsByTagName("li");

			// console.info(match_menu_li.length);

			for (var i = 0; i < match_menu_li.length; i++) {
				match_menu_li[i].className = "";
			}
			this.className = "match-menu-list";

			for (var i = 0; i < match_list_li.length; i++) {
				match_list_li[i].style.display = "none";
			}
			
			var one = document.getElementsByClassName("one");
			var two = document.getElementsByClassName("two");
			var three = document.getElementsByClassName("three");
			var four = document.getElementsByClassName("four");
			if(this.i===0){
				for (var i = 0; i < match_list_li.length; i++) {
					match_list_li[i].style.display = "block";
				}
			}else if(this.i===1){
				
				for (var i = 0; i < one.length; i++) {
					one[i].style.display = "block";
				}
			}else if(this.i===2){
				
				for (var i = 0; i < two.length; i++) {
					two[i].style.display = "block";
				}
			}else if(this.i===3){
				
				for (var i = 0; i < three.length; i++) {
					three[i].style.display = "block";
				}
			}else{
				
				for (var i = 0; i < four.length; i++) {
					four[i].style.display = "block";
				}
			}
		}
	}
	// 隐藏的赛事数量
	var checkbox = document.getElementsByClassName("checkbox");
	var batch_number = document.getElementById("batch-number");
	console.info(match_list_li.length-checkbox.length);
	batch_number.innerHTML = match_list_li.length-checkbox.length;

	// 全选
	var selectAll = document.getElementById("selectAll");
	selectAll.onclick = function selectAll(){
		for (var i = 0; i < input.length; i++) {
			input[i].className = "checkbox";
		}
	}
	// 反选
	var reverseSelection = document.getElementById("reverseSelection");
	reverseSelection.onclick = function reverseSelection(){
		for (var i = 0; i < input.length; i++) {
			// input[i].className = "checkbox";
			if(input[i].className == ""){
				input[i].className = "checkbox";
			}else{
				input[i].className = "";
			}
			// console.info(i);
		}
	}
}














