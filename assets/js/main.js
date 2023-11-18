const btns = document.querySelectorAll(".container .btns button");
const par = document.querySelector(".container .parent");
const change = document.getElementById("change");
const row = document.getElementsByClassName("row");
const item = document.querySelector(".container .par .item:nth-child(2)");

btns.forEach(function (e) {
    e.addEventListener("click", function () {
        par.classList.remove("tr", "center", "bl", "br");
        par.classList.add(this.id);
    });
});

change.addEventListener("click", function() {
    row[0].classList.toggle("res");
    row[1].classList.toggle("res");
    item.classList.toggle("hide");
});