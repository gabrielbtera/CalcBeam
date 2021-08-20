

export function listarExtra(elemento, diretorio, numero, id = 'extraCalc""'){
    

    var divsCalculos = document.createElement('div')
    divsCalculos.setAttribute('class', 'divsCalculos')
    divsCalculos.setAttribute('id', id)

    var fechar = document.createElement('a');
    fechar.setAttribute('class', 'fecharEqImg');
    fechar.innerHTML = 'Fechar';

    var imgtotal = document.createElement("div")
    imgtotal.setAttribute('class', 'ListaImagensOpc')
    for (let i = 1; i <= numero; i++){
        
        let divListaImg = document.createElement("div")
        divListaImg.setAttribute("class", "containerImgRespVarias")
        let imagem = document.createElement('img')
        imagem.setAttribute("class", "imgResult");
        imagem.setAttribute("src", diretorio + "/" + i + ".jpg");
        divListaImg.appendChild(imagem)
        imgtotal.appendChild(divListaImg)
            
    }

    var referencia = document.createElement("div");
    referencia.setAttribute("class", "portaImg");

    referencia.appendChild(fechar);
    referencia.appendChild(imgtotal);
    


    divsCalculos.appendChild(referencia)

    divsCalculos.setAttribute('style', 'display : flex')

    if (elemento.children.length <= 15){
        elemento.appendChild(divsCalculos)

    }else {

        elemento.removeChild(elemento.children[15])
        elemento.appendChild(divsCalculos)
    }

    fechar.onclick = function(){
        elemento.removeChild(elemento.children[15])
    }
    

    
}