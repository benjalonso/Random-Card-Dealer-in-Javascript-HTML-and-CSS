/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let button = document.getElementById("button");
  let pinta1 = document.getElementById("pinta1");
  let pinta2 = document.getElementById("pinta2");
  let numeroDeCarta = document.getElementById("numeroDeCarta");

  let pintas = ["♦", "♥", "♠", "♣"];
  let numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  button.addEventListener("click", e => {
    let pintaAleatoria = Math.floor(Math.random() * pintas.length);
    pinta1.innerHTML = pintas[pintaAleatoria];
    pinta2.innerHTML = pintas[pintaAleatoria];
    let numeroAleatorio = Math.floor(Math.random() * numeros.length);
    numeroDeCarta.innerHTML = numeros[numeroAleatorio];
    if (pintas[pintaAleatoria] == "♠") {
      pinta1.style.color = "black";
      pinta2.style.color = "black";
    } else if (pintas[pintaAleatoria] == "♣") {
      pinta1.style.color = "black";
      pinta2.style.color = "black";
    } else {
      pinta1.style.color = "red";
      pinta2.style.color = "red";
    }
  });
};
