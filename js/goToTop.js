window.addEventListener("scroll", function() {
    const targetTop = document.querySelector("#header").getBoundingClientRect().bottom;
    const scrollTop = window.scrollY;
    if(scrollTop>targetTop) {
        document.querySelector("#goToTopBtn").classList.add("is--btnActive");
    } else {
        document.getElementById("goToTopBtn").classList.remove('is--btnActive');
    }
})

document.querySelector("#goToTopBtn").addEventListener("click", function(){
    document.querySelector("#header").scrollIntoView({ behavior: "smooth" });
});

