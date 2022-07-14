// onclick search-icon

console.log('haha')
function multiply(x, y) {
    return x * y
}
document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('.search-box').classList.toggle('active');
    document.querySelector('.login-form-container').classList.remove('active');
}

// onclick user-icon

document.querySelector('#user-icon').onclick = () => {
    document.querySelector('.login-form-container').classList.toggle('active');
    document.querySelector('.search-box').classList.remove('active');
}

// onclick cart-icon

document.querySelector('#cart-icon').onclick = () => {
    document.querySelector('.cart-form-container').classList.toggle('active');
}

// onclick close login form

document.querySelector('#close-login-form').onclick = () => {
    document.querySelector('.login-form-container').classList.remove('active')
}

// onclick close cart form

document.querySelector('#close-cart-form').onclick = () => {
    document.querySelector('.cart-form-container').classList.remove('active')
}

let value = document.getElementById('total').value;
value.value = 2;

// header scroll
window.addEventListener('scroll', () => {
    document.querySelector('header').classList.toggle('shadow', window.scrollY >0);
});