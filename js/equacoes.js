

export function listarExtra(elemento, diretorio, numero, id = 'extraCalc""', flag = false){
    
    // Essa funcao arruma as imagens das equacoes e é usada no arquivo respostas.js

    var divsCalculos = document.createElement('div')
    divsCalculos.setAttribute('class', 'divsCalculos')
    divsCalculos.setAttribute('id', id)

    var fechar = document.createElement('a');
    fechar.setAttribute('class', 'fecharEqImg');
    fechar.innerHTML = 'Fechar';

    var imgtotal = document.createElement("div")
    imgtotal.setAttribute('class', 'ListaImagensOpc')

    let dic = {
        1: "Seção longitudinal (armadura dupla).", 
        2: "Seção longitudinal (armadura simples).", 
        3: "Seção transaversal."
    }

    let p = 0
    let divimgleg = 0
    for (let i = 1; i <= numero; i++){
        
        let divListaImg = document.createElement("div")
        divListaImg.setAttribute("class", "containerImgRespVarias")
        let imagem = document.createElement('img')
        imagem.setAttribute("class", "imgResult");
        imagem.setAttribute("src", diretorio + "/" + i + ".jpg");
        
        
        divListaImg.appendChild(imagem)
        // if(flag){
        //     divimgleg = document.createElement('div')
        //     divimgleg.setAttribute('class', "divimgleg")
        //     p = document.createElement('p')
        //     p.setAttribute('class', 'legendaArmaduras')
        //     p.innerHTML = dic[i]
        //     divListaImg.appendChild(p)
            
        // }
        imgtotal.appendChild(divListaImg)
        
            
    }

    var referencia = document.createElement("div");
    referencia.setAttribute("class", "portaImg");

    referencia.appendChild(fechar);
    referencia.appendChild(imgtotal);
    


    divsCalculos.appendChild(referencia)

    divsCalculos.setAttribute('style', 'display : flex')

    if (document.getElementsByClassName('divsCalculos').length < 6){
        elemento.appendChild(divsCalculos)

    }else {
        
        elemento.removeChild(document.getElementsByClassName('divsCalculos')[5])
        elemento.appendChild(divsCalculos)
    }

    fechar.onclick = function(){
        elemento.removeChild(document.getElementsByClassName('divsCalculos')[5])
    }
    

    
}