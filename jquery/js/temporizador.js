(function ($) {
  $.fn.temporizador = function (opcoes) {
    const opcoesFinais = $.extend(
      {
        mensagem: "em breve!",
        horario: "23:59:59",
      },
      opcoes
    );
    const horaDezena = $('<span class="digito">').html("0");
    const horaUnidade = $('<span class="digito">').html("0");
    const minutoDezena = $('<span class="digito">').html("0");

    return this;
  };
})(jQuery);
