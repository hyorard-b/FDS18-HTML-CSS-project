const item1 = document.getElementsByClassName("brand-value__lab-item").item(0);
const item2 = document.getElementsByClassName("brand-value__lab-item").item(1);

item1.addEventListener("mouseenter", function(){
    item1.classList.remove('down');
    item1.classList.add('up');
    item2.classList.remove('up');
})
item2.addEventListener("mouseenter", function(){
    item2.classList.remove('down');
    item2.classList.add('up');
    item1.classList.remove('up');
})