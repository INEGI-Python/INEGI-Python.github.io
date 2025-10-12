class generalizacion{
    constructor(idioma="Español"){
        this.idioma = idioma
    }
    Ayuda(metodo){
            return {
                    "reducePuntos":()=>{
                         let tex = `Ayuda de la función ${metodo} en ${this.idioma}`
                         console.log(tex)
                         return tex   
                    },
                    "separaLineas": () => {
                        let tex = `Ayuda de la función ${metodo} en ${this.idioma}`
                         console.log(tex)
                         return tex   
                        }
                }[metodo]
        }
}
