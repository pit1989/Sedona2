function toggleMenu() {
    const header = document.querySelector('header');
    const mainNavigation = document.querySelector('.main-navigation');
    const mainContent = document.querySelector('.main-content');
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileMenuContainer = document.querySelector('.mobile-menu-container');

    // Переключаем классы для сдвига header и контента
    header.classList.toggle('shifted');
    mainNavigation.classList.toggle('shifted');
    mainContent.classList.toggle('shifted');

    // Переключаем отображение мобильного меню
    mobileMenuContainer.classList.toggle('open');

    // Скрываем или показываем гамбургер
    burgerMenu.classList.toggle('hidden');
}

function closeMenu() {
    const header = document.querySelector('header');
    const mainNavigation = document.querySelector('.main-navigation');
    const mainContent = document.querySelector('.main-content');
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileMenuContainer = document.querySelector('.mobile-menu-container');

    // Убираем сдвиг и скрываем меню
    header.classList.remove('shifted');
    mainNavigation.classList.remove('shifted');
    mainContent.classList.remove('shifted');
    mobileMenuContainer.classList.remove('open');

    // Показываем гамбургер
    burgerMenu.classList.remove('hidden');
}