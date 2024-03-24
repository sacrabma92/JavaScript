// Metodos de propiedad
const reproductor = {
  reproducir: function (id){
    console.log(`Reproduciendo canción... con el id ${id}`)
  },
  pausar: function (){
    console.log(`Pusando...`)
  },
  borrar: function (id){
    console.log(`Borrando canción... ${id}`)
  },
  crearPlayList: function(lista){
    console.log(`PlayList creada: ${lista}`)
  },
  reproducirPlayList: function(nombre){
    console.log(`Reproduciendo: ${nombre}`)
  }
}

reproductor.reproducir(20);
reproductor.reproducir(10);
reproductor.pausar()
reproductor.borrar(30)
reproductor.crearPlayList('Michael Jakson')
reproductor.reproducirPlayList('Madona')