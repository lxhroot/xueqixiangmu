/*
 *封装星级评分函数*
 */
$(function() {
    //创建星星评分评分的函数，加载于窗口上
    window.createStarRate = function(score) {
        // $.fn.createStarRate = function(score) {


        //满星(full)
        var full = '<span class="full iconfont icon-star-full"></span>';
        //半星(half)
        var half = '<span class="half iconfont icon-star-half"></span>';
        //空星(off)
        var off = '<span class="off iconfont icon-star"></span>';

        //样式
        // $(full).css({
        //     fontSsize: '50px',
        //     color: 'gold'
        // })
        // $(half).css({
        //     fontSsize: '50px',
        //     color: 'gold'
        // })
        // $(off).css({
        //     fontSsize: '50px'
        // })

        //计算分数
        var calcScore = Math.floor(score * 2) / 2;
        console.log(calcScore);
        //计算满星
        var fullConut = Math.floor(calcScore);
        //计算半星
        var isHasHalf = 0;
        if (calcScore % 1 !== 0) {
            isHasHalf = 1;
        }
        //计算空星
        var offCount = 5 - fullConut - isHasHalf;

        //拼接结果
        var rst = '';
        //拼接满星
        for (var i = 0; i < fullConut; i++) {
            rst += full;
        }
        //拼接半星
        if (isHasHalf === 1) {
            rst += half;
        }
        //拼接空星
        for (var k = 0; k < offCount; k++) {
            rst += off;
        }

        //返回
        return rst;
        // $(this).html(rst);


    }

})