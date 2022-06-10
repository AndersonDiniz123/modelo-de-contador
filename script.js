function contar(){
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('pass')
    var res = document.getElementById('res')


                 //length e a quantidade de contetudo   
    if (ini.value.length == 0 || fim.value.length==0 || passo.value.length==0){
        alert('Campos vazios, preencha !!')
       res.innerHTML = 'Impossivel contar !'
    }else {
        res.innerHTML = 'contando: <br>'
        res.style.color ='blue'
        
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo inválido Consideranto PASSO 1')
            p = 1
        }
        if (i < f ) {
            //contagem crescente
            for(let c = i; c <= f; c +=p){
                res.innerHTML += `${c} \u{1F449}`
            }
            
        }else {
            //contagem decrescente
            for(let c = i; c >= f; c -=p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`   
    }
}