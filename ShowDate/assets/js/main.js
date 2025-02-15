

// output: sabado, 15 de fevereiro de 2025 22:52

function ShowDate(){

    const data = new Date();
    const main = document.getElementById('Texto');

    main.innerHTML = `${data.getDay()},  ${data.getDate()}, de  ${data.getMonth()} de ${data.getFullYear()} as ${data.getHours()}: ${data.getMinutes()} : ${data.getSeconds()}`
   // main.innerHTML = data.toString();


}
 ShowDate();

//getDay - dia
//getMonth - mes
//getFullYear - Ano
