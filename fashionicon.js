{const button = document.getElementById("theme-switch");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
document.body.classList.add("light");
} else {
  document.body.classList.remove("light"); 
}

button.onclick = function(){
    document.body.classList.toggle("light");  
if (document.body.classList.contains("light") ) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
}};





const icon =document.getElementById('themeicon');
const themebtn=document.getElementById('themetoggle');
const savedtheme=localStorage.getItem('theme');
if (savedtheme === 'dark' ){
    document.body.classList.add('body');
    icon.classList.replace('fa-moon','fa-sun');
}

themebtn.addEventListener('click',()=>{
    document.body.classList.toggle('body');
    let theme ='light';
    if(document.body.classList.contains('body')){
        icon.classList.replace('fa-moon','fa-sun');
        theme='dark';
    }
    else{
        icon.classList.replace('fa-sun','fa-moon');
        icon.style.color=="";
        theme='light';
    }
    localStorage.setItem('theme',theme)
})







//   for(let i = 0; i< slide.length ;i++){
//       let carouselEle = document.querySelector(".carousel");
//       console.log(slide[i]);

//      console.log( showimage(slide[i].images));


//      carouselEle.innerHTML += `
//      <div class="container">
//     <section>
//       <div class="text">
//         <h3>${slide[i].name}</h3>
//          <p>${slide[i].text}</p>
//          </div>
//       </section>
//      <div class="slide">
//       <div class="slider">
//      ${showimage(slide[i].images)}
//       </div>
//       <div aria-hidden="" class="slider">
//       ${showimage(slide[i].images)}

//      </div>
//       </div>
//       </div>`;
//   };
 
{const library = document.getElementById('library');
bookdata.forEach(book=>{
    let pagesHTML ='';
    book.pages.forEach(pagedata =>{
        pagesHTML +=`
        <div class="page">
        <div class="page-content">
            <img src="${pagedata.img}" alt="">
            <p>${pagedata.text}</p>
        </div>
        </div>
        `
    });
    library.insertAdjacentHTML('beforeend',`  <div class="magazine">
    <div id="pages" class="pages">
    ${pagesHTML}
    </div>
    </div>
    .
    
    `)
})}
