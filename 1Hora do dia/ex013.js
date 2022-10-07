var agora = new Date()
var diaSem = agora.getDay()
// 0= Dom , 1= seg, 2= ter, 3=qua, 4=qui, 5 = sex, 6=sab
console.log(diaSem)  

switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break

    case 2:
         console.log('Terça')
         break    

     case 3:
        console.log('Quarta')
        break  
    case 4:
        console.log('Quinta')
        break 
    case 5:
        console.log('Sexta')
        break

    case 6:
        console.log('Sábado')
        break

    default:
        console.log('[ERRO] Dia inválido!')
        break   
}
