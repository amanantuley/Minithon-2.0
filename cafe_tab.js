function showTab(tabId) {
    const menus = document.querySelectorAll('.menu');
    menus.forEach(menu => {
        menu.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
}

// Automatically show the first menu on load
showTab('menu1');
