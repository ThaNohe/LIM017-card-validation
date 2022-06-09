const validator = {
   isValid: function (number) {
      //Algoritmo Luhn:
      //Convertir los inputs ingresados por el usuario a Array y revertirlo
      let myArray = Array.from(number);
      console.log("mi numero ingresado es " + myArray);
      let myArrayReverse = myArray.reverse();
      console.log("mi numero revertido es " + myArrayReverse);

      //Crear variables Suma posiciones pares y posiciones impares
      let sumaPares = 0;
      let sumaImpares = 0;

      for (let i = 0; i < myArrayReverse.length; i++) {
         //console.log(typeof myArrayReverse[i])
         if (i % 2 !== 0) {
            console.log("entre al if");
            let positionPar = parseInt(myArrayReverse[i])* 2;
            //console.log(typeof positionPar);
            console.log("mi numero par multiplicado por 2 es " + positionPar);
           if (positionPar >= 10) {
              positionPar=positionPar-9;
               console.log(positionPar);
            }
            sumaPares =sumaPares+positionPar;    
         }
         else {
               let positionImpar = parseInt(myArrayReverse[i]);
               sumaImpares=sumaImpares+positionImpar;
         }
         }
         console.log('Esta es la suma de los números pares:' + sumaPares);
         console.log('Esta es la suma de los números impares:' + sumaImpares);
         let sumaTotal=sumaPares+sumaImpares;
         let answer;
         if(sumaTotal % 10 === 0){
            //console.log('válido');
            answer = true;
         }
         else{
            //console.log('no válido')
            answer = false;
         }
         return answer;
      },
   maskify: function (cardNumber) {
      let cardArray = Array.from(cardNumber);
      //console.log(cardArray);
      for(let i=0; i<cardArray.length-4 ; i++){
         cardArray[i]="#";
      }
      return cardArray.join('');
      //console.log(cardArray);     
  }
}
//console.log(validator.isValid("5118420066344639");
export default validator;
