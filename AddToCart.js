var cart=document.querySelectorAll(".cart")
var cartRendersdil=document.getElementById("cartRendersdil")
var counter2=document.getElementById("counter2")

                            // Add Cart Render Div


                            // Add cart btn and parent target
cart.forEach(e=>{
    e.addEventListener("click",function(btn){
    var parent=btn.target.parentElement.parentElement.parentElement.parentElement;
    detail(parent)
    })
})

                                // get data for local storage
function detail(parent){
    var img=parent.querySelector(".img").src
    console.log(img)
    var name=parent.querySelector(".name").innerText
        console.log(name)
        var price=parent.querySelector(".price").innerText
        console.log(price)
    var obj={img , name , price}
    let data=localStorage.getItem("item")
    if(!data){
    localStorage.setItem("item",JSON.stringify([obj]))
    }
    else{
        data=JSON.parse(data)
        data.push(obj)
        localStorage.setItem("item",JSON.stringify(data))
    }
    renderTobody()
}
function renderTobody(){
    let data=JSON.parse(localStorage.getItem("item"))
    if(data.length){
        var list=""
        data.map((elm,i)=>{
        list+=`<div class='sh'>
        <img src="${elm.img}" class="images">
        <p class="text">${elm.name}</p>
        <h5 class="texts">${elm.price}</h5>
        <i class="fas fa-times" onclick="del(${i})" class="delete"></i>
        </div>`
        counter2.innerText=data.length
        cartrender.innerHTML=list
        })
    }
    else{
        counter2.innerText="0"
        cartrender.innerHTML="<h3 class='ss'>There is no Items...</h3>"
    }
}
let del=(i)=>{
    let data=localStorage.getItem("item")
    data=JSON.parse(data)
    data.splice(i,1)
    localStorage.setItem("item",JSON.stringify(data))
    renderTobody()
    }
    renderTobody()
function removeStorage(){
    localStorage.clear()
    location.reload()
    cartrender.innerHTML="<h3 class='ss'>There is no Items...</h3>"
}
function toggleEvent(){
    cartRenders.classList.toggle("right")
}

 