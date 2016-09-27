/**
 * Created by a1 on 16/9/9.
 */
~function () {
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 3000,//可选选项，自动滑动
        loop:true,
        speed:900,
    });
    window.onload = function(){
        waterFlow("container", "box");
        //waterFlow("container1", "box");
    };
    function waterFlow(parent, chirld){
        var wparent = document.getElementById(parent);//获取父级div, 最外级容器
        var allArr = getAllChirld(wparent,chirld);//获取到所有的class为box的容器div
        var wscreenWidth = document.documentElement.clientWidth;//获取屏幕宽度
        var wchirldWidth = wparent.getElementsByTagName("*");//获取所有的标签
        var num = Math.floor(wscreenWidth/wchirldWidth[0].offsetWidth);//这是一个Math算法, 目的是将小数转变为整数,
        // 从而可以知道每行最多容纳几张图片
        wparent.style.cssText = 'width:'+wchirldWidth[0].offsetWidth*num+'px;margin:0 auto';//固定每行摆放个数 和上下左右边距
        //获得每行的最小高度
        getMinHeightOfCols(allArr, num);
    }
    function getAllChirld(parent,classname){
        //获取所有的标签
        var wchirld = parent.getElementsByTagName("*");
        //创建数组
        var chirldArr = [];
        //遍历wchirld, 将其中className等于classname(传进来的参数)相同的标签放入数组chirldArr中
        for(var i = 0; i<wchirld.length; i++){
            if(wchirld[i].className==classname){
                //因为是位push所以没放进去一个, 都是在数组的最后一个
                chirldArr.push(wchirld[i]);
            }
        }
        //返回该数组
        return chirldArr;
    }
    function getMinHeightOfCols(chirdArr, num){
        //创建数组, 用来盛放每一行的高度
        var onlyOneColsArr = [];
        for(var i = 0; i<chirdArr.length; i++){

            if(i<num){
                //num为传进来的参数, 即为每行放图片的张数, 此步骤的目的是为了将第一行每张图片的高度遍历出来存放如新数组
                onlyOneColsArr[i]=chirdArr[i].offsetHeight;
            } else {
                //当大于每行存放的图片个数时进入该方法, Math.min.apply这个方法是为了得到数组中的最小值
                var minHeightOfCols = Math.min.apply(null, onlyOneColsArr);
                //此方法的目的是为了得到最小高度图片的下表, 也就是在每行的第几张, 具体方法见下面
                var minHeightOfindex = getminIndex(onlyOneColsArr, minHeightOfCols);
                //定义布局方式为绝对布局
                chirdArr[i].style.position = "absolute";
                //得到下一行图片应放的高度
                chirdArr[i].style.top = minHeightOfCols + "px";
                //得到下一行图片应放于那个位置
                chirdArr[i].style.left = chirdArr[minHeightOfindex].offsetLeft + "px";
                //将两张图片高度相加得到一个新的高度用来进行下一次的计算
                onlyOneColsArr[minHeightOfindex] += chirdArr[i].offsetHeight;
            }
        }

    }
