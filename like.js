                                   // Like Product Render Div
                                  
 var dil=document.querySelectorAll(".dil")
 var counter1=document.getElementById("counter1")


                            // Like btn and parent target
dil.forEach(element=>{
    console.log(element)
    element.addEventListener("click",function(btns){
    var parent=btns.target.parentElement.parentElement.parentElement.parentElement;
    details(parent)
    })
})

                                // get data for local storage

function details(parent){
    var img=parent.querySelector(".img").src
    console.log(img)
    var name=parent.querySelector(".name").innerText
        console.log(name)
        var price=parent.querySelector(".price").innerText
        console.log(price)
    var objs={img , name , price}
    let data=localStorage.getItem("items")
    if(!data){
    localStorage.setItem("items",JSON.stringify([objs]))
    }
    else{
        data=JSON.parse(data)
        data.push(objs)
        localStorage.setItem("items",JSON.stringify(data))
    }
    renderbody()
}

                                // render Div
function renderbody(){
    let data =JSON.parse(localStorage.getItem("items"))
    if(data.length){
        var list=""
        data.map((elm,i)=>{
        list+=`<div class='sh'>
        <img src="${elm.img}" class="images">
        <p class="text">${elm.name}</p>
        <h5 class="texts">${elm.price}</h5>
        <i class="fas fa-times" onclick="dels(${i})" class="delete"></i>
        </div>`
        counter1.innerText=data.length
        cartRenderss.innerHTML=list
        })
    }
    else{
        counter1.innerText="0"
        cartRenderss.innerHTML="<h3 class='ss'>There is no Items...</h3>"
    }
}

                                // Delete Obj
let dels=(i)=>{
    let data=localStorage.getItem("items")
    data=JSON.parse(data)
    data.splice(i,1)
    localStorage.setItem("items",JSON.stringify(data))
    renderbody()
    }
    renderbody()

                                    // Toggle Div
function toggleEvents(){
    cartRendersdil.classList.toggle("right")
}