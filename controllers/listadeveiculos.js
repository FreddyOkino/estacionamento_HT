class ListadeVeiculos {
    constructor() {

    }
    construirlista() {
        const campodelista = document.getElementById('Listadeveiculos')
        campodelista.innerHTML = ''
        for (let index = 0; index < listadeveiculos.length; index++) {
            const veiculo = listadeveiculos[index];
            //console.log(carro)
            //const aux = '<div> Placa: ' + carro.placa + ' - Cor: ' + carro.cor + ' - Marca: ' +  carro.marca + ' - Modelo: ' + carro.modelo + '</div>'
            const item = `<div>Placa: ${veiculo.placa} - Cor: ${veiculo.cor} - Marca: ${veiculo.marca} - Modelo: ${veiculo.modelo} </div>`
            campodelista.innerHTML += item 
        }
    }
}
const lista = new ListadeVeiculos()