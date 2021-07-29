// let nombre = `Julio Cesar Alarcon`;

//Pos Incremento 
// let num = 0
// num ++;
// console.log(num);

// num ++;
// console.log(num);

// num += 2
// console.log(num);

//Pre Incremento 
// let a = 4
// let z = ++a 
// console.log(z)

// num = 4 
// ++num;
// console.log(num);

// num = 4;
// num++;
// console.log(num)

// Jeraquia de Operadores 
// num =( 8-2*5+8%10/5);
// console.log(num)

//Ejercicio
//Pedir 2 datos por pantalla y almacenarlo en 2 variables
//diferentes
//Variable 1(num1)  Variable2(numero2)
//Realizar todas las operaciones aritmeticas vistas en clase 
//Extra: Por medio de una ventana emergente (alert), dar la máxima 
//información del dessarrollador del aplicativo en Cuestión 
// Usar los máximos 

alert(`Programa creado por Julio Cesar Alarcon, el cual calcula el resultado de dos variables`)
let num1, num2; 
num1=prompt(`Ingrese el primer número`)
num2=prompt (`Ingrese el segundo número`)
console.log(`El primer número es:  ${num1}`)
console.log(`El segundo número es:  ${num2}`)

//Suma
resultadoSuma=(parseInt(num1)+ parseInt(num2));
 console.log(`El resultado de la suma es: ${resultadoSuma}`);
    
 //Resta
resultadoResta=(parseInt(num1)-parseInt(num2))
console.log(`El resultado de la resta es: ${resultadoResta}`);
    
//Multiplicación 
resultadoMultiplicacion=(parseInt(num1)*parseInt(num2))
console.log(`El resultado de la multiplicación es: ${resultadoMultiplicacion}`);
    
//División
resultadoDivision=(parseInt(num1)/parseInt(num2))
console.log(`El resultado de la división es: ${resultadoDivision}`);
    
//Operador Modulo 
resultadoModulo=(parseInt(num1)%parseInt(num2))
console.log(`El residuo de la división es: ${resultadoModulo}`);
    
//Posincremento
resultadoPosIncremento=num1++
console.log(`El resultado del posincremento es: ${resultadoPosIncremento}`);

//Preincremento
resultadoPreIncremento=++num1
console.log(`El resultado del preincremento es: ${resultadoPreIncremento}`);
    
      
    