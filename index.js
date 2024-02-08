let before = document.getElementById("before-menu");
let after = document.getElementById("after-menu");

function beforeNav () {
    before.style.display = 'none';
    after.style.display = "block";
}

function afterNav() {
    after.style.display = 'none';
    before.style.display = "block";
}

before.addEventListener('click', beforeNav);

after.addEventListener('click', afterNav);


