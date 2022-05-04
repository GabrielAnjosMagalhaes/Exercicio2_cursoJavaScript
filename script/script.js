


function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formY = document.getElementById(`txtano`)
    var resultado = document.getElementById(`res`)
    
    if(formY.value.length == 0 || formY.value > ano){
        window.alert("Por favor, verifique os dados fornecidos e tente novamente.")
    }else{
        var sexo = document.getElementsByName(`sexo`)
        var idade = ano - Number(formY.value) 
        var genero = ''

        var img = document.createElement(`img`)
        img.setAttribute(`id`, `foto`)

         if(sexo[0].checked){
             genero = "Masculino"
                if(idade>=0 && idade<12){
                    //criança
                    img.setAttribute(`src`, `img/M_crianca.jpg`)
                    
                }else if(idade<18){
                    //adolescente 
                    img.setAttribute(`src`, `img/M_adolescente.jpg`)
                }else if(idade>=18 && idade<=60){
                    //adulto
                    img.setAttribute(`src`, `img/M_adulto.jpg`)
                }else{
                    //idoso
                    img.setAttribute(`src`, `img/M_idoso.jpg`)
                }
         }else if (sexo[1].checked){
            genero = "Feminino"

            if(idade>=0 && idade<12){
                //criança
                img.setAttribute(`src`, `img/F_crianca.jpg`)
            }else if(idade<18){
                //adolescente 
                img.setAttribute(`src`, `img/F_adolescente.jpg`)
            }else if(idade>=18 && idade<=60){
                //adulto
                img.setAttribute(`src`, `img/F_adulto.jpg`)
            }else{
                //idoso
                img.setAttribute(`src`, `img/F_idoso.jpg`)
            }
         }
        resultado.style.textAlign= `center`
        resultado.innerHTML=`As informações obtidas foram: <br> Gênero: ${genero} <br> Idade: ${idade} anos`
        resultado.appendChild(img)
    } 
}