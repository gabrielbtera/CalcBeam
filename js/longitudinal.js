import { limparCampos } from "./botaoLimpar.js"

var classeMaeEntradas = document.getElementById('calculoDaArmlong').children[0].children[1].getElementsByClassName('entradas')

var btnArmLong = document.getElementById('btnArmLong')

let condicionalMomentCalc = document.getElementById('condmomentocalc')
let condicionalMomCaracteristico =  document.getElementById('condmomentoatuan')

let areaDeAcoPost = 0 
let areaTotal = 0

let casasLong = 2

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
        
        return [areaDeAcoPost.toFixed(casasLong)]

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
            return [areaDeAcoPost.toFixed(casasLong), areaTotal.toFixed(casasLong)]
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
