
/**
 * zouzhe homepage js
 * });
 */

!(function(){

	var Home = function () {
		this.init.apply(this, arguments);
	};

	Home.prototype = {

		init:function(){
			var that = this;

			that.initFullPage();
			that.renderConsole();
			that.width = $(window).width();
		},
		initFullPage:function(){
			var that = this;

			var tipsArr = [];
			/*if(that.isChnPage()){
				tipsArr = ['首页','走着用户APP','走着司机APP','走着服务者','加入走着'
				]
			}*/

			$(document).ready(function() {
				$('#fullpage').fullpage({
				    //anchors:['section0','section1','section2', 'section3','section4', 'section5','section6'],
					navigation: true,
					navigationPosition: 'right',
					//navigationTooltips:tipsArr ,
					showActiveTooltips: true,
					css3: true,
					resize:true,
//					touchSensitivity:3,
//					scrollingSpeed:500,


					afterRender: function(){
						var pluginContainer = $(this);

						/*setTimeout(function(){
							$('.section0 .logo').removeClass('l-left');
						},100);*/
						/*setTimeout(function(){
							$('.section0 .theme-wrapper').removeClass('before');
						},150);
						setTimeout(function(){
							$('.section0 .btm-content').removeClass('before');
						},1200);*/
						$('.section0 .theme-wrapper').removeClass('before');
						$('.section0 .apply-section').removeClass('before');

						var colHeight = $('#section0').height()/2;
						console.log($('#section0').height(),colHeight);
						$('#section3').find('.col').css('height',colHeight);
					},

					afterLoad: function(anchorLink, index){
						var loadedSection = $(this);
						console.log(index);
						//using index
						if(index == 1){
							$('.section1 .block1').addClass('before');
							$('.section1 .block2').addClass('before');
							$('.section1 .block3').addClass('before');
						}
						if(index == 2){
							//$('.section1').addClass('enter');
							//$('.section1 .logo').removeClass('l-left');
							$('.section1 .theme-wrapper').removeClass('before');
							$('.section1 .theme-text').removeClass('before');
							$('.section1 .phone-left').removeClass('before');
							setTimeout(function() {
								$('.section1 .block1').removeClass('before');
							},50);
							setTimeout(function(){
								$('.section1 .block2').removeClass('before');
							},300);
							setTimeout(function(){
								$('.section1 .block3').removeClass('before');
							},600);

							$('.section2 .block1').addClass('before');
							$('.section2 .block2').addClass('before');
						}

						if(index == 3){
							$('.section1 .block1').addClass('before');
							$('.section1 .block2').addClass('before');
							$('.section1 .block3').addClass('before');
							/*$('.section2 .slide1 .theme-wrapper').removeClass('before');
							$('.section2 .slide1 .theme-text').removeClass('before');
							$('.slide2').addClass('enter');*/
							$('.section2 .theme-wrapper').removeClass('before');
							$('.section2 .phone-right').removeClass('before');
							setTimeout(function() {
								$('.section2 .block1').removeClass('before');
							},50);
							 setTimeout(function(){
							 $('.section2 .block2').removeClass('before');
							 },300);
						}

						if(index == 4){
							$('.section2 .block1').addClass('before');
							$('.section2 .block2').addClass('before');

						}

						if(index == 6){
							$('.section5 .theme-wrapper').removeClass('before');
						}
						/*if(index == 5){
							$('.section5 .content-item1').removeClass('before');
							setTimeout(function(){
								$('.section5 .content-item2').removeClass('before');
							},300);
							setTimeout(function(){
								$('.section5 .content-item3').removeClass('before');
								$('.section5 .more').removeClass('before');
							},600);
						}*/

					},
					onLeave: function(index, nextIndex, direction){
						var leavingSection = $(this);

						//after leaving section 2
						if(index == 2){
							$('.section1 .logo').addClass('l-left');
							$('.section1 .theme-wrapper').addClass('before');
							$('.section1 .theme-text').addClass('before');
							$('.section1 .phone-left').addClass('before');
							$('.section1 .block1').addClass('before');
							$('.section1 .block2').addClass('before');
							$('.section1 .block3').addClass('before');
						}
						if(index == 3){
							$('.section2 .theme-wrapper').addClass('before');
							$('.section2 .phone-right').addClass('before');
							$('.section2 .block1').addClass('before');
							$('.section2 .block2').addClass('before');
						}

						if(index == 4){
							$('.section3 .t-mobile').addClass('before');
							$('.section3 .block1').addClass('before');
							$('.section3 .block2').addClass('before');
							$('.section3 .block3').addClass('before');
						}

						if(index == 6){
							$('.section5 .theme-wrapper').addClass('before');
						}

					},
					afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
						var loadedSlide = $(this);

						//first slide of the second section
						if(index == 3 && slideIndex == 0){
							$('.slide1 .theme-wrapper').removeClass('before');
							$('.slide1 .theme-text').removeClass('before');
							$('.slide2').addClass('enter');
						}else if(index == 3 && slideIndex == 1){
							$('.slide2 .theme-wrapper').removeClass('before');
							$('.slide2 .theme-text').removeClass('before');
							$('.slide3').addClass('enter');
						}else if(index == 3 && slideIndex == 2){
							$('.slide3 .theme-wrapper').removeClass('before');
							$('.slide3 .theme-text').removeClass('before');
							$('.slide4').addClass('enter');
						}else if(index == 3 && slideIndex == 3){
							$('.slide4 .theme-wrapper').removeClass('before');
							$('.slide4 .theme-text').removeClass('before');
						}
					},
					onSlideLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex){
						var leavingSlide = $(this);

						//leaving the first slide of the 2nd Section to the right
						if(index == 3 && slideIndex == 0 ){
							$('.slide1 .theme-wrapper').addClass('before');
							$('.slide1 .theme-text').addClass('before');
						}else if(index == 3 && slideIndex == 1 ){
							$('.slide2 .theme-wrapper').addClass('before');
							$('.slide2 .theme-text').addClass('before');
						}else if(index == 3 && slideIndex == 2){
							$('.slide3 .theme-wrapper').addClass('before');
							$('.slide3 .theme-text').addClass('before');
						}else if(index == 3 && slideIndex == 3){
							$('.slide4 .theme-wrapper').addClass('before');
							$('.slide4 .theme-text').addClass('before');
						}

					}
				});

				that.bindEvent();
			});
		},
		isChnPage:function(){
			var that = this;

			return !/index_en/.test(location.href);
		},
		bindEvent:function(){
			var that = this;

			$('.switch-wrapper').on('click','.nav_btn',function(){
				var target = $(this);
				console.log(target.index());
				console.log(+target.attr('id'));
				$('.nav_btn').removeClass('cur');
				target.addClass('cur');
				if(target.hasClass('J_home')){
					$.fn.fullpage.moveTo(-5);
				}else if(target.hasClass('J_about')){
					$.fn.fullpage.moveTo(-1);
				}else if(target.hasClass('J_selection')){
					$.fn.fullpage.moveTo(-4);
				}else if(target.hasClass('J_app')){
					$.fn.fullpage.moveTo(-3);
				}else if(target.hasClass('J_coming')){
					$.fn.fullpage.moveTo(-2);
				}else if(target.hasClass('J_join')){
					$.fn.fullpage.moveTo(0);
				}
			});
			$('.apple').on('click',function(){
				window.open('https://itunes.apple.com/us/app/zou-zhe-lu-xing-pin-che-bao/id960133750?l=zh&ls=1&mt=8');
			});
			$('.android').on('click',function(){
				window.open('http://a.app.qq.com/o/simple.jsp?pkgname=com.zzlx.visitor_android');
			});
			$('.h5app').on('click',function(){
				window.open('http://m.zouzhe.com/?pk_campaign=WEBSITE&pk_kwd=www%E7%AB%99%E7%82%B9%E5%BF%AB%E9%80%9F%E4%BD%93%E9%AA%8C%E5%85%A5%E5%8F%A3');
			})
		},
		renderConsole:function(){
			var that = this;
		}
	};

	this.home = new Home();

}).call(this);

