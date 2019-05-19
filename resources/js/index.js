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


//Remove Hover on mobile Device
function watchForHover() {
    let hasHoverClass = false;
    let container = document.body;
    let lastTouchTime = 0;

    function enableHover() {
        // filter events coming from touch events
        if (new Date() - lastTouchTime < 500) return;
        if (hasHoverClass) return;

        container.className += ' hasHover';
        hasHoverClass = true;
    }

    function disableHover() {
        if (!hasHoverClass) return;

        container.className = container.className.replace(' hasHover', '');
        hasHoverClass = false;
    }

    function updateLastTouchTime() {
        lastTouchTime = new Date();
    }

    document.addEventListener('touchstart', updateLastTouchTime, true);
    document.addEventListener('touchstart', disableHover, true);
    document.addEventListener('mousemove', enableHover, true);

    enableHover();
}

watchForHover();