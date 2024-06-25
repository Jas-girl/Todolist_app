const inputValue=document.getElementById("item");
const contentContainer=document.getElementById("content");
function searchValue(){
    if(inputValue===""){
        alert("add something in the list")
    }
    else{
    let li=document.createElement("li");
    li.innerHTML=inputValue.value;
    contentContainer.appendChild(li);
    let span =document.createElement("span");
    span.innerHTML=" &#10006";
    li.appendChild(span);
    }
    inputValue.value="";
    saveData()
}
contentContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentNode.remove();
        saveData()
    }
})
function saveData(){
    localStorage.setItem("data",contentContainer.innerHTML);
}
function displayData(){
    contentContainer.innerHTML=localStorage.getItem("data");
}
displayData();
