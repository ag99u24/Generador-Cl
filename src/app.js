import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  let who = ["Vecna", "Darth Vader", "Joe Goldberg", "Joffrey Baratheon", "Voldemort"];
  let action = ["attacked", "killed", "kidnapped", "lost", "murdered"];
  let what = ["the death star", "Ned Stark", "the upside down", "Harry potter", "Guinevere Beck"];
  let when = ["while trying to catch Eleven", "while fighting with Luke Skywalker", "to destroy the horcruxes", "so the police dont find out", "so as not to lose the throne"];
  function randomItem(num) {
    return num[Math.floor(Math.random() * num.length)];
  }
  let personaje = randomItem(who);
  let excuse = `${personaje} ${randomItem(action)} ${randomItem(what)} ${randomItem(when)}.`;
  document.getElementById("excuse").innerText = excuse;

 

  let imagenes = {
    "Vecna": "https://media4.giphy.com/media/v1.Y2lkPTZjMDliOTUya2kyZjd3bXY3cG9xZDgyNjdscGczcGN1bXAwdmpzYXlseHp3NDFuNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/01YNlwcyv1uryCPqUl/source.gif",
    "Darth Vader": "https://i.pinimg.com/originals/41/5d/15/415d15a93f65bb9e44b2dc05b912cb7d.gif",
    "Joe Goldberg": "https://i.pinimg.com/originals/0d/19/4d/0d194d2aa3bbc0f0c2d0fe42b05ae274.gif",
    "Joffrey Baratheon": "https://media.tenor.com/lC7nN5Q4PuAAAAAM/clapping-applause.gif",
    "Voldemort": "https://media.tenor.com/TtJFEH_2Ux8AAAAM/harry-potter-voldemort.gif",
  
  }
  document.getElementById("imagen").src = imagenes[personaje];







  console.log("Hello Rigo from the console!");

};
