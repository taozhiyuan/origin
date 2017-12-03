window.onload = function() {
	console.info("已加载");

// 赛况技术统计比例
	var formStatistics = document.getElementsByClassName("form-statistics")[0];
	var tr = formStatistics.getElementsByTagName("tr");
	// console.info(tr);
	for(var i=0; i<tr.length; i++){
		var td = tr[i].getElementsByTagName("td");
		var div = tr[i].getElementsByTagName("div");
		var szLeft = parseInt(Number(td[0].innerHTML)/[Number(td[0].innerHTML)+Number(td[4].innerHTML)]*100);
		var szRight = parseInt(Number(td[4].innerHTML)/[Number(td[0].innerHTML)+Number(td[4].innerHTML)]*100);
		// console.info(szLeft);

		td[1].getElementsByTagName("div")[0].style.width = szLeft+"%";
		td[3].getElementsByTagName("div")[0].style.width = szRight+"%";

		if(szRight>szLeft){
			for(var b=0; b<div.length; b++){
				td[1].getElementsByTagName("div")[0].className = "";
			}
			td[3].getElementsByTagName("div")[0].setAttribute("class","bar-green");
		}
	}

// 赔率表单显示与隐藏
	var oddsNav = document.getElementsByClassName("odds-nav")[0];
	var oddsNavLi = oddsNav.getElementsByTagName("li");

	var oddsForm = document.getElementsByClassName("odds-form");
	for(var i=0; i<oddsNavLi.length; i++){
		oddsNavLi[i].i = i;
		oddsNavLi[i].addEventListener("touchstart", function(){
			for (var i = 0; i < oddsNavLi.length; i++) {
				oddsNavLi[i].className = "";
			}
			this.className = "odds-subnav";
			for (var i = 0; i < oddsForm.length; i++) {
				oddsForm[i].style.display = "none";
			}
			switch(this.i){
				case 0:
				oddsForm[0].style.display = "table";
				break;
				case 1:
				oddsForm[1].style.display = "table";
				break;
				case 2:
				oddsForm[2].style.display = "table";
				break;
			}
		});
	}




// 菜单手指滑动事件
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
                        if(leftNum >= -250){
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