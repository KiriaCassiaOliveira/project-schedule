import validator from 'validator';

export default class Login {
  constructor(formClass){
  this.form = document.querySelector(formClass);
  }

  init(){
    this.events();
  }
  events(){
      if(!this.form) return;
      this.form.addEventListener('submit', e => {
        e.preventDefault();
        this.validate(e);
      })
  }
  validate(e){
    const el = e.target;
    const emailInput = el.querySelector('input[name="email"]');
    const passwordInput = el.querySelector('input[name="password"]');
    let error = false;
    let errorMessage = el.querySelector('.error');
    

    if(!validator.isEmail(emailInput.value)){
     errorMessage.innerText = 'e-mail inválido.';
     error = true;
    }

    if(passwordInput.value.length < 3 || passwordInput.value.length > 50){
      errorMessage.innerText = 'senha inválida.';
      error = true;
    }

    if(emailInput.value === '' || passwordInput === '') errorMessage.innerText = 'preencha os campos.';

    if(!error) el.submit();

  }
}