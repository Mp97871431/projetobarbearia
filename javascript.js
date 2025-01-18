function mudouTamanho(){
    if(window.innerwidth >=768){
        itens.style.display = 'block'
    } else{
        intens.style.display = 'none'
    }
}


function clickMenu(){
    if(itens.style.display == 'block'){
        itens.style.display = 'none'
    } else{
        itens.style.display = 'block'
    }
}

function clicar(){
   var res = window.document.getElementById('res')
   res.innerHTML = `<p> corte de barba modelo ingles que traz muito mais elegancia para o seu dia a dia</p>`
}

function clicar2(){
    var res2 = window.document.getElementById('res2')
    res2.innerHTML = `<p>corte estilo vintagi, bem retro porém com muita elegancia para o seu dia a dia</p>`
 }

 function clicar3(){
    var res3 = window.document.getElementById('res3')
    res3.innerHTML = `<p>corte estilo vintagi, bem retro porém com muita elegancia para o seu dia a dia</p>`
 }

 function preço(){
    window.alert('consultar preços atravez de meios de contato, pois podem variar')
 }