const input = document.querySelectorAll('.sign-section-form__input');
const convertedInput = Array.from(input);

convertedInput.forEach(function(input){
    input.addEventListener('focusin', (event)=>{
        event.currentTarget.parentElement.classList.add('sign-section-is--active');
    });
    input.addEventListener('focusout', (event)=>{
    });
    input.addEventListener('invalid', (event)=>{
        event.currentTarget.parentElement.classList.add('sign-section-is--invalid');
        event.currentTarget.parentElement.classList.remove('sign-section-is--valid');
    });
    input.addEventListener('valid', (event)=>{
        event.currentTarget.parentElement.classList.remove('sign-section-is--invalid');
        event.currentTarget.parentElement.classList.add('sign-section-is--valid');
    });
})
