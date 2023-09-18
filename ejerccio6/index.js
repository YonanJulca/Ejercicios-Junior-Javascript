const ObtenerInformacion = (materia) => {
  materias = {
    fisica: ["Perez", "pedro", "pepito", "cofla", "maria"],
    progamacion: ["Dalto", "pedro", "juan", "pepito"],
    logica: ["ernandes", "pedro", "juan", "pepito", "cofla", "maria"],
    quimica: ["Rodriguez", "pedro", "juan", "pepitp", "cofla", "maria"],
  };
  if (materias[materia] !== undefined) {
    return [materias[materia], materia,materias];
  } else {
    return materias;
  }
};

const mostrarInformacion = (materia)=>{
    let informacion = ObtenerInformacion(materia);

if (informacion !== false) {
  let profesor = informacion[0][0];
  let alumnos = informacion[0];
  alumnos.shift();
  document.write(`El profesor de <br>${informacion[1]} <br> es: <b style="color:red"> ${profesor} </b> <br> Alumnos prensentes en ${informacion[1]} 
  ${informacion[0]}`);
}
}

const cantidadDeClases = (alumno)=>{
    let informacion = ObtenerInformacion()
    let cantidadTotal =0;
    for(info in informacion){
         if (informacion[info][info].includes(alumno)){
            cantidadTotal++;
         }
    }
    return  `<b style="color:blue">${alumno}</b> esta en <b>
    $(cantidadTotal) clases </b><br>`;
}

mostrarInformacion("fisica");
mostrarInformacion("progamacion");
mostrarInformacion("logica");

document.write(cantidadDeClases("pedro"))


