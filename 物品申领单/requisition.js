

var printBorder = document.querySelectorAll(".print-border");
var mouseOver = document.querySelectorAll(".mouseover");
var iconChacha = document.querySelectorAll(".icon-chacha");
var printBt = document.querySelector(".print-bt");
var printToolbar = document.querySelector(".print-toolbar");

var iconOpen = document.querySelector(".icon-open");
var spread = document.querySelector(".print-detailed-spread");
var con = document.querySelector(".print-detailed-con");
// var inventory ＝ new Object();
var inventory = {
	// 当鼠标经过Ａ元素时显示Ｂ元素，当鼠标离开Ａ元素时隐藏Ｂ元素；
	mouseEvent1 : function(a,b){
		for(var i = 0; i < a.length; i++){
			a[i].addEventListener("mouseover",function(event,n){
				return function(){
					b[n].style.display = "block";
				}
			}(event,i));
			a[i].addEventListener("mouseout",function(event,n){
				return function(){
					b[n].style.display = "none";
				}
			}(event,i));
		}
	},
	// 当点击Ａ元素时，Ｂ元素隐藏；
	clickEvent1 : function(a,b){
		for(var i = 0; i < a.length; i++){
			a[i].addEventListener("click",function(event,n){
				return function(){
					b[n].style.display = "none";
				}
			}(event,i));
		}
	},
	// 当点击打印按钮时，按钮隐藏再执行打印，打印完成显示按钮；
	clickEvent2 : function(a,b){
		a.addEventListener("click",function(){
			b.style.display = "none";
			window.print();
			b.style.display = "block";
		});
	},
	// 当点击打印按钮时，按钮隐藏再执行打印，打印完成显示按钮；
	clickEvent3 : function(a,b,c){
		a.addEventListener("click",function(){
			// var h = b.style.height;
			// var j = c.style.height;
			// console.info(h);
			// console.info(j);
			// h=="0px"?h="auto"+";"+j="0px":h="0px"+";"+j="auto";

			if (b.style.height == "0px"){
				b.style.height = "auto";
				c.style.height = "0px";
			}else{
				b.style.height = "0px";
				c.style.height = "auto";
			}
		});
	},
}
inventory.mouseEvent1(mouseOver,printBorder);
inventory.clickEvent1(iconChacha,mouseOver);
inventory.clickEvent2(printBt,printToolbar);
inventory.clickEvent3(iconOpen,spread,con);


var popupBack = document.querySelector(".popup-back");
var iconChuizi = document.querySelector(".icon-chuizi");
var close = document.querySelector(".close");
var saveColumn = document.querySelector("#saveColumn");
var checkbox = document.querySelectorAll(".checkbox");
var itemName = document.querySelectorAll(".item-name");
var jColumn = document.querySelectorAll(".j_column");

var itemNameA = document.querySelectorAll(".itemNameA");
var itemNameB = document.querySelectorAll(".itemNameB");
var itemNameC = document.querySelectorAll(".itemNameC");

iconChuizi.onclick = function(){
	popupBack.style.display = "block";
}

close.onclick = function(){
	popupBack.style.display = "none";
	for(var i = 0; i < jColumn.length; i++){
		jColumn[i].checked = false;
		switch (jColumn[i].checked){
			case true:
				itemName[i].style.display = "none";
				itemNameA[i].style.display = "none";
				itemNameB[i].style.display = "none";
				itemNameC[i].style.display = "none";
			break;
			case false:
				itemName[i].style.display = "-webkit-flex";
				itemNameA[i].style.display = "table-cell";
				itemNameB[i].style.display = "table-cell";
				itemNameC[i].style.display = "table-cell";
			break;
		}
	}
}

saveColumn.onclick = function(){
	popupBack.style.display = "none";
}

function checkboxS(){
	for(var i = 0; i < checkbox.length; i++){
	checkbox[i].addEventListener("click",function(event,n){
		return function(){
			switch (jColumn[n].checked){
				case true:
					itemName[n].style.display = "none";
					itemNameA[n].style.display = "none";
					itemNameB[n].style.display = "none";
					itemNameC[n].style.display = "none";
				break;
				case false:
					itemName[n].style.display = "-webkit-flex";
					itemNameA[n].style.display = "table-cell";
					itemNameB[n].style.display = "table-cell";
					itemNameC[n].style.display = "table-cell";
				break;
			}
		}
	}(event,i))
	}
}
checkboxS()












