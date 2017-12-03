
	console.info("加载完毕");

	//点击“今天”显示项目
	var scheduleNav = document.getElementsByClassName("schedule-nav")[0];
	var scheduleNavLi = scheduleNav.getElementsByTagName("li");

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


	for (var i = 0; i < scheduleNavLi.length; i++) {
		scheduleNavLi[i].childNodes[0].nodeValue = "0"+(myDate.getMonth()+1)+"-"+(myDate.getDate()+i);
		scheduleNavLi[i].childNodes[2].nodeValue = weekday[myDate.getDay()+i];

		scheduleNavLi[i].onclick = function navLi(){
			var navLi = scheduleNav.getElementsByTagName("li");
			for (var b = 0; b < scheduleNavLi.length; b++) {
				scheduleNavLi[b].className  = "";
				// console.info(b);
			}
			this.className = "liactive-b";
		}
	}
	scheduleNavLi[0].innerHTML = "今天";




//点击切换国家
	var matchNav = document.getElementsByClassName("match-nav")[0];
	var matchNavLi = matchNav.getElementsByTagName("li");

	var sectionMenu = document.getElementsByClassName("section-menu")[0];
	var table = sectionMenu.getElementsByTagName("table");
	// console.info(table.length);
	// var item = document.getElementsByClassName("item");
	// var not_begin = document.getElementsByClassName("not-begin")
	for (var i = 0; i < matchNavLi.length; i++) {
		matchNavLi[i].i = i;
		matchNavLi[i].onclick = function navLi(){
			var matchNavLi = matchNav.getElementsByTagName("li");
			for (var b = 0; b < matchNavLi.length; b++) {
				matchNavLi[b].className = "";
			}
			this.className = "match-liactive";
			for (var i = 0; i < table.length-1; i++) {
				table[i].style.display = "none";
			}
			// // console.info(j);
			// // console.info(item.length);
			if(this.i == 0){
				var europe = document.getElementsByClassName("europe");
				for (var i = 0; i < europe.length; i++) {
					europe[i].style.display = "table";
				}
			}else if (this.i == 1){
				var asia = document.getElementsByClassName("asia");
				for (var i = 0; i < asia.length; i++) {
					asia[i].style.display = "table";
				}
			}else if (this.i == 2){
				var america = document.getElementsByClassName("america");
				for (var i = 0; i < america.length; i++) {
					america[i].style.display = "table";
				}
			}else if (this.i == 3){
				var africa = document.getElementsByClassName("africa");
				for (var i = 0; i < africa.length; i++) {
					africa[i].style.display = "table";
				}
			}else{
				var oceania = document.getElementsByClassName("oceania");
				for (var i = 0; i < oceania.length; i++) {
					oceania[i].style.display = "table";
				}
			}

			// }
		}
	}

//点击切换赛事范围
	var matchNavLi = document.querySelectorAll(".match-nav-b li");
	for(var i=0; i<matchNavLi.length; i++){
		matchNavLi[i].addEventListener("touchstart",(function(even,n){
			return function(){
				for(var i=0; i<matchNavLi.length; i++){
					matchNavLi[i].classList.remove("match-liactive-b");
				}
				this.classList.add("match-liactive-b");
				sectionMenu.style.left = - n * 100 + "%";
			}
		})(event,i));
	}




//点击“今天”显示项目
	var scheduleNav1 = document.getElementsByClassName("schedule-nav")[1];
	var scheduleNavLi1 = scheduleNav1.getElementsByTagName("li");

	for (var i = 0; i < scheduleNavLi1.length; i++) {
		scheduleNavLi1[i].childNodes[0].nodeValue = "0"+(myDate.getMonth()+1)+"-"+(myDate.getDate()-i);
		scheduleNavLi1[i].childNodes[2].nodeValue = weekday[myDate.getDay()+7-i];

		scheduleNavLi1[i].onclick = function navLi(){
			var navLi = scheduleNav1.getElementsByTagName("li");
			for (var b = 0; b < scheduleNavLi1.length; b++) {
				scheduleNavLi1[b].className  = "";
				// console.info(b);
			}
			this.className = "liactive-b";
		}
	}
	scheduleNavLi1[0].innerHTML = "今天";

	var scheduleHeader = document.querySelectorAll(".schedule-header");
	for(var i=0; i<scheduleHeader.length; i++){
		scheduleHeader[i].addEventListener("touchstart",function(event){
			event.stopPropagation();
		});
		scheduleHeader[i].addEventListener("touchend",function(event){
			event.stopPropagation();
		});
	}