$(document).ready(function(){
	var open = 0;
	$('.nav-toggle').on('click',function(){
		if(open == 0){
			//alert(1)
			$(this).find('span').addClass('rotate90');
			$(this).css({left:'70%'});
			$('.switch-wrapper').addClass('slide-toggle');
			$('#mask').css('display','block');
			//console.log($(this).find('span'),$('body'))
			open = 1;
		}else{
			//alert(2)
			$(this).find('span').removeClass('rotate90');
			$(this).css({left:'16px'});
			$('.switch-wrapper').removeClass('slide-toggle');
			$('#mask').css('display','none');
			open = 0;
		}
	});

	$(document).on('click',function(e){
		var target = $(e.target);
		if(!target.closest('span').parent('a').hasClass('nav-toggle')){
			$('.nav-toggle').find('span').removeClass('rotate90');
			$('.switch-wrapper').removeClass('slide-toggle');
			$('.nav-toggle').css({left:'16px'});
			$('#mask').css('display','none');
			open = 0;
		}
	});
	$('#mask').on('click',function(){
		$('.nav-toggle').find('span').removeClass('rotate90');
		$('.switch-wrapper').removeClass('slide-toggle');
		$('.nav-toggle').css({left:'16px'});
		$('#mask').css('display','none');
		open = 0;
	});

	var u = navigator.userAgent, app = navigator.appVersion;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	var ismobile = !!u.match(/AppleWebKit.*Mobile.*/); //是否为移动终端
	if(ismobile == true){
		if(isiOS == true){
			$('.android').hide();
		}else if(isAndroid == true){
			$('.apple').hide();
		}
	}
});