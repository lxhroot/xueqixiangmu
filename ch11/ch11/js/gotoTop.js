/*返回顶部功能函数封装*/

// 参数说明:
// imgUrl:图片地址（必选），
// bottom：按钮距离底部距离（必选）
//当前页面加载完成
$(function() {
    //把函数放在windows上  暴露出去
    window.gotoTop = function(options) {


        //默认参数
        var defaults = {
                bottom: '100px'
            }
            //参数合并
        var params = $.extend({}, defaults, options)
            //我的参数

        //准备结构
        var $gotoTopHtml = $(`<div class="backToTop">
                            <img src="${params.imgUrl}" alt="">
                            </div>`);



        //样式定位
        $gotoTopHtml.css({
            width: '30px',
            height: '50px',
            position: 'fixed',
            bottom: params.bottom,
            left: '610px',
            marginLeft: '50%',
            //display:'none',
        });


        //返回顶部js代码
        //返回顶部
        //绑定滚动事件
        $(document).scroll(function() {
                //获取距离顶部位置
                var topDistance = $('html,body').scrollTop();
                if (topDistance > 500) {
                    $('.backToTop').fadeIn();
                } else {
                    $('.backToTop').fadeOut();
                }
            })
            //返回顶部(动态添加元素，需要和事件委托，才能绑定事件)
        $('body').on('click', '.backToTop', function() {
                $('html,body').animate({
                    scrollTop: 0
                }, 300)
            })
            //追加到页面尾部
        $('body').append($gotoTopHtml)
    }

})
