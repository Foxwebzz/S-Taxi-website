// SELECTION
let listItemsNav = document.querySelectorAll('.list-items-nav');

// ADD CLICKS & FUNCTIONALITY
for (let i = 0; i < listItemsNav.length; i++) {
    listItemsNav[i].addEventListener('click', function () {
        for (let i = 0; i < listItemsNav.length; i++) {
            listItemsNav[i].classList.remove('active');
        }
        this.classList.add('active');
    })
}
