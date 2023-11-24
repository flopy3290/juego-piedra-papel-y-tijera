document.addEventListener("DOMContentLoaded", function () {
    // Obtener referencias a los elementos del DOM
    var buttons = document.querySelectorAll(".button-container button");
    var resultText = document.getElementById("result-text");
    var computerChoiceText = document.getElementById("computer-choice");

    // Agregar event listener a cada botón
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Obtener la elección del usuario
            var userChoice = button.id;

            // Generar una elección aleatoria para la computadora
            var choices = ["rock", "paper", "scissors"];
            var computerChoice = choices[Math.floor(Math.random() * choices.length)];

            // Mostrar las elecciones
            console.log("Usuario: " + userChoice);
            console.log("Computadora: " + computerChoice);

            // Mostrar la elección de la computadora en el DOM
            computerChoiceText.textContent = "La computadora eligió: " + computerChoice;

            // Determinar el resultado del juego
            var result = determineWinner(userChoice, computerChoice);

            // Mostrar el resultado en el DOM
            resultText.textContent = "Resultado: " + result;
        });
    });

    // Función para determinar el ganador
    function determineWinner(user, computer) {
        if (user === computer) {
            return "¡Es un empate!";
        } else if ((user === "rock" && computer === "scissors") ||
                   (user === "paper" && computer === "rock") ||
                   (user === "scissors" && computer === "paper")) {
            return "¡Ganaste!";
        } else {
            return "¡Perdiste! La computadora ganó.";
        }
    }
});