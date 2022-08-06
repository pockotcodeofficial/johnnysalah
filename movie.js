var swiper = new Swiper (".popular-content",{
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay:{
        delay: 55500,
        disableOnInteraction: false,
    },
    pagination:{
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        280:{
            slidesPerView: 1,
            spaceBetween: 10,
        },
        320:{
            slidesPerView: 2,
            spaceBetween: 10,
        },
        510:{
            slidesPerView: 2,
            spaceBetween: 10,
        },
        758:{
            slidesPerView: 3,
            spaceBetween: 15,
        },
        900:{
            slidesPerView: 4,
            spaceBetween: 20,
        },
    }
})
let playButton = document.querySelector(".play-movie");
let video = document.querySelector(".video-container");
let closebtn = document.querySelector(".close-video");
let myvideo = document.querySelector("#myvideo");

playButton.onclick=()=>{
    video.classList.add("show-video");
    myvideo.play();
}
closebtn.onclick = ()=>{
    video.classList.remove("show-video");
    myvideo.pause()
}
let scrollPercentage = ()=>{
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollvalue = Math.round(pos * 100 / calcHeight);
    scrollProgress.style.background = `conic-gradient(#e70634 ${scrollvalue}%, #2b2f38 ${scrollvalue}%)`;
}
window.onscroll = scrollPercentage;
window.onload = scrollPercentage;