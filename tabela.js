const classificacao = {
    colorLine: function() {
        $("td.posicao").each(function() {
            var posicao = $(this).text();

            if (posicao%2 != 0) {
                $(this).parent().attr("style", "background-color:#bed5c2");
            }
        });
    },
    arr_classificacao: function() {
        json_dados = JSON.parse('{"content":[{"posicao":1,"clube":"PALMEIRAS","pontos":80,"jogos":38,"vitorias":23, "empates":11,"derrotas":4,"gp":64,"gc":26,"sg":38},'
        + '{"posicao":2,"clube":"FLAMENGO","pontos":72,"jogos":38,"vitorias":21, "empates":9,"derrotas":8,"gp":59,"gc":29,"sg":30},'
        + '{"posicao":3,"clube":"INTERNACIONAL","pontos":69,"jogos":38,"vitorias":19, "empates":12,"derrotas":7,"gp":51,"gc":29,"sg":22},'
        + '{"posicao":4,"clube":"GRÊMIO","pontos":66,"jogos":38,"vitorias":18, "empates":12,"derrotas":8,"gp":48,"gc":27,"sg":21},'
        + '{"posicao":5,"clube":"SÃO PAULO","pontos":63,"jogos":38,"vitorias":16, "empates":15,"derrotas":7,"gp":46,"gc":34,"sg":12},'
        + '{"posicao":6,"clube":"ATLÉTICO-MG","pontos":59,"jogos":38,"vitorias":17, "empates":8,"derrotas":13,"gp":56,"gc":43,"sg":13},'
        + '{"posicao":7,"clube":"ATHLETICO","pontos":57,"jogos":38,"vitorias":16, "empates":9,"derrotas":13,"gp":54,"gc":37,"sg":17},'
        + '{"posicao":8,"clube":"CRUZEIRO","pontos":53,"jogos":38,"vitorias":14, "empates":11,"derrotas":13,"gp":34,"gc":34,"sg":0},'
        + '{"posicao":9,"clube":"BOTAFOGO","pontos":51,"jogos":38,"vitorias":13, "empates":12,"derrotas":13,"gp":38,"gc":46,"sg":"-8"},'
        + '{"posicao":10,"clube":"SANTOS","pontos":50,"jogos":38,"vitorias":13, "empates":11,"derrotas":14,"gp":46,"gc":40,"sg":6},'
        + '{"posicao":11,"clube":"BAHIA","pontos":48,"jogos":38,"vitorias":12, "empates":12,"derrotas":14,"gp":39,"gc":41,"sg":"-2"},'
        + '{"posicao":12,"clube":"FLUMINENSE","pontos":45,"jogos":38,"vitorias":12, "empates":9,"derrotas":17,"gp":32,"gc":46,"sg":-14},'
        + '{"posicao":13,"clube":"CORINTHIANS","pontos":44,"jogos":38,"vitorias":11, "empates":11,"derrotas":16,"gp":34,"gc":35,"sg":"-1"},'
        + '{"posicao":14,"clube":"CHAPECOENSE","pontos":44,"jogos":38,"vitorias":11, "empates":11,"derrotas":16,"gp":34,"gc":50,"sg":"-16"},'
        + '{"posicao":15,"clube":"CEARÁ","pontos":44,"jogos":38,"vitorias":10, "empates":14,"derrotas":14,"gp":32,"gc":38,"sg":"-6"},'
        + '{"posicao":16,"clube":"VASCO","pontos":43,"jogos":38,"vitorias":10, "empates":13,"derrotas":15,"gp":41,"gc":48,"sg":"-7"},'
        + '{"posicao":17,"clube":"SPORT","pontos":42,"jogos":38,"vitorias":11, "empates":9,"derrotas":18,"gp":35,"gc":57,"sg":"-22"},'
        + '{"posicao":18,"clube":"AMÉRICA-MG","pontos":40,"jogos":38,"vitorias":10, "empates":10,"derrotas":18,"gp":30,"gc":47,"sg":"-17"},'
        + '{"posicao":19,"clube":"VITÓRIA","pontos":37,"jogos":38,"vitorias":9, "empates":10,"derrotas":19,"gp":36,"gc":63,"sg":"-27"},'
        + '{"posicao":20,"clube":"PARANÁ","pontos":23,"jogos":38,"vitorias":4, "empates":11,"derrotas":23,"gp":18,"gc":57,"sg":"-39"}]}'
        );

        arr_dados = new Array(json_dados.content);
      
        for (i=0;i<arr_dados[0].length;i++) {
        
            $('#tBody').append('<tr id="row_' + i + '"></tr>');

            $("#row_" + i).append ('<td class="posicao">' + arr_dados[0][i].posicao + '</td>');
            $("#row_" + i).append ('<td></td>');
            $("#row_" + i).append ('<td>' + arr_dados[0][i].clube + '</td>');
            $("#row_" + i).append ('<td>' + arr_dados[0][i].pontos + '</td>');
            $("#row_" + i).append ('<td>' + arr_dados[0][i].jogos + '</td>');
            $("#row_" + i).append ('<td>' + arr_dados[0][i].vitorias + '</td>');
            $("#row_" + i).append ('<td>' + arr_dados[0][i].empates + '</td>');
            $("#row_" + i).append ('<td>' + arr_dados[0][i].derrotas + '</td>');
            $("#row_" + i).append ('<td>' + arr_dados[0][i].gp + '</td>');
            $("#row_" + i).append ('<td>' + arr_dados[0][i].gc + '</td>');
            $("#row_" + i).append ('<td>' + arr_dados[0][i].sg + '</td>');
        }

        classificacao.colorLine();
    }
}