const paragrafo = document.querySelector('.paragrafo');
const ps = document.querySelectorAll('p');
//p para paragrafo  ".p" seria para uma class

const estilosBody = getComputedStyle(document.body);
const BackGroundColorBody = estilosBody.backgroundColor;
console.log(BackGroundColorBody);


for (let p of ps){
   p.style.backgroundColor = BackGroundColorBody;
   p.style.color = 'white'
   

}

//while

let i = 0;

while(i <=10){

}


