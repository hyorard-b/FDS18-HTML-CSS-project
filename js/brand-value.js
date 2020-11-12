const item1 = document.getElementsByClassName("brand-value__lab-item").item(0);
const item2 = document.getElementsByClassName("brand-value__lab-item").item(1);

item1.addEventListener("mouseenter", function(){
    item1.classList.remove('back');
    item1.classList.add('front');
    item2.classList.remove('front');
})
item2.addEventListener("mouseenter", function(){
    item2.classList.remove('back');
    item2.classList.add('front');
    item1.classList.remove('front');
})