let a=document.querySelector("textarea"),b=document.querySelector("p");
let c=document.querySelector("span");
let d=false;
a.onclick=()=>{
if(!d){
    d=true;
    setInterval(
        ()=>{
            if(Number(c.innerText)<=0){a.disabled=true;return;}

            c.innerText=Number(c.innerText)-1;
           
        },1000
    )
}

}
a.addEventListener("keypress",(s)=>{
    //console.log(s.key);
if(a.value===b.innerText.substr(0,a.value.length))b.style.backgroundColor="green";
else b.style.backgroundColor="red";


})