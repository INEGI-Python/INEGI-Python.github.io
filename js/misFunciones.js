class Xino{
    constructor(div,i="tol",t="claro",tit="Xino - Corp"){
        this.idioma = i == "es" ? "Español":"Totonaca"
        this.tema = t
        this.titulo = tit
        this.principal = div
        }
    cambiarTema(tema){
        this.tema=tema
        var r = document.querySelector(':root');
        r.style.setProperty('--bgTema', this.tema=='claro' ? 'var(--bgClaro)':'var(--bgOscuro)')
        r.style.setProperty('--colorTema', this.tema=='claro' ? 'var(--textClaro)':'var(--textOscuro)')
        return this.tema=='claro' ? 'O':'C'
    }
    inicio(dat){
        let $main = $(`#${this.principal}`)
        this.cambiarTema(this.tema)
        $main.addClass("config tema")
        let tmp = $main.html()
        $main.html($("<h1>").html(this.titulo))
        $main.append($("<div>").html("O").addClass("btnTema").click(e=>{e.currentTarget.innerText = this.cambiarTema(e.currentTarget.innerText =="C" ? "claro":"oscuro")}))
        let $contenido = $("<div>")
        $contenido.addClass("contenido")
        let keys = Object.keys(datos)
        console.log(keys.length)
        keys.forEach(k => {  
            var _d = datos[k]
            let $tarjeta=$("<div>").addClass("tarjeta").attr("id",`tar-${k}`)
            $tarjeta.html($("<div>").addClass("titulo").html(_d["titulo"])).append($("<div>").addClass("imagen").html($("<img>").attr({"src":_d["imagen"],"width":"100%"} ))).append($("<div>").addClass("vinculo").html(`<a href="${_d['vinculo']}">ABRIR</a>`))
            $contenido.append($tarjeta)
        })



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
