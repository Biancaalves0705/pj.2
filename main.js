<body>
    <section class="conteudo">
    
   
    <!-- Código omitido -->
    
    </section>
    <script src="main.js"></script>
</body>
const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;

function diminuiTamanho(){ <body>
    <section class="conteudo">
    
   
    <!-- Código omitido -->
    
    </section>
    <script src="main.js"></script>
</body>
const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;

function diminuiTamanho(){ 
    tamanhoSenha = tamanhoSenha - 1;
}

console.log(botoes);
function diminuiTamanho(){ 
    tamanhoSenha = tamanhoSenha - 1;
    numeroSenha.textContent = tamanhoSenha
}

function aumentaTamanho() {
    if (tamanhoSenha < 20) {
            // tamanhoSenha = tamanhoSenha + 1;
            tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
}
    tamanhoSenha = tamanhoSenha - 1;
}

console.log(botoes);
function diminuiTamanho(){ 
    tamanhoSenha = tamanhoSenha - 1;
    numeroSenha.textContent = tamanhoSenha
}

function aumentaTamanho() {
    if (tamanhoSenha < 20) {
            // tamanhoSenha = tamanhoSenha + 1;
            tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
}
// código omitido

const campoSenha = document.querySelector('#campo-senha');

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
geraSenha();

function geraSenha(){
 for (let i = 0; i < tamanhoSenha;i++) {
     let numeroAleatorio = Math.random()*letrasMaiusculas.length;
     numeroAleatorio = Math.floor(numeroAleatorio);
     console.log(letrasMaiusculas[numeroAleatorio]);
 }
}

campoSenha.value = letrasMaiusculas;
// código omitido

function diminuiTamanho(){
    if (tamanhoSenha > 1){
       // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

function aumentaTamanho(){
    if (tamanhoSenha < 20){
       // tamanhoSenha = tamanhoSenha+1;
       tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

// código omitido


function geraSenha(){
    let senha = '';
    for (let i = 0; i < tamanhoSenha;i++){
            let numeroAleatorio = Math.random()*letrasMaiusculas.length;
            numeroAleatorio = Math.floor(numeroAleatorio);
            senha = senha + letrasMaiusculas[numeroAleatorio];
    }
    campoSenha.value = senha;
    }
