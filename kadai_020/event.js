const btn01 = document.getElementById('btn');
const text01 = document.getElementById('text');

btn01.addEventListener('click', () => {
    text01.textContent = 'ボタンをクリックしました';
});