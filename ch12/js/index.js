// 乐购商城首页js
// 2022-10-21
$(function() {
    // 首页轮播
    $('#banner').tyslide({
        boxh: 460, //盒子的高度
        w: 1000, //盒子的宽度
        h: 390, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 40, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 20, //控制按钮高度
        radius: 10, //控制按钮圆角度数
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#ff6600", //当前控制按钮的颜色
        isShowNum: true //是否显示数字
    });

    // 图书/电子书轮播
    $('#ebooks-banner').tyslide({
        boxh: 223, //盒子的高度
        w: 332, //盒子的宽度
        h: 223, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 12, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 22, //控制按钮宽度
        controlsH: 5, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#ff6600", //当前控制按钮的颜色
    });
    // 电子书1号轮播
    $('#ebooks1-banner').tyslide({
        boxh: 223, //盒子的高度
        w: 332, //盒子的宽度
        h: 223, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 12, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 22, //控制按钮宽度
        controlsH: 5, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#ff6600", //当前控制按钮的颜色
    });
    // 电子书2号轮播
    $('#ebooks2-banner').tyslide({
        boxh: 223, //盒子的高度
        w: 332, //盒子的宽度
        h: 223, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 12, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 22, //控制按钮宽度
        controlsH: 5, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#ff6600", //当前控制按钮的颜色
    });

    // 新书列表手风琴效果
    $('.ebooks .right-box ul>li').mouseenter(function() {
        // 所有兄弟:隐藏详情 显示标题
        $(this).siblings().find('.desc').hide();
        $(this).siblings().find('.ebooks-title').show();
        // 当前:隐藏标题 显示详情
        $(this).find('.ebooks-title').hide();
        // 隐藏标题
        $(this).find('.desc').show();
        // 显示详情
    });

    // 电子书tab栏移动
    $('.ebooks-list').eq(1).hide();
    $('.ebooks-list').eq(2).hide();
    var $lis = $('.ebooks .ebooks-nav > li');
    $lis.mouseenter(function() {
            $(this).addClass('active').siblings('li').removeClass('active');
            var index = $(this).index();
            var $ebookslist = $('.ebooks-list');
            $ebookslist.eq(index).show().siblings('.ebooks-list').hide();
        })
        // $('.ebooks-nav > li').mouseenter(function() {
        //     $(this).addClass('active').siblings('li').removeClass('active');
        //     var index = $(this).index();
        //     $('.ebooks-list').eq(index).show().siblings('ebooks-list').hide();
        // });

    //服装轮播图
    $('#clothes-banner').tyslide({
        boxh: 338, //盒子的高度
        w: 381, //盒子的宽度
        h: 348, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 12, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 22, //控制按钮宽度
        controlsH: 5, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#ff6600", //当前控制按钮的颜色
    });
    // 服装tab栏移动
    $('.clothers-list').eq(1).hide();
    $('.clothers-list').eq(2).hide();
    var $lis = $('.clothes .clothes-nav > li');
    $lis.mouseenter(function() {
            $(this).addClass('active').siblings('li').removeClass('active');
            var index = $(this).index();
            var $ebookslist = $('.clothers-list');
            $ebookslist.eq(index).show().siblings('.clothers-list').hide();
        })
        //户外运动轮播图
    $('#sport-banner').tyslide({
        boxh: 338, //盒子的高度
        w: 381, //盒子的宽度
        h: 348, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 12, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 22, //控制按钮宽度
        controlsH: 5, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#ff6600", //当前控制按钮的颜色
    });
    // 户外运动tab栏移动
    $('.sport .left-box .top .fr li').mouseenter(function() {
        $(this).addClass('active').siblings().removeClass('active');
        var index = $(this).index();
        // $('.ebooks .left-box .centent .ebooks-list div').eq(index).show().siblings().hide();
    });
    //童装轮播图
    $('#children-banner').tyslide({
        boxh: 338, //盒子的高度
        w: 381, //盒子的宽度
        h: 348, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 12, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 22, //控制按钮宽度
        controlsH: 5, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#ff6600", //当前控制按钮的颜色
    });
    // 童装tab栏移动
    $('.children .left-box .top .fr li').mouseenter(function() {
        $(this).addClass('active').siblings().removeClass('active');
        var index = $(this).index();
        // $('.ebooks .left-box .centent .ebooks-list div').eq(index).show().siblings().hide();
    });
    // 推广商品
    let promotedProductsBootomContentLis = document.querySelectorAll('.adily-list li');
    // console.log(promotedProductsBootomContentLis);
    for (let i = 0; i < promotedProductsBootomContentLis.length; i++) {
        promotedProductsBootomContentLis[i].addEventListener('mouseover', function() {
            promotedProductsBootomContentLis[i].style.backgroundColor = '#f2f2f2';
        })
        promotedProductsBootomContentLis[i].addEventListener('mouseout', function() {
            promotedProductsBootomContentLis[i].style.backgroundColor = '';
        })
    }

    //推广商品切换
    $('.promotion .promotion-title ul li').mouseenter(function() {
        // 导航激活类的切换
        $(this).addClass('active').siblings().removeClass('active')
            // 内容切换，获得内容索引
        var index = $(this).index(); //0=> left: 0 * 1170 , 1 => left : -1
        console.log(index)
        console.log($('.promotion .promotion-content .inner-box'))
            // 左右移动
        $('.promotion .promotion-content .inner-box').animate({
            'left': -index * 1170
        }, 300)

    })

    // 二维码效果
    $('.qr-code .ticket').hover(function() {
        //让二维码滑出
        $('.qr-code div').stop(true).animate({
            left: '-100px'
        })
    }, function() {
        $('.qr-code div').stop(true).animate({
            left: 0
        })
    })

    // 顶部搜索框交互
    $(document).scroll(function() {
        // 获取到顶部距离
        var topDistance = $('html, body').scrollTop();
        if (topDistance > 500) {
            // 大于500滑下
            $('.top-search-box').slideDown()
        } else {
            // 反之收回
            $('.top-search-box').slideUp()
        }
    })

    // 楼梯跳转效果
    $('.floor li').click(function() {
        // 获取索引
        var index = $(this).index();
        //每一个板块的位置
        var topOffset = $('.floorBox').eq(index).offset().top;
        //滚动条移动位置
        $('html, body').animate({
            scrollTop: topOffset - 50
        })
    })
})