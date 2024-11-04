let allArticles = document.getElementsByTagName("article");


let index=0

function showSlide(){
    for(let each of allArticles){
        each.style.display = "none";
    }

    allArticles[index].style.display = "block"
}

showSlide();


function nextSlide(){
    index=(index+1)%allArticles.length
    showSlide();
}

function prevSlide(){
    index=(index-1+allArticles.length)%allArticles.length
    showSlide();
}
// autoslide
setInterval(function(){
    index=(index+1)%allArticles.length
    showSlide();
},4000)