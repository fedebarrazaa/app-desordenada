import './components/result-box'; //IMPORTA result-box.ts

//FUNCION PRINCIPAL PARA CONVERTIR LA PALABRA DESORDENADA
export function messyWord(word:string) { 
     return word
     .split('')
     .sort(() => 0.5 - Math.random())
     .join('');
}

