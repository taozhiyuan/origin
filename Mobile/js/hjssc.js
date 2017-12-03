$(document).ready(function(){
	var Top = "matrix(1, 0, 0, 1, 0, 0)";
	var safareBottom = "matrix(-1, 0.00000000000000012246467991473532, -0.00000000000000012246467991473532, -1, 0, 0)";
	var chromeBottom = "matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)";
	
		//  点击头部，三角形指针旋转、显示子菜单；
	  $("#xjssc,#background_div").unbind('click').bind('click',function(){
		  
		  	var span = $("h3#xjssc>span");
		  	var transform = span.css("transform");
	//		  chrome浏览器识别此段 三角形指针旋转
				if(transform===Top){
					span.css("transform",chromeBottom);
				}else{
					span.css("transform",Top);
				}

			//  safare浏览器识别此段  三角形指针旋转
				if(transform===Top){
					span.css("transform",safareBottom);
				}else{
					span.css("transform",Top);
				}
		});
		//  点击头部，显示子菜单，隐藏总菜单；
		$("h3#xjssc").click(function(){
			if($("div#header_menu").css("display")=="none"){
			  $("#background_div,div#header_menu").show();
			  $("div#header_submenu").hide();
			}else{
				$("div#header_menu,#background_div").hide();
					}
		});
		//  点击头部右上角，显示总菜单，隐藏子菜单；
		$("#option_span").click(function(){
			if($("div#header_submenu").css("display")=="none"){
				$("#background_div,div#header_submenu").show();
				$("div#header_menu").hide();
				$("h3#xjssc>span").css("transform",chromeBottom);
				$("h3#xjssc>span").css("transform",safareBottom);
			}else{
				$("div#header_submenu,#background_div").hide();
				$("h3#xjssc>span").css("transform",Top);
					}
		});
		//  点击半透明背景，隐藏所有菜单；
		$("#background_div").click(function(){
			$("div#header_submenu,div#header_menu,div#background_div").hide();
		});
		
	//  xjssc1表格滚动代码；
		$("div.right-bottom").scroll(function(){
			var a = $("div.right-bottom").scrollTop();    
			var b = $("div.right-bottom").scrollLeft();  
			$("div.left-bottom").scrollTop(a);
			$("div.right-top").scrollLeft(b);
		});
	
	//  XJSSC-10表格滚动代码；
		$("div.form10-bottom").scroll(function(){
			var a = $("div.form10-bottom").scrollLeft();
			$("div.form10-top").scrollLeft(a);
		});
	
	//  xjssc11-3表格滚动代码；
		$("div.form11-3-bottom-right").scroll(function(){
			var a = $("div.form11-3-bottom-right").scrollTop();    
			var b = $("div.form11-3-bottom-right").scrollLeft();  
			$("div.form11-3-bottom-left").scrollTop(a);
			$("div.form11-3-top-right-bottom").scrollLeft(b);
		});
		
		$("nav>ul>li").click(function(){
			$("nav>ul>li").css({"color":"#aaa","border-color":"#ccc"});
			$(this).css({"color":"red","border-color":"red"});
		});
	
		$("div.Checkbox li").click(function(){
			$(this).css({"background-image":"url(../../images/TrophyList_02.png)"});
		});
	
		$("div.Checkbox-2 li").click(function(){
			$(this).css({"background-position-y":"bottom"});
		});
	
	
	
	
	});









