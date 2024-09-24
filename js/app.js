window.addEventListener('resize', function() {
    const biblioteca = document.querySelector('.biblioteca');
    const aside = document.querySelector('aside');
    const firstChild = aside.firstElementChild;

    if (window.innerWidth <= 428) {
        if (biblioteca && !firstChild.contains(biblioteca)) {
            aside.insertBefore(biblioteca, firstChild);
        }
    } else {
        // Aquí puedes devolver el elemento a su lugar original si lo deseas.
    }
});