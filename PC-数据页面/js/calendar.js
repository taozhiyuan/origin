
        var date = new Date();
        var getDate = date.getDate();
        var getDay = date.getDay();
        var getMonth = date.getMonth();
        var getFullYear = date.getFullYear();
        var jYear = document.getElementsByClassName("j-year");
        var jMonth = document.getElementsByClassName("j-month");

        // 获取日期表格的总数
        var dateConDays = document.querySelectorAll(".date-con-days td");
        var dateConweek = document.querySelectorAll(".date-con-week td");

    function calendar(year,month){
        if (arguments.length == 2) {
            getFullYear = year;
            getMonth = month;
        }else if(arguments.length == 1){
            getFullYear = year;
        }
        for(var i = 0; i < jYear.length; i++){
            jYear[i].innerHTML = getFullYear;
        }
        for(var i = 0; i < jMonth.length; i++){
            jMonth[i].innerHTML = getMonth+1;
        }
        function isLeapYear(year) {
            var cond1 = year % 4 == 0;  //条件1：年份必须要能被4整除
            var cond2 = year % 100 != 0;  //条件2：年份不能是整百数
            var cond3 = year % 400 ==0;  //条件3：年份是400的倍数
            //当条件1和条件2同时成立时，就肯定是闰年，所以条件1和条件2之间为“与”的关系。
            //如果条件1和条件2不能同时成立，但如果条件3能成立，则仍然是闰年。所以条件3与前2项为“或”的关系。
            //所以得出判断闰年的表达式：
            var cond = cond1 && cond2 || cond3;
            if(cond) {
                // alert(year + "是闰年");
                return 1;
            } else {
                // alert(year + "不是闰年");
                return 0;
            }
        }
        
        // 接着定义一个包含十二个月在内的月份总天数的数组：
        var m_days=new Array(31,28+isLeapYear(getFullYear),31,30,31,30,31,31,30,31,30,31);
        // m_days这个数组里，二月份的天数已经加入闰年的信息：28+is_leap(ynow)。数组元素从0开始，
        // 正好对应于JS提供的Date函数提供的getMonth返回值，即0表示一月，1表示二月，2表示三月，依此类推。
        // 这样，各月总数可以这样取得：m_days[x]。其中，x为0至11的自然数。

        // 可以使用Date函数的getDay取得，返回的值从0到6，0表示星期一，1表示星期二，2表示星期三，
        // 其余依此类推。
        var n1str = new Date(getFullYear,getMonth,1);
        firstday = n1str.getDay()-1;

        var formDays = (function(){
            // 当切换时间的时候，复位单元格的样式表
            for(i = 0; i < dateConDays.length; i++){
                dateConDays[i].style.color = "#ccc";
            }
            // 输出当月的日期
            if(firstday == -1){firstday = firstday+7;}
            for(var i = 0; i < m_days[getMonth]; i++){
                dateConDays[i+firstday].childNodes[0].innerHTML = i+1;
                dateConDays[i+firstday].style.color = "#666";
            }
            // 获取当月第一天前面的日期
            var nq = new Array(firstday);
            for (var b = nq.length-1; b >= 0; b--){
                nq[b] = m_days[getMonth-1]-b;
            }
            // 输出当月第一天前面的日期
            if(getMonth == 0){// 如果是第一个月
                for (var b = 0; b < firstday; b++){
                    dateConDays[firstday-b-1].childNodes[0].innerHTML = 31-b;
                }
            }else{
                for (var b = 0; b < firstday; b++){
                    dateConDays[firstday-b-1].childNodes[0].innerHTML = nq[b];
                }
            }
            // 输出当月最后一天后面的日期
            var q = dateConDays.length-(firstday+m_days[getMonth]);
            for (var b = 0; b < q; b++){
                dateConDays[b+firstday+m_days[getMonth]].childNodes[0].innerHTML = b+1;
            }
        })();

        var formWeek = (function(){
            // 当切换时间的时候，复位单元格的样式表
            for(i = 0; i < dateConweek.length; i++){
                dateConweek[i].style.color = "#ccc";
            }
            // 输出当月的日期
            if(firstday == -1){firstday = firstday+7;}
            for(var i = 0; i < m_days[getMonth]; i++){
                dateConweek[i+firstday].childNodes[0].innerHTML = i+1;
                dateConweek[i+firstday].style.color = "#666";
            }
            // 获取当月第一天前面的日期
            var nq = new Array(firstday);
            for (var b = nq.length-1; b >= 0; b--){
                nq[b] = m_days[getMonth-1]-b;
            }
            // 输出当月第一天前面的日期
            if(getMonth == 0){// 如果是第一个月
                for (var b = 0; b < firstday; b++){
                    dateConweek[firstday-b-1].childNodes[0].innerHTML = 31-b;
                }
            }else{
                for (var b = 0; b < firstday; b++){
                    dateConweek[firstday-b-1].childNodes[0].innerHTML = nq[b];
                }
            }
            // 输出当月最后一天后面的日期
            var q = dateConweek.length-(firstday+m_days[getMonth]);
            for (var b = 0; b < q; b++){
                dateConweek[b+firstday+m_days[getMonth]].childNodes[0].innerHTML = b+1;
            }
        })();
    }
    calendar();




        
        //焦点事件封装
        var dianJi = function (All,focus,get){
            var form = document.querySelectorAll(All);
            form[get+firstday-1].classList.add(focus);
            for(var i =0; i<form.length; i++){
                form[i].addEventListener("click",function(event,n){
                    return function(){
                        for(j=0; j<form.length; j++){
                            form[j].classList.remove(focus);
                        }
                        this.classList.add(focus);
                        // parseInt(this.childNodes[0].nodeValue);
                    }
                }(event,i))
            }
        }
        dianJi(".date-con-days td","active",getDate);
        dianJi(".date-con-week td","active",getDate);
        dianJi(".date-con-month td","active",getMonth);
                

        var liList = document.querySelectorAll(".date-nav li");//查找主导航下的子标签
        var ul = document.querySelector(".contentBox .head-menu");//找到主体内容
        var controller = {
            muneController : function(){
                ul.style.width = liList.length * 100 + "%";//主体内容的宽度是主导航子标签的个数＊100%；
                for(var i = 0; i < liList.length; i++){
                    liList[i].addEventListener("click",function(event,n){
                        return function(){
                            // console.log(n);
                            for(var j = 0; j < liList.length; j++){
                                liList[j].classList.remove("current");//清除所有class
                            }
                            this.classList.add("current");//为目标添加class
                            ul.style.left = "-" + n * 100 + "%";//主体内容的位置根据主导航下子标签的位置；
                        }
                    }(event,i))
                }
            }(),
           // 年历点击事件；
            clickEven : function(){
                var form = document.querySelectorAll(".date-con-year td");//查找年历表的单元格
                for(var i =0; i<form.length; i++){
                    form[i].addEventListener("click",function(){
                        for(j=0; j<form.length; j++){
                            form[j].classList.remove("active");//清除所有类
                        }
                        this.classList.add("active");//为当前点击的元素添加class
                    })
                }
            }(),
            // 周历点击事件；
            clickEven1 : function(){
                var formTr = document.querySelectorAll(".date-con-week tr");//查找tr元素
                var form = document.querySelector(".date-con-week");//查找周历表单
                var active = form.querySelector(".active");//查找焦点
                active.parentNode.className = "back";//将焦点的父元素添加class

                form.addEventListener("click",function(){
                    for(i = 0; i < formTr.length; i++){
                        formTr[i].classList.remove("back");//清除所有类
                    }
                    var active = form.querySelector(".active");//重新查找焦点
                    active.parentNode.className = "back";//重新为焦点的父元素添加class
                });
            }(),
            // 子导航点击事件；
            clickEven2 : function(){
                var increasing = document.querySelectorAll(".increasing");//查找月递增
                var decline = document.querySelectorAll(".decline");//查找月递减
                var increasingY = document.querySelectorAll(".increasing-y");//查找年递增
                var declineY = document.querySelectorAll(".decline-y");//查找年递减

                // 当点击递增减三角后，日历表刷新；
                for(var i = 0; i<increasing.length; i++){
                    // 月递增；
                    increasing[i].addEventListener("click",function(){
                        // 限制三角形递增的最大的月数
                        if(getMonth<11){
                            getMonth = getMonth+1;
                        }
                        calendar();
                    });
                     // 月递减；
                    decline[i].addEventListener("click",function(){
                        // 限制三角形递减最的小月数
                        if(getMonth>0){
                            getMonth = getMonth-1;
                        }
                        calendar();
                    });

                }

                // 当点击递增减三角后，日历表刷新；
                for(var i = 0; i<increasingY.length; i++){
                    // 年递增；
                    increasingY[i].addEventListener("click",function(){
                        getFullYear = getFullYear+1;
                        calendar();
                    });
                    // 年递减；
                    declineY[i].addEventListener("click",function(){
                        getFullYear = getFullYear-1;
                        calendar();
                    });

                }
            }(),
        }









