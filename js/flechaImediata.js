var classeMaeEntradasImediata = document.getElementById('calculoDaFlechaImediata').children[0].children[1].getElementsByClassName('entradas')

var seletorImediata = document.getElementById('seletorGeralInterno')


var btnflechaI = document.getElementById("btnFlechaI")

function calculoFlechaImediata(alturaViga, alturaUtilViga,
    dArmDupla, larguraViga, resistenciaConcreto, deformaAco,
    armDeTração, cargaInsidaViga, comprimentoViga,armCompresao ,seletor, simples, dupla ){
    
    // let lista = [alturaViga, alturaUtilViga,
    //     dArmDupla, larguraViga, resistenciaConcreto, deformaAco,
    //     armDeTração, cargaInsidaViga, comprimentoViga,armCompresao ,seletor, simples, dupla]
    // for (let i = 0; i< lista.length ; i ++){
    //     console.log(lista[i])
    // }
    
    if(seletor.options[seletor.selectedIndex].text === "Sem agregado" ){
         Ecs  = 0.85 * 5600 * Math.pow(resistenciaConcreto, 1/2)

    }else{
        if( resistenciaConcreto >= 20  && resistenciaConcreto <= 50){
            Eci = parseFloat(seletor.options[seletor.selectedIndex].value) * 5600 * Math.pow(resistenciaConcreto, 1/2)
        }else if(resistenciaConcreto > 50 && resistenciaConcreto <= 90){
            Eci = 21.5 * 1000 * parseFloat(seletor.options[seletor.selectedIndex].value) * (Math.pow((resistenciaConcreto / 10) + 1.25, 1/3))
        }
        if (resistenciaConcreto > 80){
            alphaI = 1
    
        }else{
            alphaI = 0.8 + 0.2 * (resistenciaConcreto / 80)
        }
    
        Ecs = alphaI * Eci
    

    }

    ic = (larguraViga * Math.pow(alturaViga, 3))/12
    yt = alturaViga / 2
    alphae = deformaAco / Ecs 

    if(simples){
        as2 = 2 * ((Math.PI * Math.pow(0.5, 2))/4) 
        ca = larguraViga / 2
        cl = alphae * (armDeTração) + (alphae - 1) * as2
        ti = -(alphae * armDeTração * alturaUtilViga + (alphae - 1) * as2 * dArmDupla)
        delta = Math.pow(cl, 2) - 4 * ca * ti
        x1 = (-cl + (Math.pow(delta, 1/2))) / (2 * ca)
        x2 = (-cl - (Math.pow(delta, 1/2))) / (2 * ca) 

        if(x1 < 0){
            xii = x2

        }else if (x2 < 0){
            xii = x1

        }

        Iii = (larguraViga * (Math.pow(xii, 3))) / 12 + larguraViga * xii * (Math.pow(xii / 2 , 2)) + alphae * armDeTração * (Math.pow(alturaUtilViga - xii, 2)) + (alphae - 1) * as2 * (Math.pow(alturaUtilViga - xii, 2)) 

       


    }if(dupla){
        as2 = armCompresao
        xii = -(alphae * armDeTração + (alphae - 1) * as2) + (Math.pow(4*(larguraViga / 2) * -(alphae * armDeTração * alturaUtilViga + (alphae - 1) * as2 * dArmDupla), 1/2)) / larguraViga
        Iii = (larguraViga * (Math.pow(xii, 3))) / 12 * larguraViga * xii * (Math.pow(xii / 2 , 2)) + alphae * armDeTração *(Math.pow(alturaUtilViga - xii, 2)) + (alphae - 1) * as2 * (Math.pow(alturaUtilViga - xii, 2)) 
    }if(resistenciaConcreto <= 50){
        fctm = 0.3 * Math.pow(resistenciaConcreto, 2/3) 
    }if (resistenciaConcreto > 50 && resistenciaConcreto <= 90){
        fctm = 2.12 * Math.log(1 + 0.11 * resistenciaConcreto)
    }

    fctm = fctm / 10
    mr = (1.5 * fctm * ic) / yt

    mr = mr / 100

    ma = (cargaInsidaViga * Math.pow(comprimentoViga, 2)) / 8

    Ecs = Ecs / 10

    EI1 = Ecs * (Math.pow(mr / ma, 3) * ic + ((1 - Math.pow(mr / ma, 3) ) * Iii )) 

    EI2 = Ecs * ic

    if(EI1 < EI2){
        EI = EI1
    }else if (!(EI1 < EI2)){
        EI = EI2
    }

    comprimentoViga = comprimentoViga * 100

    cargaInsidaViga = cargaInsidaViga / 100

    Fi = (5 / 384) * ((cargaInsidaViga * Math.pow(comprimentoViga, 4)) / EI)

    console.log("fi")
    console.log(Fi)
    alert('fi ' + Fi)




    
}



btnflechaI.onclick = function(){

    calculoFlechaImediata(
        parseFloat(classeMaeEntradasImediata[0].value),
        parseFloat(classeMaeEntradasImediata[1].value),
        parseFloat(classeMaeEntradasImediata[2].value),
        parseFloat(classeMaeEntradasImediata[3].value),
        parseFloat(classeMaeEntradasImediata[4].value),
        parseFloat(classeMaeEntradasImediata[5].value),
        parseFloat(classeMaeEntradasImediata[6].value),
        parseFloat(classeMaeEntradasImediata[7].value),
        parseFloat(classeMaeEntradasImediata[8].value),
        parseFloat(classeMaeEntradasImediata[9].value),
        document.getElementById('seletorGeralInterno'),
        document.getElementById('armSimplesImediata').checked,
        document.getElementById('armDuplaImediata').checked
    )

    // console.log(seletorImediata.options)

    // console.log(seletorImediata.options[seletorImediata.selectedIndex].value )
}

