


export function verificaCampos(entradas, checks = false, slider = false, diferidaFlag = ''){
    // Esta funcao recebe entradas de uma funcionalidades da pagina, recebe também as checkbox e os selecteds
    // e faz a verificacao se os campos obrigatórios foram preenchidos

    let flag = false
    let flagLetra = false

    if(diferidaFlag === 'diferida'){
        let aux = 0

        if(window.getComputedStyle(document.getElementById("tresInputs")).display != "flex"){
            aux = (entradas.length-2) - 3
        }else{
            aux = (entradas.length-2)
        }
        
    
        
        for (let i = 0; i < aux; i++){
            
            if (entradas[i].value === ""){  
                entradas[i].style.backgroundColor = "#ffdddd"
                
                flag = true
            }else if (isNaN(parseFloat(entradas[i].value))){
                entradas[i].style.backgroundColor = "#fffddd"
                flagLetra = true
                console.log(entradas[i], 'else if')
            }
            else{
                entradas[i].style.backgroundColor = "#ecf5ff"
                flag = false
                console.log(entradas[i], 'else', flag)
            }
    
        }

        

        // if (document.getElementById("cargaTempo").value === "" && document.getElementById("somacarga").value === ""){
        //     flag = true
        // }

    }else if (diferidaFlag === 'gerber'){
        for (let i = 0; i < entradas.length - 2; i++){
            
            if (entradas[i].value === ""){  
                entradas[i].style.backgroundColor = "#ffdddd"
                
                flag = true
            }else if (isNaN(parseFloat(entradas[i].value))){
                entradas[i].style.backgroundColor = "#fffddd"
                flagLetra = true

            }
            else{
                entradas[i].style.backgroundColor = "#ecf5ff"
                
            }
    
        }
    }else if (diferidaFlag === "imediata"){
        const ARMADURA_COMPRESSAO = 9
        let aux = 0
        if(window.getComputedStyle(document.getElementById("compresao")).display === "flex" && entradas[ARMADURA_COMPRESSAO].value === ""){
            aux = entradas.length
        }else{
            aux = entradas.length - 1
        }

        for (let i = 0; i < aux; i++){
            
            if (entradas[i].value === "" ){
                entradas[i].style.backgroundColor = "#ffdddd"
                
                flag = true
            }else if (isNaN(parseFloat(entradas[i].value))){
                entradas[i].style.backgroundColor = "#fffddd"
                flagLetra = true

            }
            else{
                entradas[i].style.backgroundColor = "#ecf5ff"
                
            }
    
        }
    }else if (diferidaFlag === "transversal"){
        let aux =  0
        let verifica = false
        if (window.getComputedStyle(document.getElementById("condicaocalc1")).display == "flex"){
            aux = entradas.length - 2
        }else if (window.getComputedStyle(document.getElementById("condicaocalc2")).display == "flex"){
            verifica = true
            aux = entradas.length
        }else{
            aux = entradas.length - 3
        }
        

        for (let i = 0; i < aux; i++){
            if (verifica && i === 6){
                continue
            }
            if (entradas[i].value === "" ){
                entradas[i].style.backgroundColor = "#ffdddd"
                
                flag = true
            }else if (isNaN(parseFloat(entradas[i].value))){
                entradas[i].style.backgroundColor = "#fffddd"
                
                flagLetra = true

            }
            
            else{
                entradas[i].style.backgroundColor = "#ecf5ff"
                
            }
        }
    
    
    }


    
    else if("longitudinal" === diferidaFlag){
        let aux =  0
        let verifica = false
        if (window.getComputedStyle(document.getElementById("momentoDeCalcInput")).display == "flex"){
            aux = entradas.length-2
            
        }else if (window.getComputedStyle(document.getElementById("momAtuante")).display == "flex"){
            verifica = true
            aux = entradas.length-1
        }else{
            aux = entradas.length - 3

        }
        console.log(aux)
        

        for (let i = 0; i < aux; i++){
            if (verifica && i === 4){
                continue
            }
            if (entradas[i].value === "" ){
                entradas[i].style.backgroundColor = "#ffdddd"
                
                flag = true
            }else if (isNaN(parseFloat(entradas[i].value))){
                entradas[i].style.backgroundColor = "#fffddd"
                
                flagLetra = true

            }
            
            else{
                entradas[i].style.backgroundColor = "#ecf5ff"
                
            }
        }
        
        
    
    }
    
    let flag2 = false
    
    if (typeof checks != Boolean){
        
        for (let i = 0; i < checks.length; i++){
            if(!checks[i].checked){
                console.log("eita")
                flag2 = true
            }else{
                flag2 = false
                break
            }
        }
    }

    let flag3 = false
    if(slider != false){
        
        if (slider.options[slider.selectedIndex].value === "semAgregado") {
            slider.style.backgroundColor = "#ffdddd"
            flag3 = true

        
        }else {
            slider.style.backgroundColor = "#ecf5ff"
        }

    }



    if (flag){
        console.log('entrou na flag')
        Swal.fire({
            icon: 'error',
            title: 'Campo vazio',
            text: "Preecha todos os campos avermelhados.",
            showCancelButton: false,
            confirmButtonColor: '#0055b8',
            background: "#b7d8ff",
            confirmButtonText: 'Entendi',
            
           })
    }


   else if(flag3){
        Swal.fire({
            icon: 'error',
            title: 'Campo vazio',
            text: "INSIRA UM TEMPO EM MÊS.",
            showCancelButton: false,
            confirmButtonColor: '#0055b8',
            background: "#b7d8ff",
            confirmButtonText: 'Entendi',
            
        })

   }

    else if(flag2){
        
        Swal.fire({
            icon: 'error',
            title: 'Campo vazio',
            text: "Selecione ao menos uma das caixinhas.",
            showCancelButton: false,
            confirmButtonColor: '#0055b8',
            background: "#b7d8ff",
            confirmButtonText: 'Entendi'
           })
    }
    else if (flagLetra){
        Swal.fire({
            icon: 'error',
            title: 'Dados inválidos',
            text: "Os campos amarelados não são números.",
            showCancelButton: false,
            confirmButtonColor: '#0055b8',
            background: "#b7d8ff",
            confirmButtonText: 'Entendi'
           })
    }

    




    return flag || flag2 || flag3 || flagLetra


    

}