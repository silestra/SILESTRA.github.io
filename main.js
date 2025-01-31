const logo = document.querySelector('.logo');
const notification = document.getElementById('notification');

logo.addEventListener('click', () => {
    const text = logo.textContent;
    copyToClipboard(text);
    showNotification();
});

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            console.log('Текст скопирован: ' + text);
        })
        .catch(err => {
            console.error('Не удалось скопировать текст: ', err);
        });
}

function showNotification() {
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000); // Скрыть уведомление через 3 секунды
}

