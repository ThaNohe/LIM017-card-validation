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
         if(sumaTotal % 10 ==0){
            //console.log('válido');
            answer = true;
         }
         else{
            //console.log('no válido')
            answer = false;
         }
         return answer;
      },
   maskify: function (number) {
         let myArray = Array.from(number);
         //console.log(myArray);
         let myArrayNew = [];
         //console.log(myArrayNew);
         for (let i = 0; i < myArray.length; i++){
            myArrayNew.push(myArray[i]);
            //console.log(myArrayNew);
            myArray.splice(0,myArray.length-4,"*","*","*","*","*","*","*","*","*","*","*","*")
            let arrayMask= myArray.join('');
            //console.log(arrayMask);
            return arrayMask;
         }  
         
 }
}
export default validator;