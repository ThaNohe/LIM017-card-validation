//Importando el mensaje 
import validator from "./validator.js";

const message = document.getElementById('message');
const validateInformation = document.getElementById('btn');
validateInformation.addEventListener('click', () => {
    //console.log('me diste click');
    let cardNumberValue = document.getElementById('cardNumber').value;
    //console.log(cardNumberValue)
    let maskedCardNumber = validator.maskify(cardNumberValue);
    let validar = validator.isValid(cardNumberValue);
    const msgV = document.getElementById('msgV');
    const msgM = document.getElementById('msgM');

    if(validar == true) {

        msgV.innerHTML = 'Tarjeta Válida';
        msgM.innerHTML =  maskedCardNumber;
        
    }else{
        msgV.innerHTML = 'Tarjeta Inválida';
        msgM.innerHTML =  maskedCardNumber;
    }   
})

/*if(cardNumberValue === 'return true'){
        const message = document.getElementById('msg')
        message.innerText = 'Tarjeta Válida'
        console.log('message');
    }*/



    //console.log(number);
    
    
    /*if(cardNumber==''){
        document.getElementById('mensaje').innerHTML='Por favor ingresar número de tarjeta válida';
    }
    else{
        document.getElementById('mensaje').innerHTML='Información de tarjeta válida';   
        validator.isValid(cardNumber)
        //if validator
    }*/  
//}



//function isCorrectCardNumber(dato){
//    let patron = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
//   return patron.test(dato);
//}


//let  inputCardNumber=

//const paintValidate = () => {
//    alertSuccess.textContent = "¡Proceso exitoso!"
//}
//paintValidate();
