const correcao =(nome)=>{
    let letras = [];
    
    for(let i = 0; i < nome.length; i++){
        if(i === 0 || nome[i - 1] === ' '){
            letras.push(nome[i].toUpperCase())
        }
        else{
            letras.push(nome[i])
        }

          console.log("Letra atual:", nome[i]);
          
    }
    return letras.join('');
  
}

console.log(correcao("corrige a primera letra para maiuscula"))