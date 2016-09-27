/**
 * Created by a1 on 16/9/7.
 */
~function(){
    $('.header>span').on('click',function(){
        location.assign('../../index.html');
    });
    $('#btn').on('click',function(){
        history.back('index.html');
    });
}();