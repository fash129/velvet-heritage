let btn = document.getElementById('btn');

window.onscroll = function () {
    if (scrollY >= 200) {
        btn.style.display = 'block';
    }
    else {
        btn.style.display = 'none ';

    }
} 
btn.onclick = function () {
    scroll({
        left: 0,
        top: 0,
        behavior:"smooth"
    })
}

let scrollTimeout;

window.addEventListener('scroll', () => {
    document.body.classList.add('show-scrollbar'); 


    clearTimeout(scrollTimeout);

   
    scrollTimeout = setTimeout(() => {
        document.body.classList.remove('show-scrollbar');
    }, 1500);
});



// document.addEventListener("DOMContentLoaded", () => {
    
//     const savedTheme = localStorage.getItem("selectedTheme");

//     if (savedTheme === "scend-theme") {
       
//         document.body.classList.add(savedTheme);
//     } else {
        
//         document.body.classList.remove('scend-theme');
//         localStorage.setItem("selectedTheme", ""); 
//     }
// });


// function toggleTheme() {
//     const body = document.body;

//     if (body.classList.contains('scend-theme')) {
//         body.classList.remove('scend-theme');
//         localStorage.setItem("selectedTheme", ""); 
//     } else {
//         body.classList.add('scend-theme');
//         localStorage.setItem("selectedTheme", "scend-theme"); 
//     }
// }




// function toggleTheme() {
//     const body = document.body;
   
//     if (body.classList.contains('scend-theme')) {
//         body.classList.remove('scend-theme');
//     } else {
//         body.classList.add('scend-theme');
//     }
// }
