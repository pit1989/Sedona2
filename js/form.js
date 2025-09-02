document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем отправку формы

        console.log('Форма отправляется...');

        const checkboxes = form.querySelectorAll('input[type="checkbox"]:checked');
        const radios = form.querySelectorAll('input[type="radio"]:checked');
        
        if (checkboxes.length === 0 && radios.length === 0) {
            alert('Пожалуйста, выберите хотя бы один чекбокс или радиокнопку!');
        } else {
            console.log('Проверка прошла, отправляем форму...');
            form.submit(); // Отправить форму, если все в порядке
        }
    });
});

// Обработчик для всего документа, чтобы исключить нежелательные редиректы
document.body.addEventListener('click', function(event) {
    // Можно добавить логику, чтобы игнорировать клики по определенным элементам
    console.log('Клик по элементу:', event.target);
});
