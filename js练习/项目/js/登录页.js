let zhuce=document.getElementById("mima");
let mima=document.getElementById("shouji");
let m1=document.getElementById("m1")
let m2=document.getElementById("m2")
zhuce.onclick=function(){
    m1.style.display="block";
    m2.style.display="none";
    zhuce.style.color="gray"
    mima.style.color="black"
}
mima.onclick=function(){
    m1.style.display="none";
    m2.style.display="block";
    mima.style.color="gray"
    zhuce.style.color="black"

}
// 链接接口
$(function(){
    $("#lu_1").click(function(){
        $.ajax({
            url:"http://jx.xuzhixiang.top/ap/api/login.php",
            data:{
                username:$("#ji_1").val(),
                password:$("#mima_1").val()
            }, 
            success:function(res){
                console.log(res);
                if(res.code==1){
                    alert("登陆成功")
                    location.href="首页.html"
                }else{
                    alert("用户名或密码错误");
                }
            }
        })
    })
})