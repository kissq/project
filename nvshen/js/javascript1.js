/**
 * Created by a1 on 16/8/8.
 */
$(function(){
    loadImg();
    function loadImg(){
        var Imgs=$('img');
        var pxLoader=new PxLoader();
        Imgs.each(function(index,item){
            pxLoader.addImage(item.src);
        });
        pxLoader.addProgressListener(function(e){
            var pro1=e.completedCount/ e.totalCount
            pro=pro1.toFixed(2)*100;
            $('#loading p').html('正在加载：'+pro1*100+'%');
        });
        pxLoader.addCompletionListener(function(e){
            $('#loading').animateCss('fadeOut',function(){
                this.hide();
            },0.5);
            $.changePage('#loading','#box',0.5,function(){
                $('#loading').hide();
            })

        });
        pxLoader.start();
    }
    var swiper=new Swiper(".main-swiper",{
        direction : 'vertical',
        noSwiping : true,
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
        },
        onSlideChangeEnd: function(swiper){

        }

    });
    //第一页转到第二页
    $.clickChangePage('.s1 .p1 .btn','.s1 .p1','.s1 .p2',0.5,function(){
        var num=0;
        var timer=setInterval(function(){
            num++;
            $('.s1 .p2 .sp1 span').html('00:0'+num);
            if(num==5){
                $.changePage('.s1 .p2','.s1 .p3',0.5,function(){
                    swiperAnimate(swiper)
                });
                clearInterval(timer);
                timer=null;
            }
        },1000)
    });
    //第二页转到第三页
    $.clickChangePage('.s1 .p2 .m3','.s1 .p2','.s1 .p3',0.5,function(){
        swiperAnimate(swiper)
    });
    var carSwiper = new Swiper('.car', {
        loop:true,
        grabCursor : true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'

    });
    //第三页转到第四页
    $.clickChangePage('.s1 .p3 .m4','.s1 .p3','.s1 .p4',0.5,function(){
        $('.s1 .p4 .sp1').addClass('animated fadeInUp').css({opscity:1});
        $('.s1 .p4 .sp2 .m2').addClass('s1p4m2Anim').one('click',function(){
            $('.s1 .p4 .sp2 .m2').removeClass('s1p4m2Anim').css({visibility:'visible'}).animateCss('fadeOut',function(){
                this.hide();
            },1);
            carRun($('.s1 .p4 .road'));

        });
        function carRun(road){
            var s= 0;
            var timer=setInterval(function(){
                s-=5;

                if(s<(road.height()-$('#box').height()-10)*-1&&!$('.s1 .p4 .m1')[0].isLight){
                    $('.s1 .p4 .sp1')[0].isLight=true;
                    $('.s1 .p4 .sp4').addClass('s1p4m4Anim');
                    $('.s1 .p4 .sp5').addClass('s1p4m3anim');
                    $('.s1 .p4 .sp6').css({visibility:'hidden'});
                    clearInterval(timer);
                    timer=null;
                }
                if(s<=$('#box').height()*-1&&!$('.s1 .p4 .m1')[0].isLight){
                   $('.s1 .p4 .m2')[0].isLight=true;
                    $('.s1 .p4 .sp3').addClass('s1p4m3anim');
                    $('.s1 .p4 .sp6').addClass('s1p4m3anim');

                }
                road.css({bottom:s+'px'});
            },10)
        }

   });
    //第四页到第五页
    $.clickChangePage('.s1 .p4 .sp5','.s1 .p4','.s1 .p5',0.5,function(){
        $('.s1').removeClass('swiper-no-swiping');
        swiperAnimate(swiper);
        $('.s1 .p5 span').addClass('animated fadeInUp').css({opacity:1});
        $('.s1 .p5 .sp3').addClass('back animated  fadeInUp');
        $('.s1 .p5 .sp4').addClass('move1');

    });
    //slide1-->slide2

   var time1=window.setInterval(function(){
       if($('.s2').attr('className').indexOf('swiper-slide-active')!==-1){
           window.clearInterval(time1);
           time1=null;
           carRuning($('.s2 .p21 .road'));
       }
   },10);
    function carRuning(road){
        var s=0;
        var timer=setInterval(function(){
            s-=5;
            if(s<(road.height()-$('#box').height())*-1){
                $('.s2 .p21 .sp4').addClass('animated fadeInRight').css({opacity:1});
                $('.s2 .p21 .sp5').addClass('animated fadeInUp').css({opacity:1});
                $('.s2 .p21 .sp6').addClass('animated fadeInUp').css({opacity:1});
                $('.s2 .p21 .sp3').addClass('s2move1');
                clearInterval(timer);
                timer=null;
            }
            road.css({bottom:s+'px'});
        },10)
    };
    $('.s2 .p21 .sp6').on('click', function(){
        $('.s2 .p21 .sp2').animateCss('flash',function(){
            $.changePage('.s2 .p21','.s2 .p22',1,function(){
                swiperAnimate(swiper);
                $('.s2 .p22 .sp2').addClass('back1 animated fadeInUp').css({opacity:1});
                $('.s2 .p22 .sp3').animateCss('fadeInUp',function(){
                    $('.s2 .p22 .sp3').css({opacity:1});
                },1,.3);
                $('.s2 .p22 .sp4').animateCss('fadeInUp',function(){
                    $('.s2 .p22 .sp4').css({opacity:1});
                },1,.6);
                $('.s2 .p22 .sp5').addClass('back2');
                $('.s2 .p22 .sp6').addClass('back3');
                $('.s2').removeClass('swiper-no-swiping');
            })
        },1,0)
    });
    var time2=window.setInterval(function(){
        if($('.s3').attr('className').indexOf('swiper-slide-active')!==-1){
            window.clearInterval(time2);
            time2=null;
            carRunings($('.s3 .p31 .road'));
        }
    },10);
    function carRunings(road){
        var s=0;
        var timer=setInterval(function(){
            s-=5;
            if(s<=-3000){
                $('.s3 .p31 .sp3').addClass('animated fadeInUp').css({opacity:1});
                $('.s3 .p31 .sp4').addClass('animated fadeInUp').css({opacity:1}).on("click",function(){
                    $.changePage('.s3 .p31','.s3 .p32',.5,function(){
                        $('.s3 .p32 .sp1').addClass('back1 animated fadeInUp').css({opacity:1});
                        $('.s3 .p32 .sp2').animateCss('fadeInUp',function(){
                            $('.s3 .p32 .sp2').css({opacity:1});
                        },1,.3);
                        $('.s3 .p32 .sp3').animateCss('fadeInUp',function(){
                            $('.s3 .p32 .sp3').css({opacity:1});
                        },1,.3);
                        $('.s3 .p32 .sp4').addClass('back2 animated fadeInUp');
                        $('.s3').removeClass('swiper-no-swiping');
                    })
                });
            }
            if((s<(road.height()-$('#box').height())*-1)){
                clearInterval(timer);
                timer=null;
            }

            road.css({bottom:s+'px'});
        },10)
    };
    var time3=window.setInterval(function(){
        if($('.s4').attr('className').indexOf('swiper-slide-active')!==-1){
            window.clearInterval(time3);
            time3=null;
            $('.s4 .p41 span').addClass('animated fadeInUp').css({opacity:1});
            $('.s4 .p41 .sp1').addClass('back4');
            $('.s4 .p41 .sp4').addClass('back2');
        }
    },10);
    var time4=window.setInterval(function(){
        if($('.s5').attr('className').indexOf('swiper-slide-active')!==-1){
            window.clearInterval(time4);
            time4=null;
            carRunings1($('.s5 .p51 .road'));
        }
    },10);
    function carRunings1(road){
        var s=0;
        var timer=setInterval(function(){
            s-=5;
            if((s<(road.height()-$('#box').height())*-1)){
                $('.s5 .p51 .sp3').addClass('s2move1');
                $('.s5 .p51 .sp4').animateCss('fadeInUp',function(){
                    $('.s5 .p51 .sp4').css({opacity:1});
                },1,.3);
                $('.s5 .p51 .sp5').animateCss('fadeInUp',function(){
                    $('.s5 .p51 .sp5').css({opacity:1});
                },1,.6);
                $('.s5 .p51 .sp5').on('click',function(){
                    $.changePage('.s5 .p51','.s5 .p52',.5,function(){
                        $('.s5 .p52 .sp1').addClass('back5 animated fadeInUp').css({opacity:1});
                        $('.s5 .p52 .sp2').animateCss('fadeInUp',function(){
                            $('.s5 .p52 .sp2').css({opacity:1});
                        },1,.3);
                        $('.s5 .p52 .sp3').animateCss('fadeInUp',function(){
                            $('.s5 .p52 .sp3').css({opacity:1});
                        },1,.6)
                        $('.s5 .p52 .sp4').addClass('back2 animated fadeInUp').css({opacity:1});
                        $('.s5').removeClass('swiper-no-swiping');
                    })
                })
                clearInterval(timer);
                timer=null;
            }

            road.css({bottom:s+'px'});
        },10)
    };
    var time5=window.setInterval(function(){
        if($('.s6').attr('className').indexOf('swiper-slide-active')!==-1){
            window.clearInterval(time5);
            time5=null;
            carRunings2($('.s6 .p61 .road'));
        }
    },10);
    function carRunings2(road){
        var s=0;
        var timer=setInterval(function(){
            s-=5;
            if(s<-1000){
                $('.s6 .p61 .sp3').addClass('animated fadeInUp').css({opacity:1,visibility:'visible'});
            }
            if(s<-2000){
                $('.s6 .p61 .sp3').css({opacity:0,visibility:'hidden'});
                $('.s6 .p61 .sp4').addClass('animated fadeInUp').css({opacity:1,visibility:'visible'});
            }
            if(s<-4000){
                $('.s6 .p61 .sp4').css({opacity:0,visibility:'hidden'});
                $('.s6 .p61 .sp5').css({opacity:1});
                $('.s6 .p61 .sp6').addClass('s2move1');
                $('.s6 .p61 .sp2').addClass('back3');
                $('.s6 .p61 .sp7').css({opacity:1});
                $('.s6 .p61 .sp8').addClass('s2move1');
                $('.s6 .p61 .sp9').addClass('animated fadeInUp').css({opacity:1});
                $('.s6 .p61 .sp10').addClass('animated fadeInUp').css({opacity:1});
            }
            if((s<(road.height()-$('#box').height())*-1)){
                clearInterval(timer);
                timer=null;
                }


            road.css({bottom:s+'px'});
        },10)
    };
});
