import { limparCampos } from "./botaoLimpar.js"

var classeMaeEntradasTransversal = document.getElementById('calculoDaArmTrans').children[0].children[1].getElementsByClassName('entradas')
var btnCalcTransversal = document.getElementById("btnCalcTransversal")

var modeloDeCalculo1 = document.getElementById("condModeloCalculo1")
var modeloDeCalculo2 = document.getElementById("condModeloCalculo2")


function calculoDaArmaduraTransversal(
    alturaUtilViga, larguraViga, resistenciaConcreto,
    resistEscoamentoAco, forcaCDeCalculo, anguloInclinacao,
    modeloDeCalculo1, areaAcoCalc1, modeloDeCalculo2, areaAcoCalc2, anguloCalc2

){
    if(parseFloat(anguloInclinacao) === 45){
        alpha = Math.PI / 4
    }else if (parseFloat(anguloInclinacao) === 90) {
        alpha = Math.PI / 2
    }
    else {
        console.log("erro")
    }

    alfa_v2 = 1 - ((resistenciaConcreto/1000) / 250)
    fcd = resistenciaConcreto / 1.4
    fywd = resistEscoamentoAco / 1.15
    fctd = (0.21 * Math.pow(resistenciaConcreto /1000, 2/3)) / 1.4
    fctd *= 1000                                                                    // Teste
    
    if (modeloDeCalculo1.checked){
        vrd2i = 0.27 * alfa_v2 * fcd * larguraViga * alturaUtilViga
        console.log("vrd2i", vrd2i)
        if(forcaCDeCalculo <= vrd2i){
            console.log("condicao suprida.")

            vc1 = 0.6 * fctd * larguraViga * alturaUtilViga
            vsw1 = forcaCDeCalculo - vc1
            s1 = ((areaAcoCalc1 * 0.9 * alturaUtilViga * fywd * (Math.sin(alpha) + Math.cos(alpha))) / vsw1) 
            console.log("resposta: ", s1 * 100)

        }
        else{
            console.log("A condicao não foi suprida, vsd > vrd2i")
            console.log("Recomenda-se: ")
            console.log("1- Alterar a concepção da estrutura, reduzindo os esforços cortantes do elemento em questão;")
            console.log("2- Aumentar as dimensões da seção, para aumentar a resistência do elemento ao esforço cortante;")
            console.log("3- Em casos especiais, elevar a resistência do concreto utilizando uma classe com fck superior;")
        }


    }if(modeloDeCalculo2.checked){
        if (anguloCalc2 >= 30 && anguloCalc2 <= 45){
            razaoTetha =  Math.PI / anguloCalc2
            tetha = Math.PI / razaoTetha
            
            vrd2ii = 0.54 * alfa_v2 * fcd * larguraViga * alturaUtilViga * Math.sin(tetha) * ((Math.cos(alpha) / Math.sin(alpha)) + ((Math.cos(tetha) / Math.sin(tetha))))
            
            if(forcaCDeCalculo <= vrd2ii){
                console.log("condicao suprida.")

                vc0 = 0.6 * fctd * larguraViga * alturaUtilViga
                vc2 = vc0 * ((vrd2ii - forcaCDeCalculo) / (vrd2ii - vc0))
                vsw2 = forcaCDeCalculo - vc2
                s1 = ((areaAcoCalc2 * 0.9 * alturaUtilViga * fywd * (Math.cos(tetha) / Math.sin(tetha))) / vsw2) 
                console.log("resposta: ", s1 * 100)

            }
            else{
                console.log("A condicao não foi suprida, vsd > vrd2ii")
                console.log("Recomenda-se: ")
                console.log("1- Alterar a concepção da estrutura, reduzindo os esforços cortantes do elemento em questão;")
                console.log("2- Aumentar as dimensões da seção, para aumentar a resistência do elemento ao esforço cortante;")
                console.log("3- Em casos especiais, elevar a resistência do concreto utilizando uma classe com fck superior;")
            }


        }else{
            console.log("O angulo é de 30 a 45")
        }
        
        

    }
}


btnCalcTransversal.onclick = function (){
    calculoDaArmaduraTransversal(
        parseFloat(classeMaeEntradasTransversal[0].value), 
        parseFloat(classeMaeEntradasTransversal[1].value),
        parseFloat(classeMaeEntradasTransversal[2].value),
        parseFloat(classeMaeEntradasTransversal[3].value),
        parseFloat(classeMaeEntradasTransversal[4].value),
        parseFloat(classeMaeEntradasTransversal[5].value),
        document.getElementById("condModeloCalculo1"),
        parseFloat(classeMaeEntradasTransversal[6].value),
        document.getElementById("condModeloCalculo2"),
        parseFloat(classeMaeEntradasTransversal[7].value),
        parseFloat(classeMaeEntradasTransversal[8].value)
    )
}

document.getElementById("btnLimpaArmTrnasversal").onclick = function(){
    limparCampos(classeMaeEntradasTransversal)
    

}
