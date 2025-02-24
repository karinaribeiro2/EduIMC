function calcularMedia() {
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);
    let resultadoMedia = document.getElementById('resultadoMedia');

    const peso1 = 2;
    const peso2 = 5;
    const peso3 = 3;
    const somaPesos = peso1 + peso2 + peso3;

    let media = ((peso1 * nota1) + (peso2 * nota2) + (peso3 * nota3)) / somaPesos;

    let classificacao = "";

    if (media > 9 && media <= 10) {
        classificacao = "A";
    } else if (media > 8 && media <= 9) {
        classificacao = "B";
    } else if (media > 7 && media <= 8) {
        classificacao = "C";
    } else if (media > 6 && media <= 7) {
        classificacao = "D";
    } else if (media > 5 && media <= 6) {
        classificacao = "E";
    } else if (media >= 0 && media <= 5) {
        classificacao = "F";
    }

    resultadoMedia.textContent = `A média do aluno é = ${media.toFixed(2)} e a sua classificação é ${classificacao}`;
}
