function animatedForm() { 
    const arrows = document.querySelectorAll('.fa-arrow-down');
    
 arrows.forEach(arrow => { 
    arrow.addEventListener("click", () => { 
        const input = arrow.previousElementSibling;
        const parent = arrow.parentElement;
        const nextForm = parent.nextElementSibling;
        
        if (input.type === 'text' && validation(input)) {
            nextSlide(parent, nextForm);
        } else if (input.type === 'email' && validationEmail(input)) {
            nextSlide(parent, nextForm);
        } else if (input.type === 'password' && validation(input)) { 
            nextSlide(parent, nextForm);
        } else {
            parent.style.animation = 'shake 0.5s ease';
        }
        parent.addEventListener('animationend', () => {
            parent.style.animation = "";
        })
        })
})
}

function validation(user) { 
    if (user.value.length < 6) {
        console.log('not enought');
        error('red');
    } else { 
        error('green');
        return true;
    }
}
function validationEmail(email) { 
    const validation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (validation.test(email.value)) {
        error('green');
        return true;
    } else { 
        error('red');
    }
}
function nextSlide(parent, nextForm) { 
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

function error(color) { 
    document.body.style.backgroundColor = color;
}

animatedForm();
