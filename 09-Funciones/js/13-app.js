const reproductor = {
    reproducir: id =>{
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar: () => {
        console.log('pausando...');
    },
    borrar: id => {
        console.log(`Borrando canción... ${id}`);
    },
    crearPlayList: nombre => {
        console.log(`Creando playlist de: ${nombre}`);
    },
    borrarPlayList: () => {
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