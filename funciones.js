// - Una función sin parámetros que devuelva siempre "true"
function SiempreTrue() {
    return true;
}
console.log(SiempreTrue())
// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

const saludo = new Promise((resolve,reject)=>{  
    if(true){
        resolve()
    }else{
        reject()
    }
})

saludo.then(()=>{
    setTimeout(()=>{
        console.log("Hola soy una promesa");
    }, 5000);
})

.catch(()=>console.log("ERROR"))
        

// - Una función generadora de índices pares automáticos

function* pairNumbers(){
  let n =0;
  while(n<10){
      n+=2;
      yield n;
  }
}

let numerosPares=pairNumbers();
console.log(numerosPares.next().value);
console.log(numerosPares.next().value);
console.log(numerosPares.next().value);
console.log(numerosPares.next().value);
console.log(numerosPares.next().value);
console.log(numerosPares.next().value);





