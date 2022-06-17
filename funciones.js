const list = document.querySelectorAll('.list');

function activeLink(){
    list.forEach((item) => 
    item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item =>
    item.addEventListener('click', activeLink)))


/**Indicador de menu**/
const secciones = document.querySelectorAll('.seccion');
const menuitem = document.querySelectorAll('.menu_item');

const funcionObserver = entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const itemActual = Array.from(menuitem).find(item => item.dataset.url == entry.target.id)
            itemActual.classList.add('active')
            for(const item of menuitem){
                if(item != itemActual){
                    item.classList.remove('active')
                }
            }
        }
    })
}

const observer = new IntersectionObserver(funcionObserver, {
    root: null,
    rootMargin: '0px',
    threshold: 0.8
})

secciones.forEach(seccion => observer.observe(seccion));

// window.addEventListener('scroll', function(){
//     list.classList.toggle('active', window.scrollY)  
// })