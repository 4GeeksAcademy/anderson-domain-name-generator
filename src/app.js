/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extension = [".com", ".net", ".us", ".io", ".org"];

function generateDomainName() {
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < extension.length; l++) {
          let domainString = pronoun[i] + adj[j] + noun[k] + extension[l];

          const paragraph = document.createElement("p");

          const content = document.createTextNode(domainString);
          paragraph.appendChild(content);

          const element = document.getElementById("domain-names");
          element.appendChild(paragraph);
          console.log(domainString);
        }
      }
    }
  }
}
window.onload = function() {
  generateDomainName();
};
