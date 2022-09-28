function validar() {
  var nome = formuser.nome.value;
  var email = formuser.email.value;
  var cpf = formuser.cpf.value;
  var msg = formuser.msg.value;
  //Validação do input Nome
  if (nome == "") {
    alert("Por favor \n Preencha o campo nome.");
    formuser.nome.focus();
    return false;
  }
  //Validação do input Email
  if (email == "" || email.indexOf("@") == -1) {
    alert("Preencha o campo E-mail.");
    formuser.email.focus();
    return false;
  }
  //Validação do input CPF
  if (cpf == "" || cpf.length < 11) {
    alert("Preencha o campo CPF com todos os 11 digitos");
    formuser.cpf.focus();
    return false;
  }
  //Validação do textarea MSG
  if (msg == "" || msg.length < 10) {
    alert("Escreva no minimo 20 caracteres.");
    formuser.msg.focus();
    return false;
  }
}
