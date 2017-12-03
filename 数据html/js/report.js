


var fistBoxController = (function(){
    var liList = document.querySelectorAll(".menuBox li");
    var ul = document.querySelector(".contentBox .head-menu");
	if(!ul){return false}
    var scrollWidth = document.body.scrollWidth;
    var maxRight = (liList.length-1) * 100-50;
    // console.info(scrollWidth);
    var controller = {
        muneController : function(){
            ul.style.width = liList.length * 100 + "%";
            for(var i = 0; i < liList.length; i++){

                liList[i].addEventListener("touchstart",function(event,n){
                    return function(){
                        // console.log(n);
                        for(var j = 0; j < liList.length; j++){
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
                // console.log(disX);
                var leftNum = parseInt(ul.style.left);
                // console.log(leftNum)
                if(disX > 0 && disX > 100){
                        if(leftNum <= -100){
                            ul.style.left = leftNum + 100 + "%";
                            var left = (~ parseInt(ul.style.left) + 1) / 100;
                            // console.log(left);
                            menuController(left);
                        }
                }else if(disX < 0 && disX < -100){
                    // console.log(leftNum);
                        if(leftNum >= -maxRight){
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
                    liList[i].classList.remove("current");
                }
                liList[order].classList.add("current");
            }
        }()
    }
}());











