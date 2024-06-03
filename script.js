let nombreAleatoire = Math.floor(Math.random() * (100 - 1 + 1)) + 1
let button = document.querySelector("button");
let span = document.getElementById("plusGrand");
let sept = document.getElementById("sept");
let tentative=10
sept.innerText= tentative

        button.addEventListener("click", function(){
        let input = parseInt(document.getElementById("input").value);
        
        if (isNaN(input)) {
        span.innerText="Le champ est vide !"
        } else {
            if (tentative === 0) {
                span.innerText = "Vous avez épuiser le nombre de tentatives";
                button.innerText = "Recommencer";
                return;
            }

            if (input > nombreAleatoire) {
                span.innerText = "le nombre aléatoire est plus petit";
            } else if (input < nombreAleatoire) {
                span.innerText = "le nombre aléatoire est plus Grand";
            }
            
            tentative--;
            sept.innerText = tentative;
    
            if (input == nombreAleatoire) {
                span.innerText = (" Bravo vous avez Gagner !");
                button.innerText = "Recommencer";        
            }
            document.getElementById("input").value = "";
        }
   });