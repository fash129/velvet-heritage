for(let i = 0; i< slide.length ;i++){
    let carouselEle = document.querySelector(".carousel");
    console.log(slide[i]);

    console.log( showimage(slide[i].images));


    carouselEle.innerHTML += `
    <div class="container">
    <section>
        <div class="text">
            <h3>${slide[i].name}</h3>
        <p>${slide[i].text}</p>
        </div>
    </section>
    <div class="slide">
<div class="slider">
    ${showimage(slide[i].images)}

</div>
<div aria-hidden="" class="slider">
${showimage(slide[i].images)}

</div>
</div>
</div>`;
}