//此方法是为了进行最小高度下标的确定
    function getminIndex(onlyOneColsArr, min){
        //遍历传进来的高度数组
        for(var i in onlyOneColsArr){
            //如果高度等于最小高度, 返回i即为该图片下标
            if(onlyOneColsArr[i] == min){
                return i;
            }
        }
    }

    function move(a){
        $('.Petal>img').eq(a).css({zIndex:1}).siblings().css({zIndex:0});
        $('.Petal>img').eq(a).animate({opacity:1},700,function(){
            $(this).siblings().css({opacity:0});
        });
    }
    window.setInterval(change1,2000);
    var step=0;
    function change1(){
        if(step===3){
            step=-1;
        }
        step++;
        move(step);
    }


    $('#news').find('.news-21').on('mouseenter',function(e){
        $(this).find('.news-21-p').addClass('animated fadeInUp').css({opacity:1}).on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {
            $(this).removeClass("animated fadeInUp");
        });
    }).on('mouseleave',function(){
        $(this).find('.news-21-p').addClass('animated fadeOutDown').css({opacity:0}).on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {
            $(this).removeClass("animated fadeOutDown");
        });
    });

    $('.header').find('li').on('click',function(){
       $(this).addClass('active').siblings().removeClass('active');
        if($(this).index()==0){
            $('#home').css({display:'block'}).siblings().css({display:'none'});
        }
        if($(this).index()==1){
            $('#about').css({display:'block'}).siblings().css({display:'none'});
        }
        if($(this).index()==2){
            $('#Scenery').css({display:'block'}).siblings().css({display:'none'});
    }
        if($(this).index()==3){
            $('#Botany').css({display:'block'}).siblings().css({display:'none'});
        }
        if($(this).index()==4){
            $('#news').css({display:'block'}).siblings().css({display:'none'});
        }
        if($(this).index()==5){
            $('#contact').css({display:'block'}).siblings().css({display:'none'});
        }
    });
    $('.footer').find('li').on('click',function(){
        if($(this).index()==0){
            $('#home').css({display:'block'}).siblings().css({display:'none'});
        }
        if($(this).index()==1){
            $('#about').css({display:'block'}).siblings().css({display:'none'});
        }
        if($(this).index()==2){
            $('#contact').css({display:'block'}).siblings().css({display:'none'});
        }
        if($(this).index()==3){
            $('#Scenery').css({display:'block'}).siblings().css({display:'none'});
        }
        if($(this).index()==4){
            $('#Botany').css({display:'block'}).siblings().css({display:'none'});
        }
        if($(this).index()==5){
            $('#news').css({display:'block'}).siblings().css({display:'none'});
        }
    });

    $('#home').find('.item4-p').on('click',function(){
        if($(this).index()==0) {
            $('.Shanghai').css({display:'block'}).siblings().css({display:'none'})
        }
        if($(this).index()==1){
            $('.ADA').css({display:'block'}).siblings().css({display:'none'})
        }
        if($(this).index()==2){
            $('.TOP10').css({display:'block'}).siblings().css({display:'none'})
        }
    });
    $('#news').find(".item4-p").on('click',function(){
        if($(this).index()==0) {
            $('.Shanghai').css({display:'block'}).siblings().css({display:'none'})
        }
        if($(this).index()==1){
            $('.ADA').css({display:'block'}).siblings().css({display:'none'})
        }
        if($(this).index()==2){
            $('.TOP10').css({display:'block'}).siblings().css({display:'none'})
        }
    });
    $('.news-open').find('.li1').on('click',function(){
        $('.news-open').find('.scanning').css({display:'block'});
        $('.news-open').find('.scanning-block').css({display:'block'});
    });
    $('.news-open').find('.scanning-block').on('click',function(){
        $('.news-open').find('.scanning').css({display:'none'});
        $('.news-open').find('.scanning-block').css({display:'none'});
    });
    $('.news-open>.scanning').find('.p1').on('click',function(){
        $('.news-open').find('.scanning').css({display:'none'});
        $('.news-open').find('.scanning-block').css({display:'none'});
    });
    $('.news-open').find('.li2').on('click',function(){
        window.open("http://v.t.qq.com/share/share.php?title=http%3A%2F%2Fwww.fkyuanlin13.icoc.me%2Fnd.jsp%3Fid%3D8%26_sc%3D2&url=http%3A%2F%2Fwww.fkyuanlin13.icoc.me%2Fnd.jsp%3Fid%3D8%26_sc%3D2&pic=http://10246911.s21i-10.faiusr.com/2/ABUIABACGAAgqZP5uwUo3434_QQw7AQ46wI.jpg")})
    $('.news-open').find('.li3').on('click',function(){
        window.open("http://service.weibo.com/share/share.php?title=%E3%80%902016%E4%B8%8A%E6%B5%B7%E7%AC%AC18%E5%B1%8A%E5%9B%BD%E9%99%85%E5%9B%AD%E6%9E%97%E6%99%AF%E8%A7%82%E5%8F%8A%E5%A1%91%E6%9C%A8%E5%88%B6%E5%93%81%E5%B1%95+-+%E7%BD%91%E9%A1%B5%E6%A0%B7%E6%9D%BF-%E5%9B%AD%E6%9E%97%E8%AE%BE%E8%AE%A1%E3%80%91http%3A%2F%2Fwww.fkyuanlin13.icoc.me%2Fnd.jsp%3Fid%3D8%26_sc%3D2&url=http%3A%2F%2Fwww.fkyuanlin13.icoc.me%2Fnd.jsp%3Fid%3D8%26_sc%3D2&pic=http://10246911.s21i-10.faiusr.com/2/ABUIABACGAAgqZP5uwUo3434_QQw7AQ46wI.jpg")
    });
    $('.news-open').find('.li4').on('click',function(){
        window.open("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary=http%3A%2F%2Fwww.fkyuanlin13.icoc.me%2Fnd.jsp%3Fid%3D8%26_sc%3D2&url=http%3A%2F%2Fwww.fkyuanlin13.icoc.me%2Fnd.jsp%3Fid%3D8%26_sc%3D2&pics=http://10246911.s21i-10.faiusr.com/2/ABUIABACGAAgqZP5uwUo3434_QQw7AQ46wI.jpg&title=%E3%80%902016%E4%B8%8A%E6%B5%B7%E7%AC%AC18%E5%B1%8A%E5%9B%BD%E9%99%85%E5%9B%AD%E6%9E%97%E6%99%AF%E8%A7%82%E5%8F%8A%E5%A1%91%E6%9C%A8%E5%88%B6%E5%93%81%E5%B1%95+-+%E7%BD%91%E9%A1%B5%E6%A0%B7%E6%9D%BF-%E5%9B%AD%E6%9E%97%E8%AE%BE%E8%AE%A1%E3%80%91")
    });
    $('.news-open').find('.li5').on('click',function(){
        window.open("http://www.kaixin001.com/rest/records.php?content=%E3%80%902016%E4%B8%8A%E6%B5%B7%E7%AC%AC18%E5%B1%8A%E5%9B%BD%E9%99%85%E5%9B%AD%E6%9E%97%E6%99%AF%E8%A7%82%E5%8F%8A%E5%A1%91%E6%9C%A8%E5%88%B6%E5%93%81%E5%B1%95+-+%E7%BD%91%E9%A1%B5%E6%A0%B7%E6%9D%BF-%E5%9B%AD%E6%9E%97%E8%AE%BE%E8%AE%A1%E3%80%91http%3A%2F%2Fwww.fkyuanlin13.icoc.me%2Fnd.jsp%3Fid%3D8%26_sc%3D2&style=11")
    });
    $('.news-open').find('.li6').on('click', function () {
        window.open("http://widget.renren.com/dialog/share?resourceUrl=http%3A%2F%2Fwww.fkyuanlin13.icoc.me%2Fnd.jsp%3Fid%3D8%26_sc%3D2&description=http%3A%2F%2Fwww.fkyuanlin13.icoc.me%2Fnd.jsp%3Fid%3D8%26_sc%3D2&title=%E3%80%902016%E4%B8%8A%E6%B5%B7%E7%AC%AC18%E5%B1%8A%E5%9B%BD%E9%99%85%E5%9B%AD%E6%9E%97%E6%99%AF%E8%A7%82%E5%8F%8A%E5%A1%91%E6%9C%A8%E5%88%B6%E5%93%81%E5%B1%95+-+%E7%BD%91%E9%A1%B5%E6%A0%B7%E6%9D%BF-%E5%9B%AD%E6%9E%97%E8%AE%BE%E8%AE%A1%E3%80%91&pic=http://10246911.s21i-10.faiusr.com/2/ABUIABACGAAgqZP5uwUo3434_QQw7AQ46wI.jpg")
    });
    $('.news-open').find('.li7').on('click', function () {
        window.open("http://shuo.douban.com/!service/share?name=%E3%80%902016%E4%B8%8A%E6%B5%B7%E7%AC%AC18%E5%B1%8A%E5%9B%BD%E9%99%85%E5%9B%AD%E6%9E%97%E6%99%AF%E8%A7%82%E5%8F%8A%E5%A1%91%E6%9C%A8%E5%88%B6%E5%93%81%E5%B1%95+-+%E7%BD%91%E9%A1%B5%E6%A0%B7%E6%9D%BF-%E5%9B%AD%E6%9E%97%E8%AE%BE%E8%AE%A1%E3%80%91http%3A%2F%2Fwww.fkyuanlin13.icoc.me%2Fnd.jsp%3Fid%3D8%26_sc%3D2&text=http%3A%2F%2Fwww.fkyuanlin13.icoc.me%2Fnd.jsp%3Fid%3D8%26_sc%3D2&image=http://10246911.s21i-10.faiusr.com/2/ABUIABACGAAgqZP5uwUo3434_QQw7AQ46wI.jpg")
    });
    $('.news-open').find('.li8').on('click', function () {
        window.open("http://t.163.com/article/user/checkLogin.do?info=%E3%80%902016%E4%B8%8A%E6%B5%B7%E7%AC%AC18%E5%B1%8A%E5%9B%BD%E9%99%85%E5%9B%AD%E6%9E%97%E6%99%AF%E8%A7%82%E5%8F%8A%E5%A1%91%E6%9C%A8%E5%88%B6%E5%93%81%E5%B1%95+-+%E7%BD%91%E9%A1%B5%E6%A0%B7%E6%9D%BF-%E5%9B%AD%E6%9E%97%E8%AE%BE%E8%AE%A1%E3%80%91http%3A%2F%2Fwww.fkyuanlin13.icoc.me%2Fnd.jsp%3Fid%3D8%26_sc%3D2&images=http://10246911.s21i-10.faiusr.com/2/ABUIABACGAAgqZP5uwUo3434_QQw7AQ46wI.jpg&togImg=true")
    });
    $('.news-open').find('.li9').on('click', function () {
        window.open("http://tieba.baidu.com/i/app/open_share_api?comment=&pic=http://10246911.s21i-10.faiusr.com/2/ABUIABACGAAgqZP5uwUo3434_QQw7AQ46wI.jpg&url=http%3A%2F%2Fwww.fkyuanlin13.icoc.me%2Fnd.jsp%3Fid%3D8%26_sc%3D2&title=%E3%80%902016%E4%B8%8A%E6%B5%B7%E7%AC%AC18%E5%B1%8A%E5%9B%BD%E9%99%85%E5%9B%AD%E6%9E%97%E6%99%AF%E8%A7%82%E5%8F%8A%E5%A1%91%E6%9C%A8%E5%88%B6%E5%93%81%E5%B1%95+-+%E7%BD%91%E9%A1%B5%E6%A0%B7%E6%9D%BF-%E5%9B%AD%E6%9E%97%E8%AE%BE%E8%AE%A1%E3%80%91http%3A%2F%2Fwww.fkyuanlin13.icoc.me%2Fnd.jsp%3Fid%3D8%26_sc%3D2")
    })


}();
