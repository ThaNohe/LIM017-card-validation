# MAI Productos Naturales 
## Resumen de Proyecto
La web diseñada busca presentar productos naturales elaborados de manera artesanal por pobladores de distintas comunidades y busca difundirlos por su calidad y porque ademas constituye una excelente alternativa en el mercado 
para personas que realizan compras online y poseen tarjetas de crédito.
## Imagen del Proyecto
![Imagen Text](https://github.com/ThaNohe/LIM017-card-validation/blob/main/src/Imagenes/Proyecto_Vista_1.png)
![Imagen Text](https://github.com/ThaNohe/LIM017-card-validation/blob/main/src/Imagenes/Proyecto_Vista_2.png)
## Usuarios y objetivos del producto
Los usuarios a quines van diriga la web son aquellos que les interese los productos orgánicos y naturales ademas de gustar realizar compras online y poseer una tarjeta de crédito.
Los objetivos de la pag web:
a.-Constituir una herramienta digital de facil acceso que permita realizar compras de manera rapida y sencilla.
b.-Consolidarse como alternativa de compra (canal de venta) para la empresa
## Problemas y necesidades de los usuarios
El producto ayuda a que el público pueda tener al alcance un catálogo diverso que reune productos elaborados por diferentes comunidades , esto facilita la obtención del mismo ya que muchas veces por no elaborarse cerca y no estar
al alcance en el mercado no se consume, siendo estos productos de excelente calidad y alto contenido nutricional.
## Propuesta
El primer boceto realizado fue a lapiz y papel ,solo poseia una vista , una sola sección,que dirigia rapidamente al usuario al área de pago.
![Imagen Text]()
### Feedback
Luego por sugerencia de mis compañeras y coachs se realizaron  cambios para tener dar una mejor experiencia al usuario, se añadieron 2 vistas, la primera posee un catalogo de los productos la cual posee un boton "comprar"que dirige al usuario a la segunda vista directamente a realizar su compra ingresando los datos de su tarjeta y validando
y enmascarando el numero de tarjeta ingresado.
![Imagen Text]()
## Desarrollo del proyecto
El desarrollo busco ejercitar la practicas de realizar pequeñas tareas especificas "miniproyectos" para que poco a poco se llegara al pryecto final, el cual consistía en :
"Validar" se creo un input type number y un botón que ejecute la validación.Si el usuario ingresa la información el programa debe validar dicha informacion (mesaje de tarjeta válida o inválida) , en caso se deje un campo vacio tambien se generaría un aviso (mensaje Campo vacío. Por favor ingrese un número de tarjeta)
"Enmascarar" seguidamente (simultaneamente)de ejecutar la validación de tarjeta , se ejecuta la funcion de enmascarar sea valida o no la numeracion de tarjeta ingresada, la funcion enmascarar consiste en reemplazar todos los numeros por # , excepto los 4 últimos, de la siguiente manera  5118420066344639 a 511842006634####
