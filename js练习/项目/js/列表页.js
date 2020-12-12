let la=document.getElementById("la");
let shou=document.getElementById("shou");
let lg=document.querySelectorAll(".lg");
console.log(lg)
la.onclick=function(){
    for(var i=0;i<lg.length;i++){
        lg[i].style.display="block"
        la.style.display="none"
    }
}
shou.onclick=function(){
  for(var i=0;i<lg.length;i++){
      lg[i].style.display="none"
      la.style.display="block"
  }
}
// 链接接口
// function loadData() {}
// let pagenum = 0;
// let pagesize = 20;
// let url = "http://jx.xuzhixiang.top/ap/api/productlist.php"
// let uid = localStorage.getItem("uld")
// let token = localStorage.getItem("token")

// function loadData(

// ) {
//   axios.get(url, {
//     params: {
//       pagenum,
//       pageszie,
//       uid
//     }

//   }).then(res => {
//     console.log(res.data.data);
//     let arr = res.data.data;
//   })

//   let html = ''
//   arr.forEach(obj => {
//     html += `
//               <div>
//                 <img src="${obj.pimg}"alt="">
//                 <p>${obj.pname}</p>
//                 <p>${obj.pprice}</p>
//                 <p>${obj.pdesc}</p>
//                 <button type="button"
//               </div>
      
//       `
//   })

//   let list = document.querySelectorAll("#tulist_3")
//   list.innerHTNL = html;
// }

// function publishProduct() {
//   let ipts = document.querySelectorAll(".mm1  p");
//   let btn = document.querySelector(".mm1  input")
//   let img = dcoument.querySelector(".mm1  img")
//   btn.onclick = function () {
//     let pimg = img
//     let pname = ipts[0].innerText;
//     let pprice = ipts[1].innerText;
//     let  pdesc=ipts[2].innerText;
//     let  uid=localStorage.getItem("uid")
//     let  pAPI= "http://jx.xuzhixiang.top/ap/api/goods/goods-add.p" 
//     axios.get(pAPI,{params:{pname,pprice,pimg,pdesc,uil}}).then(res=>{
//       console.log(res.data.data)
//     })
//   }
// }
// loadData()
// publishProduct()