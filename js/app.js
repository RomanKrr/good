const input = document.querySelector('.header__shrink-loop');
const loop = document.querySelector('.loop');

loop.addEventListener("click", () => {
    input.classList.toggle("active");
});



//===============================================

const navBtn = document.querySelector('.hamburger');
const navBar = document.querySelectorAll('.bar');
const header = document.querySelector('.header__bottom-row');
const hide = document.querySelector('.fade-out');



// navBtn.onclick = function () {
//     navBar.classList.toggle('bar__active');
// }
// navBtn.onclick = function () {
//     navBar.forEach(bar => {
//         bar.classList.toggle('active');
//     });
// };
navBtn.addEventListener("click", () => {
    header.classList.toggle('header__bottom-row--mobile');
    navBar.forEach(bar => {
        bar.classList.toggle('active');
    });

    if (header.classList.contains('header__bottom-row--fade-in')) {
        hide.classList.remove('fade-out');
    } else {
        hide.classList.add('fade-out');
    }
});



//====================================


const passwordInput = document.getElementById('password-input');
const togglePassword = document.getElementById('toggle-icon');

togglePassword.addEventListener('click', () => {
    if(passwordInput.type === 'password'){
        passwordInput.type = 'text';
        togglePassword.src = './img/header/form/eye.svg';
    } else {
        passwordInput.type = 'password';
        togglePassword.src = './img/header/form/eye-off.svg'
    }
})



//====================================

const profile = document.querySelector('.sign__in');
const dropdown = document.querySelector('.dropdown__wrapper');

profile.addEventListener('click', () => {
    dropdown.classList.remove('none');
    dropdown.classList.toggle('hide');
})


document.addEventListener("click", (event) => {
    const isClickInsideDropdown = dropdown.contains(event.target);
    const isProfileClicked = profile.contains(event.target);

    if (!isClickInsideDropdown && !isProfileClicked) {
        dropdown.classList.add('hide');
        dropdown.classList.add('hide');
    }
});
// const signInBtn = document.querySelector('.sign__in');
// const signInDropdown = document.querySelector('.dropdown__wrapper');

// document.addEventListener("click", () => {
//     signInDropdown.classList.remove('none');
//     signInDropdown.classList.toggle('hide');
// });

// document.addEventListener("click", (event) => {
//     const isClickInsideSignInDropdown = signInDropdown.contains(event.target);
//     const issignInBtnClicked = signInBtn.contains(event.target);

//     if (!isClickInsideSignInDropdown && !issignInBtnClicked) {
//         signInDropdow.classList.add('hide');
//         signInDropdow.classList.add('hide');
//     }
// });