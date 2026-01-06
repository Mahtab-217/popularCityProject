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
bookContainer.innerHTML="";
bookList.forEach(book=>{

   const div = document.createElement("div");
   div.classList.add("w-11/12");
   div.classList.add("p-3");
   div.classList.add("grid");
   div.classList.add("grid-cols-2");
   div.classList.add("gap-3");
   div.classList.add("mx-auto");
   div.classList.add("m-6");
   div.classList.add("border");
  const h1= document.createElement("h1");
  h1.classList.add("font-bold");
  h1.classList.add("text-3xl");
  h1.classList.add("text-center");
  h1.textContent=book.name;
//   div.appendChild(h1);
  const p = document.createElement("p");
  p.classList.add("text-base");
  p.classList.add("font-bold");

  p.classList.add("text-justify");
  p.textContent = book.desc;
//  div.appendChild(p);
  const textContainer=document.createElement("div");
  div.appendChild(textContainer);
const deleteBtn=  document.createElement("button");
deleteBtn.textContent="Delete";
deleteBtn.classList.add("py-1.5");
deleteBtn.classList.add("px-2");
deleteBtn.classList.add("bg-red-600");
deleteBtn.classList.add("rounded-md");
deleteBtn.classList.add("text-white");
  textContainer.append(h1,p,deleteBtn);
 const image=document.createElement("img");
 image.setAttribute("src",book.image);
 image.classList.add("w-10/12")
 image.classList.add("h-80")
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