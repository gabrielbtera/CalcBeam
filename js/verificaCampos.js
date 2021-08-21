


export function verificaCampos(entradas, checks = false, slider = false, diferidaFlag = ''){
    // Esta funcao recebe entradas de uma funcionalidades da pagina, recebe também as checkbox e os selecteds
    // e faz a verificacao se os campos obrigatórios foram preenchidos

    let flag = false

    if(diferidaFlag === 'diferida'){
        
        for (let i = 0; i < entradas.length - 2; i++){
            
            if (entradas[i].value === "" &&  window.getComputedStyle(document.getElementById("tresInputs")).display === "flex"){  
                entradas[i].style.backgroundColor = "#ffdddd"
                
                flag = true
            }else{
                entradas[i].style.backgroundColor = "#ecf5ff"
                
            }
    
        }

        

        if (document.getElementById("cargaTempo").value === "" && document.getElementById("somacarga").value === ""){
            flag = true
        }

    }if (diferidaFlag === 'gerber'){
        for (let i = 0; i < entradas.length - 2; i++){
            
            if (entradas[i].value === "" &&   window.getComputedStyle(entradas[i]).display === "block"){  
                entradas[i].style.backgroundColor = "#ffdddd"
                
                flag = true
            }else{
                entradas[i].style.backgroundColor = "#ecf5ff"
                
            }
    
        }
    }else{
        for (let i = 0; i < entradas.length; i++){
            if (entradas[i].value === "" &&  window.getComputedStyle(entradas[i]).display === "block"){  
                entradas[i].style.backgroundColor = "#ffdddd"
                flag = true
            }else{
                entradas[i].style.backgroundColor = "#ecf5ff"
            }
    
        }
    
    }
    
    let flag2 = false
    
    if (typeof checks != Boolean){
        for (let i = 0; i < checks.length; i++){
            if(!checks[i].checked){
                flag2 = true
            }else{
                flag2 = false
                break
            }
        }
    }

    let flag3 = false
    if(slider != false){
        console.log(typeof slider)
        if (slider.options[slider.selectedIndex].value === "semAgregado") {
            alert("INSIRA UM TEMPO EM MÊS.")
            slider.style.backgroundColor = "#ffffdd"
            flag3 = true

        
        }else {
            slider.style.backgroundColor = "#ecf5ff"
        }

    }

    console.log()

    if(flag2){
        alert("Selecione ao menos uma das caixinhas.")
    }if (flag){
        alert("Preecha todos os campos avermelhados.")
    }

    




    return flag || flag2 || flag3


    

}