

export function listarExtra(elemento, diretorio, numero, id = 'extraCalc""'){

    let divsCalculos = document.createElement('div')
    divsCalculos.setAttribute('class', 'divsCalculos')
    divsCalculos.setAttribute('id', id)

    console.log("eita")

    

    var fechar = document.createElement('a');
    fechar.setAttribute('class', 'fecharEqImg');
    fechar.innerHTML = 'Fechar';

    
    let imgtotal = document.createElement("div")
    imgtotal.setAttribute('class', 'ListaImagensOpc')
    for (let i = 1; i <= numero; i++){
        console.log("teste")
        let divListaImg = document.createElement("div")
        divListaImg.setAttribute("class", "containerImgRespVarias")
        let imagem = document.createElement('img')
        imagem.setAttribute("class", "imgResult");
        imagem.setAttribute("src", diretorio + "/" + i + ".jpg");
        divListaImg.appendChild(imagem)
        imgtotal.appendChild(divListaImg)
            
        
    }
    divsCalculos.appendChild(imgtotal)

    divsCalculos.appendChild(fechar)

    
    divsCalculos.setAttribute('style', 'display : flex')
    elemento.appendChild(divsCalculos)

    
}