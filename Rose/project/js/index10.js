/**
 * Created by a1 on 16/9/8.
 */
$(function () {
    var mySwiper = new Swiper('.swiper-container', {
        onSlideChangeEnd: function (swiper) {
            var j=mySwiper.activeIndex;
            $('.maple-tab li, .maple-tab2 li').removeClass('active').eq(j).addClass('active');
        }
    });
    /*列表切换*/
    $('.maple-tab li, .maple-tab2 li').on('click', function (e) {
        e.preventDefault();
        //得到当前索引
        var i=$(this).index();
        $('.maple-tab li, .maple-tab2 li').removeClass('active').eq(i).addClass('active');
        mySwiper.slideTo(i,1000,false);
    });
    $('.header>.h1').on('click',function(){
        location.assign('../../index.html');
    });
    $('.header>.h2').on('click',function(){
        location.assign('../../fillary/index2.html');
    });
    $('.header>.h4').on('click',function(){
      history.back();
    });
    var num=true;
    $('.header>.h3').on('click',function(){
        if(num==true){
            num=false;
            $('.header>.h4').addClass('animated slideInDown').css({display:'block'});
            $('.header>.h5').addClass('animated slideInDown').css({display:'block'});
            return num;
        }else if(num==false){
            num=true;
            $('.header>.h4').css({display:'none'});
            $('.header>.h5').css({display:'none'});
            return num;
        }
    });
    window.onscroll=function(){
        var h=$(window).scrollTop();
        var h2=$('.header').height();
        var ch=$('.item1').height()-h2;
        $('.header').css({backgroundColor:"rgba(255,255,255,"+h/ch+")"});
    }
});