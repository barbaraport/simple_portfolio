// voltar ao início da página
var btTop = document.getElementById("top");

btTop.onclick = function () {
    window.scrollTo({
        top: 0,
    });
    $('#experiencia').removeClass('selected');
    $('#educacao').removeClass('selected');

    $('#sobre').addClass('selected');
};

// item do menu que está selecionado
var experiencia = document.getElementById("experiencia");
var educacao = document.getElementById("educacao");
var sobre = document.getElementById("sobre");

experiencia.onclick = function () {
    // remove a classe selected dos outros
    $('#sobre').removeClass('selected');
    $('#educacao').removeClass('selected');

    // adiciona a classe selected ao clicado
    $(this).addClass('selected');
}

educacao.onclick = function () {
    $('#sobre').removeClass('selected');
    $('#experiencia').removeClass('selected');

    $(this).addClass('selected');
}

sobre.onclick = function () {
    $('#experiencia').removeClass('selected');
    $('#educacao').removeClass('selected');

    $(this).addClass('selected');
}