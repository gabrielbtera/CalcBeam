export function limparCampos( listaCampos, diferida = false, exibicaoDiferida = false) {
    
    // campos de armazenamento da flecha diferida são:
    // diferida = [cargaxtempo, somacarga, guardaValor, guardaValor2]
    // 



    function limparCamposInternos(listaCampos, flag){
        if (flag){
            for (let i = 0; i < listaCampos.length ; i++){
                listaCampos[i].value = ""
            }
        }else{
            for (let i = 0; i < listaCampos.length ; i++){
                listaCampos[i].innerHTML = ""
            }
        }
        
    }

    if (typeof diferida === Boolean || typeof exibicaoDiferida === Boolean){
        limparCamposInternos(listaCampos, true)
    }else{
        limparCamposInternos(listaCampos, true)
        limparCamposInternos(diferida, true)
        limparCamposInternos(exibicaoDiferida, false)
    }

    

}

export function limpaSeletor(seletor){
    var opcoes = seletor.options
    for (let i = 0; i < opcoes.length; i++){
        
        opcoes[i].selected = opcoes[i].defaultSelected;
    }
}


