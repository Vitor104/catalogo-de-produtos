let nav = document.getElementById("before-menu");

function hddNav() {
    let navhidden = document.getElementById("hidden-nav");

    if (navhidden.style.display === 'none') {
        navhidden.style.display = 'block';
    } else {
        navhidden.style.display = 'none';
    }
}


document.getElementById('searchInput').addEventListener('input', function (event) {
    const searchTerm = event.target.value.toLowerCase();
    const listItems = document.querySelectorAll('#itemList li');

    listItems.forEach(function (item) {
        const itemText = item.textContent.toLowerCase();

        if (itemText.includes(searchTerm)) {
            item.style.display = 'list-item';
        } else {
            item.style.display = 'none';
        }
    });
});

nav.addEventListener('click', hddNav);



