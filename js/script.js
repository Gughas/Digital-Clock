const horas = document.querySelector('#horas');
const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundos');

const relogio = setInterval(() => {
    let todayDate = new Date();
    let hr = todayDate.getHours();
    let min = todayDate.getMinutes();
    let seg = todayDate.getSeconds();
    
    if(hr < 10) {
        hr = '0' + hr;
    };
    
    if(min < 10) {
        min = '0' + min;
    };
    
    if(seg < 10) {
        seg = '0' + seg;
    };
    
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
});