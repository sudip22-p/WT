const divs=document.getElementsByClassName("div-parent");
for(let div of divs){
    if(div.id=='parent-2'){
        div.addEventListener("click",divClick,{
            capture:true
        });
    }
    else{
    div.addEventListener("click",divClick);
    }
}
function divClick(){
    alert("div parent click vayo");
}

const childs=document.getElementsByClassName("div-child");
for(let child of childs){
    if(child.id=="child-2"){
        child.addEventListener("click",divChildClick,{
            capture : true
        });
    }
    else{
    child.addEventListener("click",divChildClick);
    }
}
function divChildClick(){
    alert("div child click vayo");
}

const btns=document.getElementsByTagName("button");
for(let btn of btns){
    if(btn.id=="btn-2"){
    btn.addEventListener("click",btnClick,{
        capture : true
    });
}
else{
btn.addEventListener("click",btnClick);
}
}
function btnClick(){
    alert("btn click vayo");
}

