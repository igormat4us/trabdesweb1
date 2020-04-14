function display() {

    DispWin = window.open('','NewWin', 'toolbar=no,status=no,width=600,height=400');
    
        var form = document.getElementById("formcontact");
        var inputTextNome = form.elements["txtNome"];
        var inputEmail = form.elements["email"];
        var inputTelefone = form.elements["telefone"];
        var inputPrioridade = form.elements["prioridade"];
        var inputMsg = form.elements["msg"];
        
        message =  "<ul><li><b>Nome: </b>" + inputTextNome.value;
        message += "<li><b>E-mail: </b>" + inputEmail.value;
        message += "<li><b>Telefone: </b>" + inputTelefone.value;
        message += "<li><b>Prioridade: </b>" + inputPrioridade.value;
        message += "<li><b>Mensagem: </b>" + inputMsg.value + "</ul>";

    DispWin.document.write(message);

}