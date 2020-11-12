window.addEventListener("scroll", function() {
    const targetTop = document.querySelector("#header").getBoundingClientRect().bottom;
    const scrollTop = window.scrollY;
    console.log("scrollTop= "+scrollTop);
    console.log("targetTop= "+targetTop);
    console.log("test= "+scrollTop>targetTop);
    if(scrollTop>targetTop) {
        document.querySelector("#goToTopBtn").classList.add("is--btnActive");
    } else {
        document.getElementById("goToTopBtn").classList.remove('is--btnActive');
    }
})

document.querySelector("#goToTopBtn").addEventListener("click", function(){
    document.querySelector("#header").scrollIntoView({ behavior: "smooth" });
});

