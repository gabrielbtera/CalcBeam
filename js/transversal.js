import { limparCampos } from "./botaoLimpar.js"
import {resultados, warnningtrans} from "./respostas.js"
import { verificaCampos } from "./verificaCampos.js"

var classeMaeEntradasTransversal = document.getElementById('calculoDaArmTrans').children[0].children[1].getElementsByClassName('entradas')
var btnCalcTransversal = document.getElementById("btnCalcTransversal")

var modeloDeCalculo1 = document.getElementById("condModeloCalculo1")
var modeloDeCalculo2 = document.getElementById("condModeloCalculo2")

let alpha, alfa_v2, fcd, fywd, fctd, vrd2i,vc1, vsw1, s1, razaoTetha, tetha, vrd2ii, vc0, vc2, vsw2  = 0


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
            return [{"O espaçamento entre estribos é:" : (s1 * 100).toFixed(2) + " cm"}]
        }
        else{
            warnningtrans(document.getElementsByClassName("divsCalculos")[3], "A condicao não foi suprida, vsd > vrd2")
            console.log("A condicao não foi suprida, vsd > vrd2")
            console.log("Recomenda-se: ")
            console.log("1- Alterar a concepção da estrutura, reduzindo os esforços cortantes do elemento em questão;")
            console.log("2- Aumentar as dimensões da seção, para aumentar a resistência do elemento ao esforço cortante;")
            console.log("3- Em casos especiais, elevar a resistência do concreto utilizando uma classe com fck superior;")
            return []
        }


    }if(modeloDeCalculo2.checked){
        let dic = { 30: Math.PI/6,
                    31: Math.PI/5.81, 
                    32: Math.PI/5.63, 
                    33: Math.PI/5.45, 
                    34: Math.PI/5.29, 
                    35: Math.PI/5.14, 
                    36: Math.PI/5,
                    37: Math.PI/4.86, 
                    38: Math.PI/4.74, 
                    39: Math.PI/4.62, 
                    40: Math.PI/4.5, 
                    41: Math.PI/4.39, 
                    42: Math.PI/4.29, 
                    43: Math.PI/4.19,
                    44: Math.PI/4.09, 
                    45: Math.PI/4
                }
        
        if (anguloCalc2 >= 30 && anguloCalc2 <= 45){
            
            tetha = dic[anguloCalc2]
            
            vrd2ii = 0.54 * alfa_v2 * fcd * larguraViga * alturaUtilViga * Math.pow(Math.sin(tetha), 2) * ((Math.cos(alpha) / Math.sin(alpha)) + ((Math.cos(tetha) / Math.sin(tetha))))
            
            if(forcaCDeCalculo <= vrd2ii){
                console.log("condicao suprida.")

                vc0 = 0.6 * fctd * larguraViga * alturaUtilViga
                vc2 = vc0 * ((vrd2ii - forcaCDeCalculo) / (vrd2ii - vc0))
                vsw2 = forcaCDeCalculo - vc2
                s1 = ((areaAcoCalc2 * 0.9 * alturaUtilViga * fywd * (Math.cos(tetha) / Math.sin(tetha))) / vsw2) 
                console.log("resposta: ", s1 * 100)
                return [{"O espaçamento entre estribos é:" : (s1 * 100).toFixed(2) + " cm"}]

            }
            else{
                warnningtrans(document.getElementsByClassName("divsCalculos")[3], "A condicao não foi suprida, vsd > vrd2")
                
                console.log("Recomenda-se: ")
                console.log("1- Alterar a concepção da estrutura, reduzindo os esforços cortantes do elemento em questão;")
                console.log("2- Aumentar as dimensões da seção, para aumentar a resistência do elemento ao esforço cortante;")
                console.log("3- Em casos especiais, elevar a resistência do concreto utilizando uma classe com fck superior;")
                return []
            }


        }else{
            console.log("O angulo é de 30 a 45")
            return []
        }
        
        

    }
}


btnCalcTransversal.onclick = function (){
    const indice = 3
    if (document.getElementsByClassName("divsCalculos")[indice].children.length > 1){
        document.getElementsByClassName("divsCalculos")[indice].removeChild(document.getElementsByClassName("divsCalculos")[indice].children[1])
        document.getElementsByClassName("divsCalculos")[indice].removeChild(document.getElementsByClassName("divsCalculos")[indice].children[1])
    }if (document.getElementsByClassName('divsCalculos').length === 6){
        document.getElementsByClassName('container')[0].removeChild(document.getElementsByClassName('divsCalculos')[5])


    }
    if (! verificaCampos(classeMaeEntradasTransversal, document.getElementById('calculoDaArmTrans').children[0].children[1].getElementsByClassName('checksCondicional'), 
    false, "transversal")){
        
        var valor = calculoDaArmaduraTransversal(
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
    
        
    
        resultados(document.getElementsByClassName("divsCalculos")[3], 
                        valor, 
                        document.getElementsByClassName('container')[0], 
                        'imagens/viga/Trans.jpg', 
                        3,
                        'extraCalctransversal',
                        'imagens/equacoes/transversal', "imagens/viga/"
            )


    }

   


}

document.getElementById("btnLimpaArmTrnasversal").onclick = function(){
    limparCampos(classeMaeEntradasTransversal)
    const indice = 3
    if (document.getElementsByClassName("divsCalculos")[indice].children.length > 1){
        document.getElementsByClassName("divsCalculos")[indice].removeChild(document.getElementsByClassName("divsCalculos")[indice].children[1])
        document.getElementsByClassName("divsCalculos")[indice].removeChild(document.getElementsByClassName("divsCalculos")[indice].children[1])
    }if (document.getElementsByClassName('divsCalculos').length === 6){
        document.getElementsByClassName('container')[0].removeChild(document.getElementsByClassName('divsCalculos')[5])


    }
    

}
