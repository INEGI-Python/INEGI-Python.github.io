class generalizacion{
    constructor(metodo){
        this.metodo = metodo        
    }
    Ayuda(){
            return {"reducePuntos":idioma=>{
                                    console.log("Ayuda separa  Lineas en "+ idioma)
                    },
                    "separaLineas": idioma => {
                        console.log("Ayuda separa  Lineas en "+ idioma)
                    }
            }[this.metodo]
        }
}