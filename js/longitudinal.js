import { limparCampos } from "./botaoLimpar.js"
import {resultados} from "./respostas.js"
import {listarExtra} from './equacoes.js'

var classeMaeEntradas = document.getElementById('calculoDaArmlong').children[0].children[1].getElementsByClassName('entradas')

var btnArmLong = document.getElementById('btnArmLong')

let condicionalMomentCalc = document.getElementById('condmomentocalc')
let condicionalMomCaracteristico =  document.getElementById('condmomentoatuan')

let areaDeAcoPost = 0 
let areaTotal = 0

let casasLong = 2

let md, fcd, fyd, x1, x2, mdLimite,m2, As1 = 0

function calculoDaArmlongitudinal(
    alturaUtilDaviga,  larguraDaViga, 
    resistenciaConcreto, resistenciaAco, 
    momentoCalculo, momentoCaracteristico,divDlinha, 
    dlinha, aviso){
   
    if(condicionalMomCaracteristico.checked){
        md = momentoCaracteristico * 1.4
        
    }
    else if(condicionalMomentCalc.checked){
        md = momentoCalculo
    }

    fcd = resistenciaConcreto/1.4
    fyd = resistenciaAco / 1.15
    x1 = (0.68 * alturaUtilDaviga - Math.pow(((Math.pow(0.68*alturaUtilDaviga, 2))-4 * 0.272 * (md/(larguraDaViga * fcd))), 0.5))/0.544

    if (resistenciaConcreto <= 50000){
        x2 = 0.45 * alturaUtilDaviga
    }if(resistenciaConcreto > 50000){
        x2 = 0.35 * alturaUtilDaviga
    }

    mdLimite = larguraDaViga * fcd * 0.68 * x2 * (alturaUtilDaviga - 0.4 * x2)

    if(mdLimite >= md){
        areaDeAcoPost = md/((alturaUtilDaviga - 0.4 * x1) * fyd)

        resultados(document.getElementsByClassName("divsCalculos")[0], 
                    [{"A área de aço da armadura de tração é:" : areaDeAcoPost.toFixed(casasLong) + " cm²"}], 
                    document.getElementsByClassName('container')[0], 
                    'imagens/viga/Simples.jpg', 
                    5,
                    'extraCalcArmLong',
                    'imagens/equacoes/armlong', false
        )

        return [{"A área de aço da armadura positiva é:" : areaDeAcoPost.toFixed(casasLong) + " cm²"}]

    }if(mdLimite < md){
        
        
        if(dlinha.length === 0){
            divDlinha.style.display = 'flex'
            classeMaeEntradas[6].style.backgroundColor = "#ffdddd" 
            return NaN
        }else{
            aviso.style.display = "none"
            classeMaeEntradas[6].style.backgroundColor = "#ecf5ff"
            m2 = md - mdLimite
            As1 = mdLimite / ((alturaUtilDaviga - 0.4 * x2) * fyd)
            areaDeAcoPost = m2 / ((alturaUtilDaviga - dlinha) * fyd)
            areaTotal = As1 + areaDeAcoPost
            let result = [{"A área de aço da armadura de compressão é:": areaDeAcoPost.toFixed(casasLong) + " cm²"},{"A área de aço total da armadura é:" :  areaTotal.toFixed(casasLong) + " cm²"}]
            resultados(document.getElementsByClassName("divsCalculos")[0], result, false, 'imagens/viga/Dupla.jpg')
            return result
        }
        
        
    }

    
}



// calcula armadura longitudinal.
btnArmLong.onclick = function (){
    
    let valor = calculoDaArmlongitudinal(
        classeMaeEntradas[0].value,
        classeMaeEntradas[1].value,
        classeMaeEntradas[2].value,
        classeMaeEntradas[3].value,
        classeMaeEntradas[4].value,
        classeMaeEntradas[5].value,
        document.getElementById('dlinha'),
        classeMaeEntradas[6].value,
        document.getElementsByClassName("Aviso")[0]
    )
    
    console.log(valor)
    
}

// Limpa campos

document.getElementById("btnLimpaArmLong").onclick = function(){
    limparCampos(classeMaeEntradas)
    

}


// console.log(document.getElementsByClassName('botaoEq')[0])
// //if (document.getElementsByClassName('botaoEq')[0] != null){
//     document.getElementsByClassName('botaoEq')[0].onclick = function (){
//         console.log("eita")
//         listarExtra(,"imagens/equacoes/armlong", 5, 'extraCalcArmLong')


//     }
    
// //}