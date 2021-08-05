
import { limparCampos, limpaSeletor } from "./botaoLimpar.js"


var classeMaeEntradasDiferida = document.getElementById('calculoDaFlechaDiferida').children[0].children[1].getElementsByClassName('entradas')

var btnInsereDiferida = document.getElementById('btnInsereDif')

var btnFlechaDiferida = document.getElementById('btnFlechaDiferida')

var somaCarga = document.getElementById('somacarga')


var ft, fd, deltaE, alfaf, Et0, somatorio1, t0, pc, ro, t0i, auxiliar  = 0

// faz as adicioões dos valoresa para o cáculo final.
function calculoDaFlechaDiferida(
    condicaoArmsimples, 
    condicaoArmDupla,
    alturaUtilViga,larguraDaViga, 
    armCompressao, parcelaCarga,  
    tempoParcelaCarga, cargaxtempo, somacarga, flagVerificaTempo
){

    

    flagVerificaTempo.value = tempoParcelaCarga
    document.getElementById("guardaValor2").value = tempoParcelaCarga // adicionano o value da na div caraga x tempo
    
    
    // Vertifica se a armaduara é simples ou dupla
    if(condicaoArmDupla.checked){
        ro = armCompressao / (larguraDaViga * alturaUtilViga)
    }else if(condicaoArmsimples.checked){
        ro = 0
    }

    
    // Verifica na pagina se a parcela de carga esta vazia e armazena em pc
    
    if (parcelaCarga.value === ''){
       pc = 1
    }else{
        pc = parseFloat(parcelaCarga.value)
    }

    
    // VERIFICA SE O TEMPO FOI ADICIONADO
    if (isNaN(tempoParcelaCarga)){
        document.getElementById("avisoValores").innerHTML = "Por favor, clique em adicionar valores"
        document.getElementsByClassName('warnning')[0].style.display = "flex"
        document.getElementById("avisoValores").style.color = '#ff0000'
        return false
    }else{

        t0i = tempoParcelaCarga
        t0i = t0i / 30

        somatorio1 = pc *  t0i


        // CARGA X TEMPO: verifica os values da pagina e armazena nele para o proximo somatório
        if (cargaxtempo.value === "" || cargaxtempo.value === undefined){
            cargaxtempo.value = somatorio1
            cargaxtempo.innerHTML = somatorio1.toFixed(3)
        }else{
            console.log('caraga tempo',cargaxtempo.value)
            auxiliar = parseFloat(cargaxtempo.value) + somatorio1
            cargaxtempo.value = auxiliar
            cargaxtempo.innerHTML = auxiliar.toFixed(3)

        }
        
        // SOMA CARGA: verifica os values da pagina e armazena nele para o proximo somatório
        
        if(somacarga.value === "" || somacarga.value === undefined){

            somacarga.value = pc
            somacarga.innerHTML = pc.toFixed(3)
        }else{
            console.log("soma carga",typeof somacarga.value)
            auxiliar = pc + parseFloat(somacarga.value)
            somacarga.value = auxiliar

            somacarga.innerHTML = auxiliar.toFixed(3)
        }
        document.getElementById("avisoValores").style.color = '#07db00'
        document.getElementById("avisoValores").innerHTML = "Valores Adicionados!"

        document.getElementsByClassName('warnning')[0].style.display = "flex"
        setTimeout(function(){ document.getElementsByClassName('warnning')[0].style.display = "none" }, 1000);
        
        return [parseFloat(cargaxtempo.value), parseFloat(somacarga.value), ro]
    }

    

}


