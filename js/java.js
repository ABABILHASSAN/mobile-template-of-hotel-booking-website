
// menuSection starts

window.onscroll = () =>{
    menu.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}

document.querySelector('#menu-icon').onclick = () =>{
    document.querySelector('#menu-section').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#menu-section').classList.remove('active');
}

// menuSection ends
