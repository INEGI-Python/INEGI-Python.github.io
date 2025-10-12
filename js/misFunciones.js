class generalizacion{
    constructor(i){
        this.idioma = i == "es" ? "Español":"Totonaca"
    }
 Ayuda(metodo){
            return {
                    "reducePuntos":function(){
                         let tex = `Ayuda de la función ${metodo} en ${this.idioma}`
                         console.log(tex)
                         return tex   
                    },
                    "separaLineas": function(){
                        let tex = `Ayuda de la función ${metodo} en ${this.idioma}`
                         console.log(tex)
                         return tex   
                        }
                }[metodo]
        }
}
