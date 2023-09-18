let frase = false;

const validar = (time) => {
  let edad = prompt("cual es tu edad ");
  if (edad > 18) {
    if (time >= 2 && time < 7 && free == false) {
      alert("podes pasar gratis ");
      free = true;
    } else {
      alert("podes pasar, pero tenes que pagar la entrada");
    }
  } else {
    alert("mira papu sos menor edad ");
  }
};

validar(12);
validar(10);
