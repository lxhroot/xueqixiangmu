// 返回顶部功能函数封装 2022-11-15


$(function() {
    //把函数挂载在window上暴露出去
    window.gotoTop = function(options) {
        //window定义一个全局变量

        //准备结构
        var $gotoTopHtml = $(` <div class="backToTop">
                               <img src="${options.imgUrl}">
                               </div> `);
        //变量gotoTopHtml

        // var defaults = {
        //     bottom: '100px'
        // }

        //参数合并
        // var parm = $.extend({}, defaults, options)


        // 写样式定位
        $gotoTopHtml.css({
                width: `30px`,
                height: `50px`,
                position: `fixed`,
                bottom: options.bottom,
                left: `605px`,
                marginLeft: `50%`
            })
            //变量所有定位的css值

        //返回顶部
        $(document).scroll(function() {
                var topDistance = $('html, body').scrollTop();
                if (topDistance > 400) {
                    $('.backToTop').fadeIn();
                } else {
                    $('.backToTop').fadeOut();
                }
            })
            //返回顶部功能(动态添加的元素， 需要使用事件委托才可以绑定事件)
        $('body').on('click', '.backToTop', function() {
            $('html , body').animate({
                scrollTop: 0
            }, 300)
        })



        // 追加到页面尾部
        $('body').append($gotoTopHtml)
    }
})