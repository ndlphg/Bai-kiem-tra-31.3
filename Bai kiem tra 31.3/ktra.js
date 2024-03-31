const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const responseElement = document.querySelector('#response');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = nameInput.value;

    if (name === '') {
        responseElement.textContent = 'Vui lòng nhập tên của bạn.';
        return;
    }

    responseElement.textContent = `Chào mừng, ${name}!`;
});
