

        function logout() {
            let msg = document.getElementById("mess");
            msg.classList.remove("hidden");
            msg.classList.add("show");

            setTimeout(function () {
                window.location.href = "sign-in.html";
            }, 2000);
        }


  const pages = [
    { name: "Home", url: "index.html" },
    { name: "About", url: "about-us.html" },
    { name: "fashion icon", url: "fashion-icon.html" },
    { name: "fashion eras", url: "fashion_eras.html" },
    { name: " aura-lifestyle", url: "aura-lifestyle.html" },
    { name: "trends-revival", url: "trends-revival.html" },
    { name: "Contact-us", url: "contact.html" },
    { name: "gallery", url: "magazines.html" },
  ];

  const input = document.getElementById("searchInput");
  const resultsDiv = document.getElementById("results");

  input.addEventListener("input", function () {
    const query = input.value.toLowerCase();
    resultsDiv.innerHTML = "";

    const filtered = pages.filter(page =>
      page.name.toLowerCase().includes(query)
    );

    filtered.forEach(page => {
      const div = document.createElement("div");
      div.classList.add("result");
      div.textContent = page.name;

      div.onclick = () => {
        window.location.href = page.url;
      };

      resultsDiv.appendChild(div);
    });
  });


const icon =document.getElementById('themeicon');
const themebtn=document.getElementById('themetoggle');
const savedtheme=localStorage.getItem('theme');
if (savedtheme === 'dark' ){
    document.body.classList.add('dark');
    icon.classList.replace('fa-moon','fa-sun');
}

themebtn.addEventListener('click',() => {
    document.body.classList.toggle('dark');
    let theme ='light';
    if(document.body.classList.contains('dark')){
        icon.classList.replace('fa-moon','fa-sun');
        theme='dark';
    }
    else{
        icon.classList.replace('fa-sun','fa-moon');
        icon.style.color=="";
        theme='light';
    }
    localStorage.setItem('theme',theme);
});

            function layout(){
                let x=document.getElementById("ul");
                x.classList.add("ul1");
                x.classList.remove("ul");
                let a = document.getElementById("layout");
                let b = document.getElementById("layout1");
                a.classList.add("mod");
                b.classList.remove("mod");
                localStorage.setItem("lay","layout1");
            }
            function layout1(){
                let x=document.getElementById("ul");
                x.classList.remove("ul1");
                x.classList.add("ul");
                let a = document.getElementById("layout");
                let b = document.getElementById("layout1");
                a.classList.remove("mod");
                b.classList.add("mod");
                localStorage.setItem("lay","layout");
            }
            window.onload=function(){
            let save=localStorage.getItem("lay");
            if (save === "layout")
            {
                layout();
            }
            else{
                layout1();
            }
        } 