/* Fruit counter which counts any amount of fruit picked and/or eaten and updates it to the total */

let fruitTotal = "";
let fruitCollected = 0;

//clicking the generate-total button will calculate the values and display a message

document
  .getElementById("generate-total")
  .addEventListener(
    "click",
    function (fruitPicked, fruitEaten, fruitStored, fruitMessage) {
      //converts fruit picked/eaten/total from strings into numbers
      fruitPicked = parseFloat(
        document.getElementById("picked-fruit-num").value
      );
      fruitEaten = parseFloat(document.getElementById("eaten-fruit-num").value);
      fruitStored = parseFloat(
        document.getElementById("stored-fruit-num").value
      );

      //generates a message based on the number input
      if (fruitStored > 0 && fruitPicked === 0 && fruitEaten === 0) {
        fruitMessage = document.getElementById("generate-message").textContent =
          "No fruit picked today but I still have some fruit stored!";
      } else if (fruitEaten > 0 && fruitPicked === 0) {
        fruitMessage = document.getElementById("generate-message").textContent =
          "I've eaten too much! Need to pick more...";
      } else if (fruitStored > 0 && fruitPicked > 0 && fruitEaten >= 10) {
        fruitMessage = document.getElementById("generate-message").textContent =
          "I've eaten too much! Need to pick more...";
      } else if (fruitPicked > 0) {
        fruitMessage = document.getElementById("generate-message").textContent =
          "Another successful day of picking fruit!";
      } else if (fruitEaten > 0) {
        fruitMessage = document.getElementById("generate-message").textContent =
          "I've eaten too much! Need to pick more...";
      } else if (fruitStored > 0) {
        fruitMessage = document.getElementById("generate-message").textContent =
          "Another successful day of picking fruit!";
      } else {
        fruitMessage = document.getElementById("generate-message").textContent =
          "No fruit today :(";
      }

      //calculates total fruit from all number inputs
      fruitCollected = fruitStored + fruitPicked - fruitEaten;

      //converts total fruit from number to string
      fruitTotal = fruitCollected.toString();

      //displays total fruit
      document.getElementById("output-num").textContent = fruitTotal;

      //ensures message is displayed
      fruitMessage = document.getElementById("generate-message").style.display =
        "block";
    }
  );
