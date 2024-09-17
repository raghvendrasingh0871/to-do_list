let addBtn=document.getElementById("addBtn");
let tasks=document.getElementById("tasks");
let dltBtn=document.getElementsByClassName("dltBtn");

addBtn.addEventListener('click',()=>{
    let input=document.getElementById("input");
    if(input.value.length==0){
        alert("No task added");
    }
    else{
        let li=document.createElement("li");
        li.className="incomplete"
        let img=document.createElement("img");
        img.setAttribute("src","images/circle.png");
        img.setAttribute("draggable","false");
        let btn=document.createElement("button");  
        btn.setAttribute("class","dltBtn");
        btn.textContent="delete";
        let div=document.createElement("div");
        div.class="task";
        div.textContent=input.value;
        li.appendChild(img);
        li.appendChild(div);
        li.appendChild(btn);
        tasks.appendChild(li);
        input.value="";
    }
    
});

tasks.addEventListener('click',(e)=>{
    if(e.target.tagName==="BUTTON"){        
        e.target.parentElement.remove();
    }
    else if(e.target.tagName==="IMG"){
        s=e.target.getAttribute("src");
        if(s.includes("images/circle.png")){
            e.target.setAttribute("src","images/tick-mark.jpg");
        }
        else if(s.includes("images/tick-mark.jpg")){
            e.target.setAttribute("src","images/circle.png");
        }
        e.target.parentElement.childNodes[1].classList.toggle("completed");
    }
});
