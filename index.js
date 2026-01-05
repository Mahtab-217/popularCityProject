const { createElement } = require("react");

const form=document.getElementById("form");
const btn=document.getElementById("btn");
const addBtn=document.getElementById("addBtn");
const bookContainer= document.getElementById("bookContainer");
const bookList=[];
addBtn.addEventListener("click",(event)=>{
   event.preventDefault();
const bookName = document.getElementById("name").value;
const bookImage = document.getElementById("image").value;
const bookDescription = document.getElementById("description").value;
const bookInfo={
   name: bookName,
   image: bookImage,
   desc: bookDescription
}
bookList.push(bookInfo);
// bookName="";
// bookImage="";
// bookDescription="";
  form.classList.remove("flex");
form.classList.add("hidden"); 

bookList.forEach(book=>{

   const div = document.createElement("div");
   div.classList.add("w-11/12");
   div.classList.add("mx-auto");
  const h1= document.createElement("h1");
  h1.classList.add("font-bold");
  h1.classList.add("text-3xl");
  h1.classList.add("text-center");
  h1.textContent=book.name;
  
  const p = document.createElement("p");
  p.classList.add("text-base");
  p.classList.add("text-justify");
  p.textContent = book.desc;
  const textContainer=document.createElement("div");
  div.appendChild(textContainer);
 const image=document.createElement("img");
 image.setAttribute("src",book.image);
 image.classList.add("w-full")
 image.classList.add("h-56")
 image.classList.add("rounded-md")
 div.appendChild(image);
bookContainer.appendChild(div);
})
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