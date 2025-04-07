class generalizacion{
    constructor(idioma="es"){
        this.idioma = idioma
    }
    Ayuda(metodo){
            return {
                    "reducePuntos":()=>{
                     console.log("Ayuda en "+  this.metodo)
                    alert( metodo)    
                    },
                    "separaLineas": idioma => {
                        console.log("Ayuda separa  Lineas en "+ idioma)
                        alert(metodo)
                        }
                }[metodo]
        }
}