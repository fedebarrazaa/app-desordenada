import { messyWord } from '../main.ts'; //IMPORTAMOS LA FUNCION DEL ARCHIVO MAIN.TS

class MiBox extends HTMLElement{ 
    constructor(){ 
        super(); 
        this.render(); 
    }
    render() {
        const div = document.createElement("div");  
        div.innerHTML = `
        <section> 
         <div class="box_text"> 
          <h1> Desordenador de Palabras </h2>
          <p>Escribí una palabra y presioná Enter para comenzar</p>
         </div>
          <form> 
            <input type="text" placeholder="Escribi una palabra..." required>
            <button class="boton-elegante" type="submit">Agregar</button>
            <div id="miDiv">
            <p></p>
            </div>
          </form> 
         </section> 

        <style> 
        section {
         width: 350px;
         height: 600px;
         border-radius: 2em;
         border: 1px solid white;
         box-shadow: 0 10px 30px rgba(102, 51, 238, 0.3);
         display: flex;
         flex-direction: column; 
         justify-content: space-between;
         text-align: center;
         padding: 15px;
        }
        .box_text {
         display:flex;
         flex-direction: column;
         text-align: center;
        }
        h1 {
         color: #f0f0ff; 
         font-family: "Outfit", sans-serif;
         font-size: 30px;        
        }
        p {
         color: #c3baff; 
         font-family: "Outfit", sans-serif;
         font-size: 18px;
         margin-top: 200px;
        }
        form {
         display: flex;
         justify-content: center;
         flex-direction: column;
        }
        input {
         width: 320px;
         height: 30px;
         padding: 10px;
         margin: 5px; 
         border-radius: 8px;
         border: none;
         background-color: rgba(255, 255, 255, 0.1);
         color: #f0f0ff;
         font-family: "Outfit", sans-serif;
         font-size: 16px;
        }
      
        .boton-elegante {  
         width: 340px;
         height: 50px;
         padding: 10px 30px;
         margin: 5px;
         border: 2px solid none;
         background-color: rgba(255, 255, 255, 0.1);;
         color: #ffffff;
         font-size: 1.2rem;
         cursor: pointer;
         border-radius: 8px;
         border: 1px solid transparent;
         transition: all 0.4s ease;
         outline: none;
         position: relative;
         overflow: hidden;
         font-weight: bold;
         }
        .boton-elegante::after {
         content: "";
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         background: radial-gradient(
         circle,
         rgba(199, 125, 255, 0.25) 0%,  
         rgba(123, 44, 191, 0) 70%      
         );
         transform: scale(0);
         transition: transform 0.5s ease;
        }

        .boton-elegante:hover::after {
         transform: scale(4);
        }
        .boton-elegante:hover {
         border-color: #3b0060;
         background: radial-gradient(150% 150% at 50% 20%, #9b5de5 30%, #7b2cbf 70%, #c77dff 100%);
        }    
        button:hover {
         background-color: #7a4aff;
        }

        #miDiv {
         width: 330px;
         height: 30px;
         margin: 10px; 
         color: #f0f0ff;
         font-family: "Outfit", sans-serif;
         font-size: 16px;
         text-aling: center;
        }
        </style>
        `

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(div);

        this.buttonEvent(div); //LLAMO A LA FUNCION 
         }

//FUNCION PARA EL EVENTO BOTON
buttonEvent(div: HTMLElement) { //DECLARA UNA FUNCION QUE ESPERA UN ELEMENTO HTML
  const boton = div.querySelector("form"); //BUSCA EL ELEMENTO form DENTRO DEL DIV
    boton?.addEventListener('submit', event => {  //COMIENZA EL EVENTO 
     event.preventDefault(); //EVITA QUE SE RECARGUE LA PAGE 
      const valor = boton.querySelector('input[type="text"]') as HTMLInputElement; //BUSCA EL ELEMNTO input... DENTRO DEL form
       const input = valor.value; //EXTRAE EL TEXTO QUE EL USUARIO ESCRIBIO
        const messyWordApp = messyWord(input); //LLAMA A LA FUNCION DE main.ts Y GUARDA EL RESULTADO
       
        const palabra = div.querySelector('#miDiv');  //BUSCA EL ELEMENTO #miDiv
         palabra!.textContent = messyWordApp; //ESTABLECE EL CONTENIDO DEL TEXTO de #miDiv PARA QUE SEA LA PALABRA YA DESORDENADA
          valor.value = ''; //LIMPIA EL input
     })
    }
  }
customElements.define('mi-box', MiBox);
export default MiBox;





 