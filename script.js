function calcularFactorial() {
    let numero;
    do {
      // Solicita un número al usuario
      let entrada = prompt("Ingresa un número para calcular su factorial:");
      numero = Number(entrada);
  
      // Verifica si es un número válido
      if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
        alert("Por favor ingresa un número entero positivo.");
      }
    } while (isNaN(numero) || numero < 0 || !Number.isInteger(numero));
  
    // Calcular el factorial
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
      factorial *= i;
    }
  
    // Mostrar el resultado en el DOM
    document.getElementById("resultado").innerText = `El factorial de ${numero} es: ${factorial}.`;
  }
  
  // Ejecutar la función al cargar el script
  calcularFactorial();
  