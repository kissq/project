/**
 * Created by a1 on 16/9/7.
 */

~function(){
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
    $('.content>.item9').on('click', function () {
        if($('.item1>input').value==null){
            alert('帐号不能为空')
        }else if($('.item2>input').value==null){
            alert('密码不能为空')
        }else if($('.item3>input').value==null){
            alert('请确认密码是否正确')
        }else if($('.item4>input').value==null){
            alert('请输入正确的姓名')
        }else if($('.content>.item8').value==getCode){
            alert('success');
        }else{
            alert('你的验证码输入有误')
        }

    });
    $('.header>span').on('click',function(){
        history.back('index.html');
    })
}();