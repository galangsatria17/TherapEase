const test = document.querySelector('#test');
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  test.style.backgroundColor = 'red';
  btn.classList.add('active');
});
document.getElementById('btn0').click();
