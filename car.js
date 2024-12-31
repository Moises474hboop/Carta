const btnOpenElement = document.querySelector('#open')
const btnCloseElement = document.querySelector('#close')

btnOpenElement.addEventListener('click', () => {
    const cuadro1Element = document.querySelector('.cuadro1')
    cuadro1Element.classList.add('open-cuadro')
    setTimeout(()=>{
    const hojaElement = document.querySelector('.hoja')
    hojaElement.classList.add('subir-hoja')
    },1000)
})

btnCloseElement.addEventListener('click', () => {
    const cuadro1Element = document.querySelector('.cuadro1')
    cuadro1Element.classList.remove('open-cuadro')
    const hojaElement = document.querySelector('.hoja')
    hojaElement.classList.remove('subir-hoja')
})