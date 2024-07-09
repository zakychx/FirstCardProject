let div = document.querySelector('.copy');

copyButton.addEventListener('click', function(){
    div.style.display = 'block';
    // Копирование текста при появлении дива
    var textElement = document.getElementById('textToCopy');
    var textToCopy = textElement.innerText;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        console.log('Текст скопирован');
      })
      .catch(err => {
        console.error('Ошибка при копировании текста: ', err);
      });
    // Запускаем таймер для закрытия дива через 5 секунд
    setTimeout(function() {
        div.classList.add('fadeOut'); // Добавляем класс для анимации
        // Закрываем див после завершения анимации
        setTimeout(function() {
            div.style.display = 'none';
            div.classList.remove('fadeOut'); // Удаляем класс для следующего открытия
        }, 1000); // Время анимации
    }, 5000);
});