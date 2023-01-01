// 购物车功能js
$(function() {
    // 把3个类型input分别获取

    var $theadInput = $('thead input[type=checkbox]');
    // 表头全选框
    var $tbodyInput = $('tbody input[type=checkbox]');
    // 表格中的每一行选择框
    var $totalPriceInput = $('.totalPrice input[type=checkbox]');
    // 计算总价的全选框
    // 全选
    // 1.表头中的全选按钮 绑定点击事件 点击时获取选中状态(true/flase)
    // 2.表格中每一行的数据的input选中框赋值为表头的选中状态(true/flase)
    // 3.给计算总价的全选框，也赋值为表头的选中状态(true/flase)

    // 表头全选
    $theadInput.change(function() {
        var checkState = $(this).prop('checked')
            // 获取全选框的选中状态

        $tbodyInput.prop('checked', checkState)
            // 把状态给表格中的选择框

        $totalPriceInput.prop('checked', checkState)
            // 把状态给计算总价中的全选框

        allTotal(); //总计
    });

    // 计算总价格的全选
    // 1.给计算总价格的全选按钮绑定点击事件，获取选择状态
    // 2.把状态给表头的全选
    // 3.把状态给表格中的选择框
    $totalPriceInput.change(function() {
        var checkState = $(this).prop('checked');
        // 获取计算总价中全选状态

        $theadInput.prop('checked', checkState);
        // 赋值给表头的全选框

        $tbodyInput.prop('checked', checkState);
        // 赋值给表格的全选框

        allTotal(); //总计

    })

    // 表格中的全选框 反过来影响两个全选框
    // 1.给表格中的选择框绑定点击事件
    // 2.定一个标杆 flag = true；
    // 3.循环表格在的选择框
    // 4.获取每一个选择框的选中状态
    // 判断：如果有一个是false 那么就不是全选 flag= flase
    // 5.把flag的赋值给两个全选框（因为flag就是对应选中状态） 

    $tbodyInput.change(function() { //给表格总单选框绑事件
            var flag = true;
            $tbodyInput.each(function(index, input) { //循环表格input 
                var checkState = $(this).prop('checked') //获取选中状态
                if (checkState === false) { //如果有一个等于false
                    flag = false; //标杆变为false(全选的状态变为false)
                }
            })
            $theadInput.prop('checked', flag) //把状态赋值给头部全选框

            $totalPriceInput.prop('checked', flag); //把状态赋值给计算价格全选框

            allTotal(); //总计
        })
        /* 加法*/

    //1.获取:+按钮，绑定事件
    //2.点击时，获取后面输入框的值
    //3.输入框的值自增
    //4.把自增的值，重新赋值给后面的输入框
    $('.add').click(function() { //给+号绑定点击事件
        var count = parseInt($(this).next().val()); //取后方输入框的值
        count++; //增加
        $(this).next().val(count); //把增加后的值赋值给后方的输入框

        //小计
        subTotal($(this), count);
    })

    /* 减法*/

    //1.获取:-按钮，绑定事件
    //2.点击时，获取后面输入框的值
    //3.值自减，边界判断，如果小于1，那么等于1，否则等于自己
    //4.把自减的值，重新赋值给后面的输入框
    $('.reduce').click(function() { //给-号绑定点击事件
        var count = parseInt($(this).prev().val()); //取后方输入框的值
        count--; //减少
        count = count < 1 ? 1 : count //如果小于1 那么就等于1 反之等于自己
        $(this).prev().val(count); //把减少后的值赋值给后方的输入框

        //小计
        subTotal($(this), count);

        allTotal(); //总计
    })

    /*封装一个小计函数
    点击 + / - 的时候 需要调用小计功能
    */
    function subTotal(dom, count) {

        var singlePrice = parseFloat(dom.closest('tr').find('.price').text()); //找到单价

        var subTotalPrice = singlePrice * count; //单价 * 数量 = 小计

        dom.closest('tr').find('.subprice').text(subTotalPrice.toFixed(2)) //把小计的结果渲染页面保留2位小数

        allTotal(); //总计

    }
    /* 
    总计功能：(1.头部全选 2.计算总价全选 3.表格的选择框 4.+/- ‘删除’
         5.六个位置调用总计)
    1.获取所有表格框的选中状态，循环，判断
    2.如果选中，那么就要累加这一行小计
    3.定义两个变量用于保存总价与已选商品数量
    */
    function allTotal() {
        var allPrice = 0; //定义一个变量 用于保存总价
        var selectedCount = 0; //定义一个变量 用于保存已选商品数量



        $('tbody input[type=checkbox]').each(function() { //获取表格中的选择框
                var checkState = $(this).prop('checked'); //获取选中状态
                if (checkState) { //如果是true
                    allPrice += parseFloat($(this).closest('tr').find('subprice').text()); //累加到这一行的小计
                    selectedCount++;
                }

            })
            //渲染
        $('.total').text(allPrice.toFixed(2)); //渲染总价

        $('.count').text(selectedCount); //渲染数量 

    }
    /*
     关于下面的删除功能：模拟，非真正的逻辑
     */
    $('.del').click(function() {
            $(this).closest('tr').remove() //干掉自己
            getGoodsCount(); //重新计算商品数量
            allTotal(); //计算总价
        })
        //删除选中
    $('.deleteChecked').click(function() {
        $('tbody input[type=checkbox]').each(function() { //获取表格中的选择框
            var checkState = $(this).prop('checked'); //获取选中状态
            if (checkState) { //如果是true
                $(this).closest('tr').remove() //干掉自己

            }

        })
        allTotal(); //计算总价
        getGoodsCount(); //重新计算商品数量
    })

    //封装一个获取全部商品的函数
    function getGoodsCount() { //获取数量

        var goodsCount = $('table tbody tr').length;
        //渲染
        $('.goodsCount').text(goodsCount);
    }

    getGoodsCount(); //页面加载调用一次


})