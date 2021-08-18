

export function resultados(elemento, respostas, opcao, legendas){
    
    
    var divResultado = document.createElement('div');
    divResultado.setAttribute('class', 'resultadoCalculoLong');


    var titutoResp = document.createElement('p');
    titutoResp.setAttribute('class', 'titutoResp');
    titutoResp.innerHTML = "Resposta obtida:"

    divResultado.appendChild(titutoResp)

    
    for (let i =0 ; i < respostas.length ; i ++){
        
        console.log(typeof Object.keys(respostas[i])[0])
        var legendaResp = document.createElement('p')
        legendaResp.setAttribute('class', 'legendaResp')

        var valorResp = document.createElement('p')
        valorResp.setAttribute('class', 'valorResp')

        legendaResp.innerHTML = Object.keys(respostas[i])[0]
        valorResp.innerHTML = Object.values(respostas[i])[0] + " cm²"
        
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
    console.log(elemento.children)
    if (elemento.children.length == 1){
        console.log(elemento.length)
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