let b1 = document.querySelector('.l')
let b2 = document.querySelector('.r')
let si = document.querySelector('.slider')
let offset = 0;


b1.addEventListener('click', () => {
    offset += 264
    si.style.left = -offset + "px"
    if(offset > 1056){
        offset = 1056
    }
})

b2.addEventListener('click', () => {
    offset -= 264
    si.style.left = -offset + "px"
    if(offset = 264){
         offset = -1
    }
})