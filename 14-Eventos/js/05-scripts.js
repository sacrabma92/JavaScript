
// // Detecta el movimiento del scroll vertical
// window.addEventListener('scroll', () =>{
//   console.log('Scrolling')
// })

// // Detecta el movimiento del scroll vertical y ver la cantidad de pixeles
// window.addEventListener('scroll', () =>{
//   const scrollPX = window.scrollY;

//   console.log(scrollPX)
// })

window.addEventListener('scroll', () =>{
  const  premim = document.querySelector('.premium')
  const ubicacion = premim.getBoundingClientRect()

  if(ubicacion.top < 100){
    console.log('El elemento ya esta visible')
  }else{
    console.log('Aún no, da mas scroll')
  }

  // console.log(ubicacion)
})