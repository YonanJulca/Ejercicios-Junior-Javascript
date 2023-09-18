const materias={
    fisica: [90,6,4,"fisica"],
    matematica: [84,8,8,"matematica"],
    logica: [14,5,5,"logica"],
    calculo: [60,4,9,"calculo"],
    progamacion: [91,5,2,"progamacion"],
    biologia: [85,4,6,"biologia"],
    bbdd: [76,8,5,"bbdd"],
    algebra: [93,4,6,"algebra"],
}

const asistencia=()=>{
    for(materia in materias) {
        let asistencias = materias[materia][0];
        if(asistencias >=90) {
            console.log(materias[materia][3]);
            console.log("%cAprabado","color:green");
        } else {
            console.log(materias[materia][3]);
            console.log("%cDesaprabado","color:red");
        }
    }
}

asistencia()