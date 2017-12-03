
window.onload = function(){
    console.info("脚本已加载");

    // 综合、足球、篮球事件
    var indexMenu = document.getElementsByClassName("index-menu")[0];
    var indexMenuDiv = indexMenu.getElementsByTagName("div");
    // console.info(indexMenuDiv.length);

    indexMenuDiv[0].addEventListener("touchend",function(){
        window.location.href = "index.html";
    });
    indexMenuDiv[1].addEventListener("touchend",function(){
        window.location.href = "football.html";
    });
    // indexMenuDiv[2].addEventListener("touchend",function(){
    //     window.location.href = "basketball.html";
    // });

 // content-ul的长度倍数等于导航栏的个数
    var nav = document.getElementsByTagName("nav")[0];
    var current = nav.getElementsByTagName("li");
    var contentUl = document.getElementsByClassName("content-ul")[0];
    // console.info(current.length*100);
    contentUl.style.width = current.length*100+"%";

 // 导航点击事件
    var fistBoxController = (function(){
        var liList = document.querySelectorAll(".menuBox li");
        var ul = document.querySelector(".contentBox .content-ul");
        // console.info(ul);
        var controller = {
            muneController : function(){
                for(var i=0; i<liList.length; i++){
                    liList[i].addEventListener("click",function(even,n){
                        return function(){
                            for(var j=0; j<liList.length; j++){
                                liList[j].classList.remove("current");
                            }
                            this.classList.add("current");
                            ul.style.left = "-" + n * 100 + "%";
                        }
                    }(event,i))
                }
            }(),
            contentCtroller : function(){
                var contentBox = document.querySelector(".contentBox");
                ul.style.left = "0%";
                var startX,disX;
                contentBox.addEventListener("touchstart",function(event){
                    var touche = event.touches[0];
                    startX = touche.clientX;
                });
                contentBox.addEventListener("touchend",function(event){
                    var touche = event.changedTouches[0];
                    disX = touche.clientX - startX;
                    var leftNum = parseInt(ul.style.left);
                    if(disX > 0 && disX > 100){
                        if(leftNum <= -100){
                            ul.style.left = leftNum + 100 + "%";
                            var left = (~ parseInt(ul.style.left)+1)/100;
                            menuController(left);
                        }
                    }
                    else if(disX < 0 && disX < -100){
                        if(leftNum >= (-liList.length+2)*100){
                            ul.style.left = leftNum - 100 +"%";
                            var left = (~ parseInt(ul.style.left)+1)/100;
                            menuController(left);
                        }
                    }
                })
                contentBox.addEventListener("touchmove",function(event){
                    event.stopPropagation();
                });
                function menuController(order){
                    for(var i=0; i<liList.length; i++){
                        liList[i].classList.remove("current");
                    }
                    liList[order].classList.add("current");
                }
            }()
        }
    })();



 // // 图片轮播事件
    var scrollImage = (function(){
        var scroll = document.querySelector(".scroll");
        var scroll_ul = document.querySelector(".scroll ul");
        var I = document.querySelectorAll(".catalog i");
        var i = 0;
        var b = 0;
        if(scroll_ul !== null){
            function myTime(){
                for(var j=0; j<I.length; j++){
                    I[j].classList.remove("catalog-i");
                }
                if(i>-400){
                    scroll_ul.style.left = i+"%"; 
                    I[b].classList.add("catalog-i");
                }else{
                    i = 0;
                    b = 0;
                    I[0].classList.add("catalog-i");
                    scroll_ul.style.left = "0%"; 
                }
                i = i-100;
                b = b+1;
                sto = setTimeout(function(){myTime()},4000);
                // console.info(sto);
            }
            myTime();
        // 点击暂停轮播事件
            scroll_ul.addEventListener("click",function(event){
                clearTimeout(sto);
                sto = setTimeout(function(){myTime()},8000);
                event.stopPropagation();
                // event.preventDefault();
                // return false;
            });
        }
    })();
}








