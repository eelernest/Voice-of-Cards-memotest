let cardsAmount = 24;
let iconos = [];
let selectors = [];

generarTablero();

function cargarIconos() {
    iconos = [ `src="img/cardsjpg/card1.jpg"`,
                `src="img/cardsjpg/card2.jpg"`,
                `src="img/cardsjpg/card3.jpg"`,
                `src="img/cardsjpg/card4.jpg"`,
                `src="img/cardsjpg/card5.jpg"`,
                `src="img/cardsjpg/card6.jpg"`,
                `src="img/cardsjpg/card7.jpg"`,
                `src="img/cardsjpg/card8.jpg"`,
                `src="img/cardsjpg/card9.jpg"`,
                `src="img/cardsjpg/card10.jpg"`,
                `src="img/cardsjpg/card11.jpg"`,
                `src="img/cardsjpg/card12.jpg"`,
            ]
    
};

function generarTablero() {
        cargarIconos();
    
    let tablero = document.getElementById("tablero");

    let tarjetas =[]; 
    for (let i = 0; i < cardsAmount; i++) {
        tarjetas.push(`
            <div class="card area col-2 col-lg-2 m-1" onclick="cardSelector(${i})">
                <div class="cards" id="cards${i}">
                    <div class="face oculta card-img" id="back${i}">
                        <img ${iconos[0]} class="face card-img">
                    </div>
                    <div class="face card-img">
                        <img src="img/cardsjpg/reverse.jpg" alt="" class="face card-img">
                    </div>
                </div>
            </div>
        `)
        if (i%2==1) {
          iconos.splice(0,1);
      }
    }
        tarjetas.sort( () => Math.random() -0.5 );
        tablero.innerHTML=tarjetas.join("");
;}

function cardSelector(i){
    let card = document.getElementById("cards" + i);
    if(card.style.transform != "rotateY(180deg)"){
        card.style.transform = "rotateY(180deg)"
        selectors.push(i);
    }
    if(selectors.length == 2){
        desSelectors(selectors)
        selectors = [];
    }
}

function desSelectors(selectors){
    setTimeout(() => {

            let back1 = document.getElementById("back" + selectors[0]);
            let back2 = document.getElementById("back" + selectors[1]);

            if (back1.innerHTML != back2.innerHTML) {
                let c1 = document.getElementById("cards" + selectors[0]);
                let c2 = document.getElementById("cards" + selectors[1]);
                c1.style.transform = "rotateY(0deg)";
                c2.style.transform = "rotateY(0deg)";
            }
            else {
                back1.style.opacity = 0.2;
                back2.style.opacity = 0.2;
            }
            if (verif()) {
                swal.fire({
                    title: "Congratulations!",
                    text: `The game has finished`,
                    icon: `success`,
                    confirmButtonColor: "#3d3d3d",
                    color:"white",
                    background:"none",
                })
            }


        }, 1000);
}
function verif() {
    for (let i=0; i<cardsAmount; i++) {
        let cardBack = document.getElementById("back" + i); 
        if(cardBack.style.opacity != "0.2"){
            return false;
        }
    }
    return true;
    
}