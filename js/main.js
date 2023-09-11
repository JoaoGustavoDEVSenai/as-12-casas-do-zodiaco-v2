function MudaDesenho(){
    const texto = document.querySelector("h1");
    const imagem = document.querySelector("#cabeca");
    var d = document.getElementById('valor').value
    var [ano, mes, dia] = d.split('-').map(Number)
    
    if((dia >= 23 && mes == 8) && (dia <= 31 && mes <= 8) || (dia>=1 && mes == 9) && (dia <= 22 && mes == 9)){
        texto.innerHTML = "virgem";
        imagem.setAttribute("src","img/virgem.png");
        imagem.setAttribute("width","300px");
    }
    else if((dia >= 21 && mes == 4) && (dia <= 31 && mes <= 4) || (dia>=1 && mes == 5) && (dia <= 20 && mes == 5)){
        texto.innerHTML = "touro";
        imagem.setAttribute("src","./img/touro.png");
        imagem.setAttribute("width","300px");
    }
    else if((dia >= 22 && mes == 11) || (dia <= 21 && mes == 12)){
        texto.innerHTML = "sagitario"; 
        imagem.setAttribute("src","img/sagitario.png");
        imagem.setAttribute("width","300px");
    }
    else if((dia >= 23 && mes == 9) || (dia <= 22 && mes == 10)){
        texto.innerHTML = "libra";
        imagem.setAttribute("src","img/libra.png");
        imagem.setAttribute("width","300px");
    }
    else if((dia >= 23 && mes == 6) || (dia <= 22 && mes == 7)){
        texto.innerHTML = "leao";
        imagem.setAttribute("src","img/leao.png");
        imagem.setAttribute("width","300px");
    }
    else if((dia >= 23 && mes == 12) || (dia <= 20 && mes == 1)){
        texto.innerHTML = "capricornio";
        imagem.setAttribute("src","img/capricornio.png");
        imagem.setAttribute("width","300px");
    }
    else if((dia >= 21 && mes == 6) || (dia <= 22 && mes == 7)){
        texto.innerHTML = "cancer";
        imagem.setAttribute("src","img/cancer.png");
        imagem.setAttribute("width","300px");
    }
    else if((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)){
        texto.innerHTML = "aries";
        imagem.setAttribute("src","img/aries.png");
        imagem.setAttribute("width","300px");
    }
    else if((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)){
        texto.innerHTML = "aquario";
        imagem.setAttribute("src","img/aquario.png");
        imagem.setAttribute("width","300px");
    }
    else if((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)){
        texto.innerHTML = "Gêmeos";
        imagem.setAttribute("src","img/gemeos.png");
        imagem.setAttribute("width","300px");
    }

    else if((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)){
        texto.innerHTML = "Escorpião";
        imagem.setAttribute("src","img/escorpiao.png");
        imagem.setAttribute("width","300px");
    }
    
    else if((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)){
        texto.innerHTML = "Peixes";
        imagem.setAttribute("src","img/peixes.png");
        imagem.setAttribute("width","300px");
    }
    else{
        texto.innerHTML = "Cavaleiro não encontrado";
        imagem.setAttribute("src","img/X.png");
        imagem.setAttribute("width","250px");
    }
}