const form=document.getElementById("form");
const btn=document.getElementById("btn");
const addBtn=document.getElementById("addBtn");
const bookContainer= document.getElementById("bookContainer");
const bookList=[];
addBtn.addEventListener("click",(event)=>{
   event.preventDefault;
const bookName= document.getElementById("name").value
const bookImage= document.getElementById("image").value
const bookDescription =document.getElementById("description").value
const bookInfo={
   name: bookName,
   image: bookImage,
   desc: bookDescription,
}
bookList.push(bookInfo);
// bookName="";
// bookImage="";
// bookDescription="";
  form.classList.remove("flex");
form.classList.add(""); 
bookList.forEach(book=>{
   const div =document.createElement("div");
   div.classList.add("bookBox");
  const h1= document.createElement("h1");
  h1.textContent=book.name;
  div.appendChild(h1);
  const p=document.createElement("p");
  p.textContent= book.desc;
 div.appendChild(p);
 const image=document.createElement("img");
 image.setAttribute("src",book.image);
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