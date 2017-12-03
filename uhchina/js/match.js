window.onload=function(){

	console.info("加载完毕");


//点击半透明背景关闭所有菜单
	var bodyHeader = document.getElementsByClassName("body-header")[0];
	var menu_section = document.getElementById("menu-section");
	var body_header_aside = bodyHeader.getElementsByTagName("aside")[0];
	console.info(body_header_aside);
	// console.info(typeof body_header_aside);
	var bodyAside = document.getElementsByClassName("body-aside")[0];
	bodyAside.onclick = function bodyAside(){
		this.style.display = "none";
		menu_section.style.display = "none";
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
			bodyAside.style.display = "none";
			menu_section.style.display = "none";
		}
	}

//点击“全部,进行中,未进行”显示项目
	var nav = document.getElementsByClassName("nav")[0];
	var navLi = nav.getElementsByTagName("li");

	var sectionMenu = document.getElementsByClassName("section-menu")[0];
	var table = sectionMenu.getElementsByTagName("table");
	console.info(table.length);
	// var item = document.getElementsByClassName("item");
	// var not_begin = document.getElementsByClassName("not-begin")
	for (var i = 0; i < navLi.length; i++) {
		navLi[i].i = i;
		navLi[i].onclick = function navLi(){
			var navLi = nav.getElementsByTagName("li");
			for (var b = 0; b < navLi.length; b++) {
				navLi[b].className = "";
			}
			this.className = "liactive-a";
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






var fistBoxController = (function(){
    var liList = document.querySelectorAll(".menuBox li");
    var ul = document.querySelector(".contentBox .head-menu");
    var controller = {
        muneController : function(){

            for(var i = 0; i < liList.length; i++){

                liList[i].addEventListener("touchstart",function(event,n){
                    return function(){
                        console.log(n);
                        for(var j = 0; j < liList.length; j++){
                            liList[j].classList.remove("liactive");

                        }
                        this.classList.add("liactive");
                        ul.style.left = "-" + n * 100 + "%";
                    }

                }(event,i))
            }
        }(),
        contentCtroller : function(){
            var contentBox = document.querySelector(".contentBox");

            ul.style.left = "0%";
            //console.log(ul);
            //console.log(contentBox);
            var startX,disX;
            contentBox.addEventListener("touchstart",function(event){
                //console.log(event.touches[0]);
                console.log(event);
                var touche = event.touches[0];
                startX = touche.clientX;

            })
            contentBox.addEventListener("touchend",function(event){
                //console.log(event.changedTouches[0]);
                var touche = event.changedTouches[0];
                disX = touche.clientX - startX;
                var leftNum = parseInt(ul.style.left);
                if(disX > 0 && disX > 100){
                    //console.log(leftNum)
                        if(leftNum <= -100){
                            ul.style.left = leftNum + 100 + "%";
                            var left = (~ parseInt(ul.style.left) + 1) / 100;
                            //console.log(left)
                            menuController(left);
                        }
                }else if(disX < 0 && disX < -100){
                    //console.log(leftNum);
                        if(leftNum >= -50){
                            ul.style.left = leftNum - 100 + "%";
                            var left = (~ parseInt(ul.style.left) + 1) / 100;
                            //console.log(left);
                            menuController(left);
                        }
                }
            })
            contentBox.addEventListener("touchmove",function(event){
                event.stopPropagation()
            });

            function menuController(order){
                for(var i = 0; i < liList.length; i++){
                    liList[i].classList.remove("liactive");
                }
                liList[order].classList.add("liactive");
            }
        }()
    }


}());



var fistBoxController_b = (function(){
    var liList = document.querySelectorAll(".menuBox-b li");
    var ul = document.querySelector(".contentBox-b .section-menu");
    var controller = {
        muneController : function(){

            for(var i = 0; i < liList.length; i++){

                liList[i].addEventListener("touchstart",function(event,n){
                    return function(){
                        console.log(n);
                        for(var j = 0; j < liList.length; j++){
                            liList[j].classList.remove("liactive-b");

                        }
                        this.classList.add("liactive-b");
                        ul.style.left = "-" + n * 100 + "%";
                    }

                }(event,i))
            }
        }(),
        contentCtroller : function(){
            var contentBox = document.querySelector(".contentBox-b");

            ul.style.left = "0%";
            //console.log(ul);
            //console.log(contentBox);
            var startX,disX;
            contentBox.addEventListener("touchstart",function(event){
                //console.log(event.touches[0]);
                // console.log(event);
                var touche = event.touches[0];
                startX = touche.clientX;

            })
            contentBox.addEventListener("touchend",function(event){
                //console.log(event.changedTouches[0]);
                var touche = event.changedTouches[0];
                disX = touche.clientX - startX;
                var leftNum = parseInt(ul.style.left);
                if(disX > 0 && disX > 100){
                    //console.log(leftNum)
                        if(leftNum <= -100){
                            ul.style.left = leftNum + 100 + "%";
                            var left = (~ parseInt(ul.style.left) + 1) / 100;
                            //console.log(left)
                            menuController(left);
                        }
                }else if(disX < 0 && disX < -100){
                    //console.log(leftNum);
                        if(leftNum >= -150){
                            ul.style.left = leftNum - 100 + "%";
                            var left = (~ parseInt(ul.style.left) + 1) / 100;
                            //console.log(left);
                            menuController(left);
                        }
                }
            })
            contentBox.addEventListener("touchmove",function(event){
                event.stopPropagation()
            });

            function menuController(order){
                for(var i = 0; i < liList.length; i++){
                    liList[i].classList.remove("liactive-b");
                }
                liList[order].classList.add("liactive-b");
            }
        }()
    }


}());

}











