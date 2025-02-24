function identificarFaixaEtaria() {
    let idade = document.getElementById('idade').value;
    let resultado = document.getElementById('resultado');

    if (idade >= 0 && idade < 15) {
        resultado.textContent = "Criança";
    } else if (idade >= 15 && idade < 30) {
        resultado.textContent = "Jovem";
    } else if (idade >= 30 && idade < 60) {
        resultado.textContent = "Adulto";
    } else if (idade >= 60) {
        resultado.textContent = "Idoso";
    } else {
        resultado.textContent = "Idade inválida!";
    }
}
