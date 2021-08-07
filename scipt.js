function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Você tem ${idade} anos.`
        var genero =  ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') // colocando foto dentro do JS no html fica -> <img id ='exemplo '>
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <10){
                //criança
                img.setAttribute('src','bebehomem.png')
            } else if(idade < 25){
                //jovem
                img.setAttribute('src', 'jovemhomem.png')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src','adultohomem.png')
            } else {
                //idoso
                img.setAttribute('src','idosohomem.png')
            }
                
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <10){
                //criança
                img.setAttribute('src','bebemulher.png')
            } else if (idade <21){
                //Jovem
               img.setAttribute('src','jovemmulher.png')
            }else if (idade <50){
                //Adulto
               img.setAttribute('src','adultamulher.png')
            } else {
                //idoso
               img.setAttribute('src','idosamulher.png')
            }

        }
        res.style.textAlign = 'center' // utilizando text-align no JS.
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}