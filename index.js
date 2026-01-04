const form=document.getElementById("form");
const btn=document.getElementById("btn");
const addBtn=document.getElementById("addBtn");
const bookList=[];
addBtn.addEventListener("click",(event)=>{
   event.preventDefault;
const bookName= document.getElementById("name").value;
const bookImage= document.getElementById("image").value;
const bookDescription =document.getElementById("description").value;
const bookInfo={
   name: bookName,
   image: bookImage,
   desc: bookDescription
}
bookList.push(bookInfo)
  form.classList.remove("flex");
form.classList.add("hidden"); 
})

btn.addEventListener("click", ()=>{

if(form.classList.contains("hidden")){
form.classList.remove("hidden");
form.classList.add("flex");
}
else{
   form.classList.remove("flex");
form.classList.add("hidden"); 
}
})  