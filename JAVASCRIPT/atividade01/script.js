function escopoLocal(){
    const form = document.querySelector('.form');
    const result = document.querySelector('.resultado');
    const pessoas = [];//arry

    function recebeEventoForm(evento){
        evento.preventDefault();

        const nome = form.querySelector('.Nome');
        const sobrenome = form.querySelector('.Sobrenome');
        const peso = form.querySelector('.Peso');
        const altura = form.querySelector('.Altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        console.log(pessoas);

        result.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value}${altura.value}`
    }

    form.addEventListener('submit', recebeEventoForm);


}
escopoLocal();
