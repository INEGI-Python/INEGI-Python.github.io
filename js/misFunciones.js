class Xino{
    constructor(div,i="tol",t="claro",tit="Xino - Corp"){
        this.idioma = i == "es" ? "Español":"Totonaca"
        this.tema = t
        this.titulo = tit
        this.principal = div
        }
    inicio(){
        let $main = $(`#${this.principal}`)
        $main.addClass("config "+ this.tema)
        let tmp = $main.html()
        console.log($main)
        $main.html($("<h1>").html(this.titulo))
        let $contenido = $("<div>")
        $contenido.html("Contenido").addClass("contenido")
        let $tabla = $(tmp)[0].rows
        console.log(Array($tabla))
        Array($tabla).forEach(r => {
            $contenido.append(r)
        });


        $main.append($contenido)
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
