const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

function atualizarData() {
    var hoje = new Date();
    var opcoes = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    var dataPorExtenso = hoje.toLocaleDateString("pt-BR", opcoes);
    document.querySelector(".data").innerText = "Hoje é " + dataPorExtenso;
}

atualizarData();
setInterval(atualizarData, 60000);

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hora = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    if (hora < 10) hora = "0" + hora;

    if (min < 10) min = "0" + min;

    if (seg < 10) seg = "0" + seg;

    horas.textContent = hora;
    minutos.textContent = min;
    segundos.textContent = seg;
});
