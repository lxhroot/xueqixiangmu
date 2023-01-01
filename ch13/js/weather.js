// 页面加载
 $(function(){

    // 定义搜索框变量
    // var searchdata = $(".top-title #search-bar").val()
    var date = [];
    // 声明日期空数组
    var hei_tem = [];
    // 声明最高温空数组
    var low_tem = [];
    // 声明最低温空数组

    $.ajax({
        url: "https://v0.yiketianqi.com/api?unescape=1&version=v9&appid=69743842&appsecret=v1pPNjyw", //要请求的后端地址
        type: "GET", //数据发送的方式(POST或者GET)
        // data: {city:searchdata}, //传递搜索框数据
        dataType: "json", //后端返回的数据格式
        success: function (result) {//ajax请求成功后触发的方法
            console.log(result)
            console.log(result.cityid)
            var city = result.city
            var repeat = result.data
            if(repeat){
                for(var i=0; i<repeat.length;i++){
                    date.push(repeat[i].day);
                }
                // 循环数据包内日期并填入对应数组
                for (var i = 0; i < repeat.length; i++) {
                    hei_tem.push(repeat[i].tem1);
                }
                // 循环数据包内最高温并填入对应数组
                for (var i = 0; i < repeat.length; i++) {
                    low_tem.push(repeat[i].tem2);
                }
                // 循环数据包内最低温并填入对应数组
            }

            myCharts.setOption({
                title: {
                text: city+'七日气温曲线'
                },
                xAxis:{
                data: date
                },
                series:[
                {
                name:'最高温',
                data:hei_tem
                },
                {
                name:'最低温',
                data:low_tem
                }
            ]
            })

            // 模板引擎数据获取
            // 城市获取
            var city1 = result.city
            console.log(city1)
            var city2 = [{city_name:city1}]
            
            // var tips2 = tips
            $('#template2').tmpl(city2).prependTo('#data-tab');

            // 天气获取
            for (var i = 0; i < repeat.length; i++) {
                var heigh_tem = repeat[i].tem1
                var low_temp =  repeat[i].tem2
                var date2 =     repeat[i].date
                var week =      repeat[i].week
                var wea =       repeat[i].wea

            var users = [{ date: date2, week: week ,weather:wea,hei_tem:heigh_tem, low_tem:low_temp}];
            $('#template').tmpl(users).appendTo('#rows');
            }
            
            
         


        },
        error: function () {//ajax请求失败后触发的方法
            console.log('Send Request Fail..');
        }
    });
})
// 搜索按钮
$(".top-title .search-button").on('click',function(){
    clear_olddata()
    Search_click()
});

// ernter事件绑定函数
$(".top-title #search-bar").keydown(function(e){
    
    // 绑定enter事件
    if(e.keyCode==13){
        // 调用函数
        clear_olddata()
        Search_click() 
    }
    
});

// 定义清空原数据函数
function clear_olddata (){
    // 清空原来的数据，为新数据空位
    $("tr").remove()
    $("h3").remove()
}

// 定义搜索函数
function Search_click (){

           // 定义搜索框变量
           var searchdata = $(".top-title #search-bar").val()

           var date = [];
           // 声明日期空数组
           var hei_tem = [];
           // 声明最高温空数组
           var low_tem = [];
           // 声明最低温空数组
       
           $.ajax({
               url: "https://v0.yiketianqi.com/api?unescape=1&version=v9&appid=69743842&appsecret=v1pPNjyw", //要请求的后端地址
               type: "GET", //数据发送的方式(POST或者GET)
               data: {city:searchdata}, //传递搜索框数据
               dataType: "json", //后端返回的数据格式
               success: function (result) {//ajax请求成功后触发的方法
                   console.log(result)
                   console.log(result.cityid)
                   var city = result.city
                   var repeat = result.data
                   if(repeat){
                       for(var i=0; i<repeat.length;i++){
                           date.push(repeat[i].day);
                       }
                       // 循环数据包内日期并填入对应数组
                       for (var i = 0; i < repeat.length; i++) {
                           hei_tem.push(repeat[i].tem1);
                       }
                       // 循环数据包内最高温并填入对应数组
                       for (var i = 0; i < repeat.length; i++) {
                           low_tem.push(repeat[i].tem2);
                       }
                       // 循环数据包内最低温并填入对应数组
                   }
                  //  查找参数并渲染数据
                   myCharts.setOption({
                      // 通过类别查找参数
                       title: {
                       text: city+'七日气温曲线'
                       },
                       xAxis:{
                       data: date
                       },
                       series:[
                      // 通过name查找参数
                       {
                       name:'最高温',
                       data:hei_tem
                       },
                       {
                       name:'最低温',
                       data:low_tem
                       }
                   ]
                   })
       
                   
       
                   // 模板引擎数据获取
                   // 城市获取
                   var city1 = result.city
                   console.log(city1)
                  var city2 = [{city_name:city1}]
                   $('#template2').tmpl(city2).prependTo('#data-tab');
      
                   
       
                   // 天气获取
                   for (var i = 0; i < repeat.length; i++) {
                       var heigh_tem = repeat[i].tem1
                       var low_temp =  repeat[i].tem2
                       var date2 =     repeat[i].date
                       var week =      repeat[i].week
                       var wea =       repeat[i].wea
      
                  //设置参数传递规则
                   var users = [{ date: date2, week: week ,weather:wea,hei_tem:heigh_tem, low_tem:low_temp}];
                   $('#template').tmpl(users).appendTo('#rows');
                   }
                   
               },
               error: function () {//ajax请求失败后触发的方法
                   console.log('Send Request Fail..');
               }
           });

  
    
     // 清空搜索框
     $(".top-title #search-bar").val('')
     setTimeout('$("#mainAera .modle-weather #data-tab p).remove()',500)
     
}

// 返回首页
$(".top-title .backToindex").click(function(){
    location.href="./index.html"
})