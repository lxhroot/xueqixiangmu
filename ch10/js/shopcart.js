/**
 * 购物车交互js文件
 */
$(function() {
    //1.全选
    /*
    1.表头全选框 获取表头全选框选中状态
    2.表格中的单选框状态需要一致
    3.结算中的全选状态一致
     */
    //定义3个变量
    var $theadInput = $('table thead input[type=checkbox]');
    var $bodyInput = $('table tbody input[type=checkbox]');
    var $allPriceInput = $('.totalPrice input[type=checkbox]');


    $theadInput.change(function() {
            //获取选中状态
            var statc = $(this).prop('checked');

            //让表格中的选择框状态保持一致,结算中的选择框 状态保持一致
            $bodyInput.prop('checked', statc);
            $allPriceInput.prop('checked', statc);

            //调用计算总价元素
            calcTotalPrice();

        })
        //结算中的选择框，也需要有相同的选择功能
    $allPriceInput.change(function() {
        //获取选中状态
        var statc = $(this).prop('checked');

        //上面的全选 和 表格中的input需要状态一致
        $bodyInput.prop('checked', statc);
        $theadInput.prop('checked', statc);
        //调用计算总价元素
        calcTotalPrice();
    })


    //表单中的选中状态 反过来影响全选
    $bodyInput.change(function() {
        //定一个标杆
        var flag = true;
        //总价
        // var totalPrice = 0;
        //循环表格中的所有选择框中的选中状态
        $bodyInput.each(function(i, input) {
                if (!$(input).prop('checked')) { //只要有一个选择框没有选中 那么状态就为false
                    flag = false;
                }
                //  else {
                //     totalPrice += parseFloat($(this).closest('tr').find('.subprice').text());
                // }
            })
            //状态用于全选框
        $theadInput.prop('checked', flag);
        $allPriceInput.prop('checked', flag);
        //调用计算总价元素
        calcTotalPrice();

    })

    //数量的加减

    //1.加
    $('.add').on('click', function() {

            //下一个input节点
            var $nextInput = $(this).next()
                //获取输入框的值
            var oldVal = parseInt($nextInput.val()); //获取当前元素下一个兄弟元素的数组
            //自增
            oldVal++;
            //重新赋值于此输入框
            $nextInput.val(oldVal)

            //小计
            subTotalPrice(oldVal, $(this));
            // var subtotal = oldVal * parseFloat($(this).closest('tr').find('.price').text());
            // //定义新变量用于将输入框的值乘（解析当前元素下的祖先元素tr并找到.price类的文本且保留2位小数点)
            // $(this).closest('tr').find('.suprice').text(subtotal.toFixed(2));
            // //把小结结果放入dom对应位置

            //调用计算总价元素
            calcTotalPrice();

        })
        //2.减
    $('.reduce').on('click', function() {
            //上一个input节点

            var $prevInput = $(this).prev();
            //获取输入框的值

            var oldVal = parseInt($prevInput.val()); //获取当前元素下一个兄弟元素的数组

            //自减
            oldVal--;
            oldVal = oldVal < 1 ? 1 : oldVal; //如果小于1 那么就等于1 反之等于自己

            //重新赋值于此输入框
            $prevInput.val(oldVal)

            //小计
            subTotalPrice(oldVal, $(this));

            //调用计算总价元素
            calcTotalPrice();

        })
        //抽取一个小计的函数
    function subTotalPrice(val, dom) {
        var subtotal = val * parseFloat(dom.closest('tr').find('.price').text());

        dom.closest('tr').find('.subprice').text(subtotal.toFixed(2));
        //把小结结果放入dom对应位置
    }
    //删除
    $('.del').click(function() {
            //删除整行
            $(this).closest('tr').remove();
            calcGoodsCount();

        })
        //计算总价
    function calcTotalPrice() {

        var count = 0;
        //定义变量 保持原价
        var totalPrice = 0;
        $('table tbody input[type=checkbox]').each(function(i, input) {
            //如果被选中则计算总价
            if ($(input).prop('checked')) {
                //自加
                count++;
                //累加价格
                totalPrice += parseFloat($(this).closest('tr').find('.subprice').text());
            }
        })
        $('.total').text(totalPrice.toFixed(2));
        $('.count').text(count);
    }
    //全部商品
    function calcGoodsCount() {
        $('.goodsCount').text($('table tbody tr').length)
    }
    calcGoodsCount(); //进入界面就刷新

    //删除选中商品
    $('.deleteChecked').on('click', function() {
        //循环单选框 如果选中 删除自己
        $bodyInput.each(function(i, input) {
                if ($(this).prop('checked')) {
                    $(this).closest('tr').remove();
                }
            })
            //计算总价
        calcTotalPrice();
        //计算商品数量
        calcGoodsCount();
    })

})