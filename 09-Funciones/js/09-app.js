const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar: function(){
        console.log('pausando...');
    },
    borrar: function(id){
        console.log(`Borrando canción... ${id}`);
    },
    crearPlayList: function(nombre){
        console.log(`Creando playlist de: ${nombre}`);
    },
    borrarPlayList: function(){
        console.log('Borrando playLis');
    }
}

reproductor.reproducir(20);
reproductor.reproducir(40);
reproductor.pausar();
reproductor.borrar(20);
reproductor.crearPlayList('Mana');
reproductor.crearPlayList('Rock');
reproductor.crearPlayList('Cosasas');
reproductor.borrarPlayList();