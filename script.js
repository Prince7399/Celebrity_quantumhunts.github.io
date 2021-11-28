let flag=0;

function controller(x)
{
    flag=flag+x;
    slideshow(flag);
}

slideshow(flag);
function slideshow(num){
    let slides=document.getElementsByClassName("slide");

    if(num==slides.length)
    {
        flag=0;
        num=0;
    }
    if(num<0)
    {
        flag=slides.length-1;
        num=flag;
    }

    for(let y of slides)
    {
        y.style.display="none";
    }
    slides[num].style.display="block";
}


var slideIndex=0;
showSlides();

function showSlides(){
    var i;
    var slides=document.getElementsByClassName("slide");
    
    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    slideIndex++;
    if(slideIndex > slides.length){
        slideIndex = 1
    }
    slides[slideIndex-1].style.display="block";
    setTimeout(showSlides,3000);
}
