function verificar() {
    var data = new Date() //data atual
    var ano = data.getFullYear() //ano atual , fullyear = 4 dígitos
    var fano = document.getElementById('txtano') //formulário ano = fano
    var res = document.querySelector('div#res') // chama a div q tem o id res
    if (fano.value.length == 0 || Number(fano.value) > ano) {// se o valor do ano for igual a zero 'ou' se o valor for maior q o ano corrente = (erro) 
        window.alert('[ERRO] Verifique os dados e tente novamente!')  
    } else {
        var fsex = document.getElementsByName('radsex')//formul. sexo= fsex, recebe, radsex 'uma das opções em círculos 0 ou 1'
        var idade = ano - Number(fano.value) //valor do ano atual - o valor digitado
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    }
        
        if (fsex[0].checked){
            gênero = 'Homem'

        if (idade >=0 && idade <10){
                 //criança
                 img.setAttribute('src', 'hbebe.jpg')
         }else if (idade < 18) {
               //adolescente
               img.setAttribute('src', 'hadolesc.jpg')
            }else if (idade < 30){
                //Jovem
                img.setAttribute('src', 'hjovem.jpg')
        }else if (idade < 40){
                //Adulto
                img.setAttribute('src', 'h30.jpg')
        }else if (idade < 60){
                //maduro
                img.setAttribute('src', 'hmaduro.jpg')
        }else if (idade >=60){
                //idoso
                img.setAttribute('src', 'hvelho.jpg')
            }
        }

        if (fsex[1].checked) {
            gênero = 'Mulher'

            if (idade >=0 && idade <5){
                //bebe
                img.setAttribute('src', 'mbebe.jpg')
            }else if (idade <=10){
                //criança
                img.setAttribute('src', 'm10.jpg')

        }else if (idade < 15) {
              //adolescente
              img.setAttribute('src', 'madolesc.jpg')

           }else if (idade < 30){
               //Jovem
               img.setAttribute('src', 'mjovem.jpg')

       }else if (idade <40){
               //Adulto
               img.setAttribute('src', 'm30.jpg')
               
       }else if (idade <60){
               //maduro
               img.setAttribute('src', 'mmadura.jpg')
       }else if (idade >=60){
               //idoso
               img.setAttribute('src', 'mvelha.jpg')
           }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
        }
    