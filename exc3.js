function verificar() {
  var a = document.getElementById("txtini");
  var b = document.getElementById("txtfim");
  var c = document.getElementById("txtpss");
  var res = document.getElementById("res");
  if (a.value.length == 0 || b.value.length == 0 || c.value.length == 0) {
    alert("coloque os dados corretamente!");
    c = c + 1;
  } else {
    res.innerText = "Contando: ";
    var i = Number(a.value);
    var f = Number(b.value);
    var p = Number(c.value);
    if (p <= 0 || p >= f){
      alert("Passo invalido, CONSIDERANDO 1!");
      p = 1;
    }
    if (i < f) {
      for (var x = i; x <= f; x += p) {
        res.innerText += `${x}->`;
      }
    } else {
      for (var x = i; x >= f; x -= p) {
        res.innerText += `${x}->`;
      }
    }
  }
}
