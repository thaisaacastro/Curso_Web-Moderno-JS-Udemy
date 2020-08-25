(function ($) {
  $.fn.temporizador = function (opcoes) {
    const opcoesFinais = $.extend(
      {
        mensagem: "em breve!",
      },
      opcoes
    );

    return this;
  };
})(jQuery);
