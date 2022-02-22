//Importando el mensaje 
import validator from "./validator.js";
const msg = document.getElementById('mensaje').innerHTML;
console.log(msg);

const validateInformation = document.getElementById('btn');
validateInformation.addEventListener('click', validarCardNumber );

function validarCardNumber(){
    let cardNumber=document.getElementById('cardNumber').value;
    let maskedCardNumber = validator.maskify(cardNumber);
    console.log(maskedCardNumber);

    if(cardNumber==''){
        document.getElementById('mensaje').innerHTML='Por favor ingresar número de tarjeta válida';
    }
    else{
        document.getElementById('mensaje').innerHTML='Información de tarjeta válida';   
        validator.isValid(cardNumber)
        
    }
    
    
}



//function isCorrectCardNumber(dato){
//    let patron = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
//   return patron.test(dato);
//}


//let  inputCardNumber=

//const paintValidate = () => {
//    alertSuccess.textContent = "¡Proceso exitoso!"
//}
//paintValidate();
