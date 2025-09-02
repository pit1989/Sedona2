// Переменные для элементов
const burgerButton = document.querySelector('.burger-wrapper');
const burgerMenu = document.querySelector('.burger-menu');
const closeIcon = document.querySelector('.close-icon');
const mobileMenuContainer = document.querySelector('.mobile-menu-container');
const logo = document.querySelector('.logoone'); // Логотип
const header = document.querySelector('header');
const mainNavigation = document.querySelector('.main-navigation');
const mainContent = document.querySelector('.main-content');
const body = document.querySelector('body');

// Функция для переключения состояния меню
function toggleMenu() {
    mobileMenuContainer.classList.toggle('open'); // Переключаем класс "open" на контейнере меню
    burgerMenu.classList.add('hidden'); // Прячем гамбургер
    closeIcon.classList.remove('hidden'); // Показываем крестик

    // Переключаем классы для сдвига элементов
    header.classList.toggle('shifted');
    mainNavigation.classList.toggle('shifted');
    mainContent.classList.toggle('shifted');
    logo.classList.toggle('shifted'); // Добавляем сдвиг для логотипа

    // Сдвигаем дополнительные элементы
    const elementsToShift = [
        '.container',
        '.centrblock',
        '.centrpicture',
        '.image-row',
        '.centrblock2',
        '.whiteblockvideo',
        '.footer'
    ];

    elementsToShift.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) {
            element.classList.toggle('shifted');
        }
    });
}

// Привязываем обработчик клика для гамбургера
burgerButton.addEventListener('click', toggleMenu);

// Обработчик для крестика, чтобы скрыть меню
closeIcon.addEventListener('click', function() {
    mobileMenuContainer.classList.remove('open'); // Прячем мобильное меню
    burgerMenu.classList.remove('hidden'); // Показываем гамбургер
    closeIcon.classList.add('hidden'); // Прячем крестик
    body.classList.remove('shift-content-down'); // Возвращаем контент на место


    // Убираем сдвиг с элементов
    header.classList.remove('shifted');
    mainNavigation.classList.remove('shifted');
    mainContent.classList.remove('shifted');
    logo.classList.remove('shifted'); // Убираем сдвиг для логотипа

    // Убираем сдвиг с дополнительных элементов
    const elementsToShift = [
        '.container',
        '.centrblock',
        '.centrpicture',
        '.image-row',
        '.centrblock2',
        '.whiteblockvideo',
        '.footer'
    ];

    elementsToShift.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) {
            element.classList.remove('shifted');
        }
    });
});

// Обработчик для гамбургера для сдвига контента
burgerMenu.addEventListener('click', () => {
    mobileMenuContainer.classList.toggle('open'); // Переключаем отображение мобильного меню
    body.classList.toggle('shift-content-down'); // Применяем или убираем класс сдвига контента
});

function updatePlaceholderText() {
    const input = document.getElementById('tel-name');
    
    if (window.innerWidth <= 768) { // Проверка на мобильный экран (ширина экрана 768px и меньше)
      input.placeholder = 'Телефон';
    } else {
      input.placeholder = 'Введите ваш телефон'; // Оригинальный текст для десктопа
    }
  }

  // Запускаем функцию при загрузке страницы и при изменении размера окна
  window.addEventListener('load', updatePlaceholderText);
  window.addEventListener('resize', updatePlaceholderText);
