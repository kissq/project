/**
 * Created by a1 on 16/9/7.
 */
/**
 * Created by a1 on 16/9/7.
 */
!function(){
    var num=true;
    $('.header>#sp2').on('click',function(){

        if(num==true){
            num=false;
            $('.list').addClass('animated bounceInLeft').css({display:'block'});
            $('.list').find('li').each(function(index,item){
                $(this).addClass('animated slideInLeft').css({'animation-delay':index/5+'s'})
                    .on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oAnimationEnd animationEnd',function(e){
                        $(this).removeClass('animated slideInLeft');
                    })
            });
            return num;
        }else if(num==false){
            num=true;
            $('.list').css({display:'none'});
            return num;
        }
    });
    $('.item4>span').on('click',function(){
        window.onscroll=null;
        var duration=100;
        var interval=3;
        var target=document.documentElement.scrollTop||document.body.scrollTop;
        var step=(target/duration)*interval;
        var timer=window.setInterval(function(){
            var curTop=document.documentElement.scrollTop||document.body.scrollTop
            if(curTop===0){
                window.clearInterval(timer);
                window.scroll=scroll;
                return;
            }
            curTop-=step;
            document.documentElement.scrollTop=curTop;
            document.body.scrollTop=curTop;
        },interval)
    });
    $('.content>span').on('click',function(){
        location.assign('../../fillary/index2.html');
    });
    $('.list').find('li').on('click',function(){
        $('.list').css({display:'none'});
    });
    $('.item2').on('click',function(){
        location.assign('../../fillary/index4.html');
    });
    $('.item3>.item3-1').on('click',function(){
        location.assign('../../fillary/index10.html');
    });
    $('.item3>.item3-2').on('click',function(){
        location.assign('../../fillary/index10.html');
    });
    $('.item3>.item3-3').on('click',function(){
        location.assign('../../fillary/index10.html');
    });
    $('.item3>.item3-4').on('click',function(){
        location.assign('../../fillary/index10.html');
    });
}();