let nav = document.getElementById("before-menu");

function hddNav() {
    let navhidden = document.getElementById("hidden-nav");

    if (navhidden.style.display === 'none') {
        navhidden.style.display = 'block';
    } else {
        navhidden.style.display = 'none';
    }
}

nav.addEventListener('click', hddNav);



