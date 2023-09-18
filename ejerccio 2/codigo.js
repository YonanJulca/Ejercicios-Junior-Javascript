 let pc = {
    nombre: "acer",
    procesador: "intel core i5",
    ram: "12gb",
    espacio: "1tb"
};

let nombre = pc["nombre"];
let procesador =pc["procesador"];
let ram= pc["ram"];
let espacio=pc["espacio"];

let frase = `
  El nombre de mi pc es: <br>${nombre}</b> <br>
  El procesador es: <b>${procesador}</b><br>
  La memoria RAM es: <b>${ram}</b></br>
  El espacio en disco es de: <br>${espacio}</b>
`;


document.write(frase);

