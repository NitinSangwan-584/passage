//-----------------------------------navbar---------------------------------------------
const navbarbtn = () => {
    document.getElementById("name").classList.toggle("show-navbar")
    document.getElementById("rotates").classList.toggle("rotate40")
    document.getElementById("transparent").classList.toggle("bg-transparent")
    document.getElementById("rotates2").classList.toggle("rotate-45")
    document.body.classList.toggle("overflow-hidden")
}
//------------------------------------------------slider---------------------------------------------
$('.my-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: ".previous",
    nextArrow: ".next",
    responsive: [
        {
            breakpoint: 992,
            settings: {
                autoplay: true,
                autoplaySpeed: 2000,
            }
        },
    ]
});
//----------------------------------------------back to top------------------------------------------------
const mybutton = document.getElementById("myBtn");
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block"; // Show the button
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
