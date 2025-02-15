const form = document.querySelector('#formulario');
const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');

form.addEventListener('submit', function (evento){
  evento.preventDefault(); //impedir que a açao seja executada
  
  const inputPeso = evento.target.querySelector('#peso');
  const inputAlt = evento.target.querySelector('#altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAlt.value);
    

  if(peso == ' ' || altura == ' '){
    setResultado('vazio',' ');
    return

  }
  else if (!peso){
    setResultado('peso invalido',false);
    return 
  } 
  else if (!altura){
    setResultado('altura invalida',false);
    return
  }
 

  const imc = getImc(peso,altura);
  const nivelImc = getNivel(imc);
  const msg = `O seu IMC é ${imc} (${nivelImc}).`
  setResultado(msg,true);
  
 
});
//
function getNivel(imc){
  const nivel = ['Abaixo do peso','peso Normal','Sobrepeso','Obesidade grau 1','Obesidade grau 2', 'Obesidade grau 3'];

  if (imc >=40){
    return nivel[5];
  }
  if (imc >=34.9){
    return nivel[4];
  }
  if (imc >=29.9){
    return nivel[3]; 
  }
  if (imc >=24.9){
    return nivel[2];
  }
  if (imc >=18.5){
    return nivel[1];
  } if (imc >18.5){
    return nivel[0];
  }
}

function getImc(peso,altura){
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}
//
function creatP(){ //cria um paragrafo dentro da <div>
  const p = document.createElement('p');
  return p;
}
//
function setResultado (msg,isValid){
  const  resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';
  const p = creatP();

  if(isValid === true){
     p.classList.add('msgAccept');
    }else if (isValid === ' '){
      p.classList.add('msgClear');
    }
    else{
      p.classList.add('msgErro');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
  // resultado.innerHTML = `<p>${'mensagem'}</p>`; // maneira direta
}






