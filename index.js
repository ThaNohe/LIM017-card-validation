//Importando el mensaje 
import validator from "./validator.js";
for(let i=0; i<=2; i++){
    document.getElementsByClassName('btnBuy')[i].addEventListener('click',() => {
    document.getElementById('cont1').style.display='none';
    document.getElementById('cont2').style.display='block';
    })
}

//const message = document.getElementById('message');
    document.getElementById('btn').addEventListener('click', () => {
    //console.log('me diste click');
    let cardNumberValue = document.getElementById('cardNumber').value;
    //console.log(cardNumberValue);
    let maskedCardNumber = validator.maskify(cardNumberValue);
    let validar = validator.isValid(cardNumberValue);
    const msgV = document.getElementById('msgV');
    const msgM = document.getElementById('msgM');
    
    if (cardNumberValue ===''){
        msgV.innerHTML = '🚫Campo vacío. Por favor ingrese un número de tarjeta❕❕';
        msgM.innerHTML =  '';
    }
    else{
        if(validar === true) {
        msgV.style.color = 'black';
        msgM.style.color = 'black';
        msgV.innerHTML = '✅Tarjeta Válida';
        msgM.innerHTML =  maskedCardNumber;
        }
        else{
        msgV.innerHTML = '❌Tarjeta Inválida';
        msgM.innerHTML =  maskedCardNumber;
    } 
    }  
})

