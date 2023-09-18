let dineroCofla = prompt("cuanto dinero tienes cofla ? ");
let dineroRoberto = prompt("cuanto dinero tienes roberto? ");
let dineroPedro = prompt("cuanto dinero tienes pedro ? ");


dineroCofla = parseInt(dineroCofla);
dineroRoberto = parseInt(dineroRoberto);
dineroPedro = parseInt(dineroPedro);

if (dineroCofla  >=0.6 && dineroCofla <1) {
    alert("comprate el helado de agua");
    alert("y te sobran" +(dineroCofla -0.6));
}

else if (dineroCofla >=1 && dineroCofla <1.6) {
     alert("comprate el helado de crma");
     alert("y te sobran" +(dineroCofla -1));
}
else if (dineroCofla >=1.6 && dineroCofla <1.7) {
  alert("comprate el helado de platanao");
  alert("y te sobran" +(dineroCofla -1.6));
}

else if (dineroCofla >=1.7 && dineroCofla <1.8) {
  alert("comprate el helado de purid");
  alert("y te sobran" +(dineroCofla -1.7));
}

else if (dineroCofla >=1.8 && dineroCofla <2.9) {
  alert("comprate el helado de manzana");
  alert("y te sobran" +(dineroCofla -1.8));
}

else if(dineroCofla>=2.9) {
  alert("helado precicoso");
  alert("y te sobran" +(dineroCofla -2.9));
}

else {
  alert("lo siento eres un pobre de mrd, no te alcanza para nada");
}





if (dineroRoberto  >=0.6 && dineroRoberto <1) {
  alert("comprate el helado de agua");
}

else if (dineroRoberto >=1 && dineroRoberto <1.6) {
   alert("comprate el helado de crma");
}
else if (dineroRoberto >=1.6 && dineroRoberto <1.7) {
alert("comprate el helado de platanao");
}

else if (dineroRoberto >=1.7 && dineroRoberto <1.8) {
alert("comprate el helado de purid");
}

else if (dineroRoberto >=1.8 && dineroRoberto <2.9) {
alert("comprate el helado de manzana");
}

else if(dineroRoberto>=2.9) {
alert("helado precicoso");
}

else {
alert("lo siento eres un pobre de mrd, no te alcanza para nada");
}



if (dineroPedro  >=0.6 && dineroPedro <1) {
  alert("comprate el helado de agua");
}

else if (dineroPedro >=1 && dineroPedro <1.6) {
   alert("comprate el helado de crma");
}
else if (dineroPedro >=1.6 && dineroPedro <1.7) {
alert("comprate el helado de platanao");
}

else if (dineroPedro >=1.7 && dineroPedro <1.8) {
alert("comprate el helado de purid");
}

else if (dineroPedro >=1.8 && dineroPedro <2.9) {
alert("comprate el helado de manzana");
}

else if(dineroPedro>=2.9) {
alert("helado precicoso");
}

else {
alert("lo siento eres un pobre de mrd, no te alcanza para nada");
}



// "use strict";

// const definerCompra =(n)=> {
//   let din = parseFloat(prompt(`Dinero de ${n}`));
//   if (isNaN(din)) return ("Debe ingresar un número válido.");
//   if (din >=0.6 && din <1) return (`${n}: helado de agua`);
//   if (din >=1 && din <1.6) return (`${n}: helado de crema`);
//   if (din >=1.6 && din <1.7) return (`${n}: helado de heladix`);
//   if (din >=1.7 && din <1.8) return (`${n}: helado de heladovich`);
//   if (din >=1.8 && din <2.9) return (`${n}: helado de lujo`);
//   if (din >=2.9) return (`${n}: lo siento eres un pobre de mrd no te alcanza para nada`);

//   return ("Debe ingresar un valor válido.");
// }

// console.log(definerCompra("cofla"));
// console.log(definerCompra("Pedro"));
// console.log(definerCompra("Roberto"));




















