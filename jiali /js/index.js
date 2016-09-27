/**
 * Created by a1 on 16/9/13.
 */
$(function(){

 $('.section4 .project ul li').hover(function(){
  $(this).stop().animate({'width':'400px'},500).siblings().stop().animate({'width':'149px'},500);
 },function(){
  $('.section4 .project ul li').stop().animate({'width':'239px'},500);
 })
});