

export function resultados(elemento, respostas, flag = false){
    
    
    var divResultado = document.createElement('div');
    divResultado.setAttribute('class', 'resultadoCalculoLong');


    var titutoResp = document.createElement('p');
    titutoResp.setAttribute('class', 'titutoResp');
    titutoResp.innerHTML = "Resposta obtida:"

    divResultado.appendChild(titutoResp)

    
    for (let i =0 ; i < respostas.length ; i ++){
        
        var legendaResp = document.createElement('p')
        legendaResp.setAttribute('class', 'legendaResp')

        var valorResp = document.createElement('p')
        valorResp.setAttribute('class', 'valorResp')

        legendaResp.innerHTML = Object.keys(respostas[i])[0]
        valorResp.innerHTML = Object.values(respostas[i])[0] 
        
        divResultado.appendChild(legendaResp)
        divResultado.appendChild(valorResp)
    }
    
    var divBotoes = document.createElement('div');
    divBotoes.setAttribute('class', 'botoesResposta');
    

    var botaoEq = document.createElement('a');
    botaoEq.setAttribute('class', 'botaoEq');
    botaoEq.innerHTML = 'Equações';

    var botaoFigs = document.createElement('div');
    botaoFigs.setAttribute('class', 'botaoFigs' );
    botaoFigs.innerHTML = 'Armaduras'

    
    divBotoes.appendChild(botaoEq)
    divBotoes.appendChild(botaoFigs)
    divResultado.appendChild(divBotoes)

    
    
    var linha = document.createElement('hr');
    if(respostas.length === 0){
        console.log("nenhum elemento")
    }

    else if (elemento.children.length === 1){
        
        elemento.appendChild(linha);
        elemento.appendChild(divResultado);
    
    }else{
        console.log(elemento.children.length)
        elemento.removeChild(elemento.children[1])
        elemento.removeChild(elemento.children[1])
        elemento.appendChild(linha);
        elemento.appendChild(divResultado);
       
    }
    window.scrollTo(0, 1000);
    

}

export function warnningtrans(elemento , muda){

    var divResultado = document.createElement('div');
    divResultado.setAttribute('class', 'resultadoCalculoLong');

    var titutoResp = document.createElement('p');
    titutoResp.setAttribute('class', 'titutoResp');
    titutoResp.innerHTML = "Aviso:"

    var legendaResp = document.createElement('p')
    legendaResp.setAttribute('class', 'legendaResp')
    legendaResp.innerHTML = muda

    var legendaResp2 = document.createElement('p')
    legendaResp2.setAttribute('class', 'legendaResp')
    legendaResp2.innerHTML = "Recomenda-se:"

    var legendaResp3 = document.createElement('p')
    legendaResp3.setAttribute('class', 'legendaResp')
    legendaResp3.innerHTML = "1- Alterar a concepção da estrutura, reduzindo os esforços cortantes do elemento em questão;"

    var legendaResp4 = document.createElement('p')
    legendaResp4.setAttribute('class', 'legendaResp')
    legendaResp4.innerHTML = "2- Aumentar as dimensões da seção, para aumentar a resistência do elemento ao esforço cortante;"

    var legendaResp5 = document.createElement('p')
    legendaResp5.setAttribute('class', 'legendaResp')
    legendaResp5.innerHTML = "3- Em casos especiais, elevar a resistência do concreto utilizando uma classe com fck superior;"
    


    divResultado.appendChild(titutoResp)
    divResultado.appendChild(legendaResp)
    divResultado.appendChild(legendaResp2)
    divResultado.appendChild(legendaResp3)
    divResultado.appendChild(legendaResp4)
    divResultado.appendChild(legendaResp5)

    // if(elemento.children.length === 0){
    //     console.log("nenhum elemento")
    // }
    var linha = document.createElement('hr');
    if (elemento.children.length === 1){
        
        elemento.appendChild(linha);
        elemento.appendChild(divResultado);
    
    }else{
        console.log(elemento.children.length)
        elemento.removeChild(elemento.children[1])
        elemento.removeChild(elemento.children[1])
        elemento.appendChild(linha);
        elemento.appendChild(divResultado);
       
    }
    window.scrollTo(0, 1000);
    


    
}

export function warnninggerber(elemento, msg1, msg2){
    var divResultado = document.createElement('div');
    divResultado.setAttribute('class', 'resultadoCalculoLong');

    var titutoResp = document.createElement('p');
    titutoResp.setAttribute('class', 'titutoResp');
    titutoResp.innerHTML = "Aviso:"

    var legendaResp = document.createElement('p')
    legendaResp.setAttribute('class', 'legendaResp')
    legendaResp.innerHTML = msg1

    var legendaResp2 = document.createElement('p')
    legendaResp2.setAttribute('class', 'legendaResp')
    legendaResp2.innerHTML = msg2

    divResultado.appendChild(titutoResp)
    divResultado.appendChild(legendaResp)
    divResultado.appendChild(legendaResp2)


    var linha = document.createElement('hr');
    if (elemento.children.length === 1){
        
        elemento.appendChild(linha);
        elemento.appendChild(divResultado);
    
    }else{
        console.log(elemento.children.length)
        elemento.removeChild(elemento.children[1])
        elemento.removeChild(elemento.children[1])
        elemento.appendChild(linha);
        elemento.appendChild(divResultado);
       
    }
    window.scrollTo(0, 1000);




}


