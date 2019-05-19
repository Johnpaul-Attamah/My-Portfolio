const active = document.querySelectorAll('#project .title .link'),
    visible = document.querySelector('.project-block .visible'),
    front = document.querySelector('.project-block .front-end'),
    full = document.querySelector('.project-block .full-stack');

document.querySelector('#project .title').addEventListener('click',changeCurrent);

function changeCurrent(e) {
    e.preventDefault();
    if(e.target.classList.contains('link')) {
        removeClass(active, 'active');
        e.target.classList.add('active');
        if (e.target.classList.contains('front')) {
            full.classList.remove('visible');
            front.classList.add('visible');
        }else {
            front.classList.remove('visible');
            full.classList.add('visible');
        }
    } 
    
}

function removeClass(element, _className) {
    for (let i = 0; i < element.length; i++) {
        if(element[i].classList.contains(_className)) {
            element[i].classList.remove(_className);
        }
    }
}
