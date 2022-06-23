import * as UI from './interfaz.js'

class API{
    constructor(artista, cancion){
        this.artista = artista;
        this.cancion = cancion;
    }

    consultarAPI(){
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

        fetch(url)
            .then( respuesta => respuesta.json() )
            .then( resultado =>{

                if(resultado.lyrics){
                    const { lyrics } = resultado;

                    UI.divResultado.textContent = lyrics;
                    UI.headingReultado.textContent = `Letra de la canción: ${this.cancion} de ${this.artista}`;
                }else{
                    setTimeout(() => {
                        UI.divMensajes.textContent = 'La canción no existe, prueba con otra búsqueda';
                        UI.divMensajes.classList.add('error');
                    }, 3000);
                }

                
            })
    }
}

export default API;