var classeMaeEntradasDiferida = document.getElementById('calculoDaFlechaDiferida').children[0].children[1].getElementsByClassName('entradas')

var btnInsereDiferida = document.getElementById('btnInsereDif')

var btnFlechaDiferida = document.getElementById('btnFlechaDiferida')


var somaCarga = document.getElementById('somacarga');




function calculoDaFlechaDiferida(
    condicaoArmsimples, 
    condicaoArmDupla,
    alturaUtilViga,larguraDaViga, 
    armCompressao, parcelaCarga,  
    tempoParcelaCarga, cargaxtempo, somacarga
){

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

    t0i = tempoParcelaCarga
    t0i = t0i / 30

    somatorio1 = pc *  t0i


    // CARGA X TEMPO: verifica os values da pagina e armazena nele para o proximo somatório
    if (cargaxtempo.value === undefined){
        cargaxtempo.value = somatorio1
        cargaxtempo.innerHTML = somatorio1.toFixed(3)
    }else{
         auxiliar = parseFloat(cargaxtempo.value) + somatorio1
         cargaxtempo.value = auxiliar
         cargaxtempo.innerHTML = auxiliar.toFixed(3)

    }
    
     // SOMA CARGA: verifica os values da pagina e armazena nele para o proximo somatório
     
    if(somacarga.value === undefined){

        somacarga.value = pc.toFixed(3)
        somacarga.innerHTML = pc
    }else{
        auxiliar = pc + parseFloat(somacarga.value)
        somacarga.value = auxiliar

        somacarga.innerHTML = auxiliar.toFixed(3)
    }
    return [parseFloat(cargaxtempo.value), parseFloat(somacarga.value), ro]

}


function mainFlechaDiferida(flechaImediata, seletor,condicaoArmsimples,
    condicaoArmDupla,armCompressao,  larguraDaViga, alturaUtilViga, cargaxtempo, somacarga){
    
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

    // PRECISA FAZER O BOTÃO DE CÁLCULO  DIRETO.

    return [fd, ft]
}


btnInsereDiferida.onclick = function(){
    

    valor = calculoDaFlechaDiferida(
        document.getElementById('armSimples'),
        document.getElementById('armDupla'),            
        parseFloat(classeMaeEntradasDiferida[1].value),  // altura util viga
        parseFloat(classeMaeEntradasDiferida[2].value), // largura da viga
        parseFloat(classeMaeEntradasDiferida[3].value), // arm compresão
        classeMaeEntradasDiferida[4],                   // parcela de carga=
        parseFloat(classeMaeEntradasDiferida[5].value), // Tempo Parcela de carga
        document.getElementById('cargaTempo'),          // carga x tempo=
        document.getElementById('somacarga')            // soma carga=


    )
    console.log(valor)

    
}

btnFlechaDiferida.onclick = function(){

    mainValor = mainFlechaDiferida(
        parseFloat(classeMaeEntradasDiferida[0].value),
        document.getElementById('seletorGeralInternoDiferida'),
        document.getElementById('armSimples'),
        document.getElementById('armDupla'),
        parseFloat(classeMaeEntradasDiferida[3].value),
        parseFloat(classeMaeEntradasDiferida[2].value),
        parseFloat(classeMaeEntradasDiferida[1].value),
        document.getElementById('cargaTempo'),          // carga x tempo=
        document.getElementById('somacarga')            // soma carga=
    )

    console.log(mainValor)



}

