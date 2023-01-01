$(function() {
    $('#btn').click(function() {
        //打开模态框
        $('.model').fadeIn();
        //关闭模态框
        $('#close').click(function() {
            $('.model').fadeOut();
        })
    })
})