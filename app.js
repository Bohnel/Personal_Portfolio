const sections = document.querySelectorAll('section');
const nav = document.querySelectorAll('.navbar i');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach( section => {
        // console.log(section.id)
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHeight / 4)) {
            current = section.getAttribute('id');
        }
    })

    nav.forEach( i => {
        i.classList.remove('active');
        if(i.classList.contains(current)){
            i.classList.add('active')
        }
    })
})
