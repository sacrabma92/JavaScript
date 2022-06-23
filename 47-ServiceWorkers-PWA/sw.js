// Cuando se instala el service Worker 
self.addEventListener('install', e => {
    console.log('Instalando el Service Worker')
    console.log(e)
})


// Activar el Service Worker
self.addEventListener('activate', e =>{
    console.log('Service Worker Activado');

    console.log(e);
});

// Evento fetch para descargar archivos estaticos
self.addEventListener('fetch', e => {
    console.log('Fetch..', e);
})