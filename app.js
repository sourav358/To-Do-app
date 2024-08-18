let btn = document.querySelector( "button");
let ul = document.querySelector( "ul");
let input = document.querySelector( "input");

btn.addEventListener("click", function(){
   let item = document.createElement("li");
   item.innerText = input.value;
   let del= document.createElement("button");
   del.innerText = "Delete";
   del.classList.add("delete");
   item.appendChild(del);

ul.appendChild(item);
  
   input.value = "";
});
ul.addEventListener("click", function(event){
    if(event.target.nodeName=="BUTTON"){
       let listItem = event.target.parentElement;
       listItem.remove();
    } 
});