function mainFlechaDiferida(flechaImediata, seletor,condicaoArmsimples,
    condicaoArmDupla,armCompressao,tempoParcelaCarga ,larguraDaViga, alturaUtilViga, cargaxtempo, somacarga, 
    flagVerificaTempo){

    // Esta função é o main da flecha diferida, ela será chamada no onclick do botão calcular
    
    console.log(flagVerificaTempo.value, parseFloat( tempoParcelaCarga))

    // Verifica o  proximo valor do tempo se o valor foi adicionado ou não.
    if (parseFloat(flagVerificaTempo.value) != parseFloat(tempoParcelaCarga) && !isNaN(parseFloat(tempoParcelaCarga))){

         // Exibe o aviso de dados que não foram dicionados
        document.getElementById("avisoValores").innerHTML = "Por favor, clique em adicionar valores"
        document.getElementsByClassName('warnning')[0].style.display = "flex"
        document.getElementById("avisoValores").style.color = '#ff0000'

        return false
    }else{
        if(condicaoArmDupla.checked){
            ro = armCompressao / (larguraDaViga * alturaUtilViga)
        }else if(condicaoArmsimples.checked){
            ro = 0
        }
        
        t0 = parseFloat(cargaxtempo.value) / parseFloat(somacarga.value)
       
        Et0 = 0.68 * (Math.pow(0.996, t0)) * (Math.pow(t0, 0.32))
        
        deltaE = parseFloat(seletor.options[seletor.selectedIndex].value) - Et0
        alfaf = deltaE / (1 + 50 * ro)
    
        fd = flechaImediata * alfaf
        ft = flechaImediata * (1 + alfaf)

        
        // Verifica se o restorno foi calculado ou não
        if (isNaN(fd) || isNaN(ft) == NaN){
            document.getElementById("avisoValores").innerHTML = "Por favor, clique em adicionar valores"
            document.getElementsByClassName('warnning')[0].style.display = "flex"
            document.getElementById("avisoValores").style.color = '#ff0000'
            return false
        }else{
            return [fd, ft]
        }
        

    }

}


btnInsereDiferida.onclick = function(){
    

    var valor = calculoDaFlechaDiferida(
        document.getElementById('armSimples'),
        document.getElementById('armDupla'),            
        parseFloat(classeMaeEntradasDiferida[1].value),  // altura util viga
        parseFloat(classeMaeEntradasDiferida[2].value), // largura da viga
        parseFloat(classeMaeEntradasDiferida[3].value), // arm compresão
        classeMaeEntradasDiferida[4],                   // parcela de carga=
        parseFloat(classeMaeEntradasDiferida[5].value), // Tempo Parcela de carga
        document.getElementById('cargaTempo'),          // carga x tempo=
        document.getElementById('somacarga'),           // soma carga=
        document.getElementById("guardaValor")

    )

    console.log(valor)
    classeMaeEntradasDiferida[4].value = "" 
    classeMaeEntradasDiferida[5].value = ""   

    
}

btnFlechaDiferida.onclick = function(){

    var mainValor = mainFlechaDiferida(
        parseFloat(classeMaeEntradasDiferida[0].value), // flecha diferida
        document.getElementById('seletorGeralInternoDiferida'),
        document.getElementById('armSimples'),
        document.getElementById('armDupla'),
        parseFloat(classeMaeEntradasDiferida[3].value), // armCompressao
        parseFloat(classeMaeEntradasDiferida[5].value), // tmpoParceCarga
        parseFloat(classeMaeEntradasDiferida[2].value), // largura da viga
        parseFloat(classeMaeEntradasDiferida[1].value), // altura util da viga
        document.getElementById('cargaTempo'),          // carga x tempo=
        document.getElementById('somacarga'),            // soma carga=
        document.getElementById("guardaValor")
        )



    console.log(mainValor)

}

// Limpar campos Diferida

var btnLimparCampos = document.getElementsByClassName('botaoLimpar')[2]

btnLimparCampos.onclick = function(){
    limparCampos(classeMaeEntradasDiferida, [
        document.getElementById('cargaTempo'),
        document.getElementById('somacarga'),          
        document.getElementById("guardaValor"),
        document.getElementById("guardaValor2")
    ], 
    [document.getElementById('cargaTempo'), 
     document.getElementById('somacarga')]
    )
    
   limpaSeletor(document.getElementById('seletorGeralInternoDiferida'))
}

