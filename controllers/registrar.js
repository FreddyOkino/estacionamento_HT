


class Registrarveiculo{
    constructor(){
        this.listadeveiculos = []
    }
    lerEadicionar(){
        const veiculos = this.Campos()
        this.adicionarNaLista(veiculos)
        this.limparCampos()
        console.log(this.listadeveiculos)
    }
    Campos(){
        let placainput = document.getElementById("placa").value
        let modeloinput = document.getElementById("modelo").value
        let marcainput = document.getElementById("marca").value
        let corinput = document.getElementById("cor").value
        let  tipoinput= document.getElementById('tipo').value
        
        if (!tipoinput || !placainput) {
            alert("Preencha Tipo e Placa!!!!!!");
            return;
        }
        
    
        const veiculos= new veiculo(
            placainput,
            modeloinput,
            marcainput,
            corinput,
            tipoinput)
        console.log(veiculos)
        return veiculos

    }

    adicionarNaLista(veiculos){
        this.listadeveiculos.push(veiculos)
    }

    limparCampos(){
        document.getElementById("placa").value = ''
        document.getElementById("modelo").value = ''
        document.getElementById("marca").value =''
        document.getElementById("cor").value =''
        document.getElementById('tipo').value =''
    }
}
const Resgistrodeveiculo =new Registrarveiculo()