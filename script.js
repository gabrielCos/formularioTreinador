const formulario = document.getElementById('form');
formulario.addEventListener("submit", submit)  

const botao = document.getElementById('enviar');
botao.addEventListener("click", enviar);

function enviar(e) {
    e.preventDefault();
    exibirTexto();
    verificaInputs();
}

function exibirTexto() {
/*
    //input no qual eu vou atrás do arquivos
    let input = document.getElementById('file');

    //armazenando o primeiro arquivo dentro da File List
    let file = input.files[0];
    console.log(file);

    if (file) {
        let reader = new FileReader();
        reader.onload - function(e) {
            var conteudoDoArquivo = e.target.result;

            console.log(conteudoDoArquivo)
        }
        reader.readAsText(file)
    } else {
        console.log("Falha ao carregar o arquivo")
    }*/

    //variável armazenando o input
    const input = document.getElementById('file');

    //variável armazenando o primeiro arquivo da fileList
    const file = input.files[0];


    //condicional para criar uma instância FileReader
    if (file) {
        var reader = new FileReader();
        
        //definindo um evento para quando o arquivo for carregado
        reader.onload = function(e){
            //acessando o conteúdo do arquivo e printando no console
            var conteudoDoArquivo = reader.result;
            console.log(conteudoDoArquivo);
        };
        reader.readAsText(file);

    }
}

function verificaInputs() {
    const exclamacoes = document.querySelectorAll('.exclamacao');
    const perguntas = document.querySelectorAll('.perguntas');
    const perguntasArray = [...perguntas]


    //verificando se o campo está vazio, caso esteja, pegando o índice conrrespondente e tornando o icon de exclamação visível
    perguntasArray.forEach(function(pergunta, index) {
        if(pergunta.value === '') {
            pergunta.style.borderColor = 'red';
            exclamacoes[index].style.display = 'block'
        }else {
            pergunta.style.borderColor = 'green';
        }
    })
}

function submit(e) {
    e.preventDefault();
}

