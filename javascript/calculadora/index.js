function criarCalculadora (){

    return {
        display: document.querySelector('.display'),
        
        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e =>{
                if(e.which == 13){
                    this.realizaConta();
                   
                }
            })
        },

        clearDisplay(){
            this.display.value = '';
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta(){
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta) {
                    alert('Conta invalida');
                    return;
                }

                this.display.value = String(conta);
            } catch(e){
                alert('Conta invalida')
                return;
            }
        },

        cliqueBotoes(){
            document.addEventListener('click', e =>{
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay( )
                }

                if(el.classList.contains('btn-del')){
                    this.apagaUm( )
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta( )
                }
            });
        },

        btnParaDisplay(valor){
            this.display.value += valor
        }

    };
}

const calculadora = criarCalculadora();
calculadora.inicia();