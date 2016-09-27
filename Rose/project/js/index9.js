/**
 * Created by a1 on 16/9/7.
 */
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
    var a=document.getElementById('code');
    var str='abcdefghijklmnopqrstuvwxyz'+'abcdefghijklmnopqrstuvwxyz'.toUpperCase()+'1234567890';
    function getCode(){
        var strCode='';
        while(strCode.length<4){
            var n=Math.round(Math.random()*(61-0)+0);
            strCode.indexOf(str[n])===-1?strCode+=str[n]:null;
        }
        a.innerHTML=strCode;
    }
    getCode();
    a.onclick=getCode;
    $('.item3>.item3-7').on('click', function () {
        if($('input').value==null){
            alert('请输入正确姓名')
        }else if($('textarea').value==null){
            alert('请输入内容')
        }else if($('.content>.item8').value==getCode){
            alert('success');
        }else{
            alert('你的验证码输入有误')
        }

    });
}();
