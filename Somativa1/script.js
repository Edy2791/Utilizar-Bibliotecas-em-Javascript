$(document).ready(function() {

    
    $("#folhasalarial").hide();

    // Botão para mostrar/ocultar cadastros 
    $("#btnMostrarCadastros").click(function() {
        $("#cadastros").slideToggle(600);
    });

    // Botão para mostrar/ocultar folha salarial 
    $("#btnMostrarFolha").click(function() {
        $("#folhasalarial").slideToggle(600);
    });

    
    $("#btnRegistrar").click(function() {
        
        let inss     = $("#inss").val().trim()     || "—";
        let nome     = $("#nome").val().trim()     || "—";
        let sexo     = $('input[name="sexo"]:checked').val() || "—";
        let prof     = $("#profissao").val()       || "—";
        let salbase  = parseFloat($("#salbase").val())  || 0;
        let subtec   = parseFloat($("#subtec").val())   || 0;
        let horas    = parseFloat($("#horas").val())    || 0;
        let bonus    = parseFloat($("#bonus").val())    || 0;

        
        let totalsal = salbase + subtec + horas + bonus;
        let descinss = totalsal * 0.07;
        let salliq   = totalsal - descinss;

        // Criar nova linha na tabela 
        let linha = `
            <tr style="display:none;">
                <td>${inss}</td>
                <td>${nome}</td>
                <td>${sexo}</td>
                <td>${prof}</td>
                <td>${salbase.toFixed(2)}</td>
                <td>${subtec.toFixed(2)}</td>
                <td>${horas.toFixed(2)}</td>
                <td>${bonus.toFixed(2)}</td>
                <td>${totalsal.toFixed(2)}</td>
                <td>${descinss.toFixed(2)}</td>
                <td>${salliq.toFixed(2)}</td>
            </tr>
        `;

        $("#folhasalarial tbody").append(linha);

        
        $("#folhasalarial tbody tr:last").fadeIn(800);

        // Limpar formulário
        $("#formSalario")[0].reset();
    });
});