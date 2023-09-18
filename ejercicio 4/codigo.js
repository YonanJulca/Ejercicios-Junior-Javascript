class Celulares{
  constructor(color,peso,tamaño,rdc,ram){
    this.color = color;
    this.peso = peso;
    this.tamaño = tamaño;
    this.resolucionDeCamara = rdc;
    this.memoriaRam = ram;
    this.encendido = false;
  }

  presionarBotonEncendido(){
    if(this.encendido ==false) {
      alert("celular prendido");
      this.encendido = true;
    } else {
      alert("el celular apagado")
      this.encendido = flase;
    }
  }

  reiniciar() {
    if (this.encendido ==true){
      alert("reiniciando celular")
    } else {
      alert("el celular esta apagado")
    }
  }
  tomarFotos(){
    alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara})`)
  }
  grabarVideo(){
    alert(`grabando video en ${this.resolucionDeCamara}`)
  }
  mobileInfo(){
    return
  
    `
    color: <br>${this.color}</br>
    peso: <br>${this.peso}</br>
    tamaño: <br>${this.tamaño}</br>
    Resolucion de video: <br> ${this.resolucionDeCamara}</br>
    Memoria Ram: <br> ${this.memoriaRam}</b> </br>
    `;
  }
}

celular1 = new Celulares("rojo","150g","5","full hd","2GB");
celular2 = new Celulares("blanco","350g","4","full hd","1GB");

document.write(`
  ${celular1.mobileInfo()} <br>
  ${celular2.mobileInfo()} <br>
`);