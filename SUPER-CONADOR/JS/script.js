function contar() {
    var init = document.getElementById('n1')
    var fim = document.getElementById('n2')
    var passo = document.getElementById('n3')
    var res = document.getElementById('res')

    if (init.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Imposivel contar'
        
    } else {
        res.innerHTML = 'Contando <br>'
        var i = Number(init.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if( i < f) {

        for (c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449} <br>`
            
        }
        res.innerHTML += `\u{1F3C1}`
        }else {
            for ( c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        res.innerHTML += `\u{1F3C1}`

        }

    }
}