function handleClick() {
    document.documentElement.addEventListener('click', (e) => {
        if (document.getElementById('click-text')){
            document.getElementById('click-text').remove();
        }
        let randomX = 0;
        while (randomX > -65 && randomX < 20) {
            randomX = Math.round(Math.random() < 0.65 ? Math.random() * -85 : Math.random() * 35);
            
        }
        const randomY = Math.round(Math.random() < 0.5 ? Math.random() * -45 : Math.random() * 40);
        const randomRot = Math.round(Math.random() < 0.5 ? Math.random() * -30 : Math.random() * 30);
        let positionX = e.pageX + randomX;
        let positionY = e.pageY + randomY;
        let rotation = randomRot;
        let clickTextNode = document.createElement('div');
        clickTextNode.id = 'click-text';
        clickTextNode.style = `top: ${positionY}px; left: ${positionX}px; transform: rotate(${rotation}deg)`;
        clickTextNode.textContent = 'click!';
        document.body.appendChild(clickTextNode);
    });
}

function handlePop() {
    let positionX = 0;
    while (positionX > -100 && positionX < 460) {
        positionX = Math.round(Math.random() < 0.50 ? Math.random() * -200 : Math.random() * 600);
        
    }
    const positionY = Math.round(Math.random() < 0.5 ? Math.random() * -100 : Math.random() * 50);
    const rotation = Math.round(Math.random() < 0.5 ? Math.random() * -30 : Math.random() * 30);

    document.getElementById('pop').style =`top: ${positionY}px; left: ${positionX}px; transform: rotate(${rotation}deg)`;
    };

function delayRedirect(url) {
    setTimeout(()=> {window.location.href = './' + url;}, 500);
}


function projectileEqnCoordGenerator(initCoords, initVelocities, t) {
    const x = initCoords[0];
    const y = initCoords[1];
    const vX = initVelocities[0];
    const vY = initVelocities[1];
    const g = 9.81; // px/s^2
    /* 
    projectile motion equations: x = x0 + vX*t
                                 y = y0 + vY0*t - 1/2(9.81)*t^2
                                 vXf = vX
                                 vYf = vY - g*t
    */
// [x,y,vYf]
    return [x + vX*t, y + vY*t - (g/2)*(t**2), vY - g*t];
}

async function testProjectile() {
    const x0 = 10;
    const y0 = 10;
    const vX0 = 30;
    const vY0 = 120;
    let vYf = vY0;
    let xf = x0;
    let yf = y0;
    const body = document.body;
    let t = 0;
   
    while (t < 20) {
        const coords = projectileEqnCoordGenerator([x0,y0], [vX0,vY0], t);
        xf = Math.round(coords[0] * 100)/100;
        yf = Math.round(coords[1] * 100)/100;
        vYf = Math.round(coords[2] * 100)/100;
        body.innerHTML += `<div class='proj' style='left: ${xf}px; bottom: ${yf}px'></div>`;
        t++;
    }
    t = 0;
    while (t < 20) {
        const coords = projectileEqnCoordGenerator([xf, yf], [vX0, -vYf], t);
        x = Math.round(coords[0] * 100)/100;
        y = Math.round(coords[1] * 100)/100;
        vy = Math.round(coords[2] * 100)/100;
        body.innerHTML += `<div class='proj' style='left: ${x}px; bottom: ${y}px'></div>`;
        t++;
    }
}

async function testfn() {
    const start = Date.now();

    await testProjectile();

    const end = Date.now();
    console.log(`Execution time: ${end - start} ms`); 
}

function renderNewPage (currentHeaderEl) {
    const headers = ['first-header', 'second-header', 'third-header'];
    const currentHeaderId = currentHeaderEl.id;
    const otherHeaders = headers.filter(e => e !== currentHeaderId);

    const firstOtherHeaderId = otherHeaders[0];
    const secondOtherHeaderId = otherHeaders[1];
    const currentHeader = document.getElementById(currentHeaderId);
    const firstOtherHeader = document.getElementById(firstOtherHeaderId);
    const secondOtherHeader = document.getElementById(secondOtherHeaderId);
   
    currentHeader.classList.remove('fade-in');
    firstOtherHeader.classList.remove('fade-in');
    secondOtherHeader.classList.remove('fade-in');

    firstOtherHeader.classList.add('fade-out');
    secondOtherHeader.classList.add('fade-out');

    currentHeader.classList.remove(`${currentHeaderId}-initial-position`);
    firstOtherHeader.classList.remove(`${firstOtherHeaderId}-initial-position`);
    secondOtherHeader.classList.remove(`${secondOtherHeaderId}-initial-position`);

    currentHeader.classList.add(`${currentHeaderId}-to-top`, 'top-header');

    currentHeader.style.pointerEvents = 'none';
    firstOtherHeader.style.pointerEvents = 'none';
    secondOtherHeader.style.pointerEvents = 'none';

    currentHeader.classList.add('disable-transition');

    document.getElementById('back-btn').style.display = 'block';

    document.getElementById(`${currentHeaderId}-body`).style.display = 'block';
}

function returnHome() {
    const currentHeaderId = document.getElementsByClassName('top-header')[0].id;

    const header_body_els = document.querySelectorAll(`#${currentHeaderId}-body p, #${currentHeaderId}-body img, #back-btn`);
    for (const el of header_body_els) {
        el.classList.add('reverse-animation');
        el.style.animation = 'none';
        el.offsetHeight; /* trigger reflow */
        el.style.animation = null; 
    }

    const headers = ['first-header', 'second-header', 'third-header'];
    const otherHeaders = headers.filter(e => e !== currentHeaderId);

    const currentHeader = document.getElementById(currentHeaderId);

    const firstOtherHeader = document.getElementById(otherHeaders[0]);
    const secondOtherHeader = document.getElementById(otherHeaders[1]);

    setTimeout(() => {
        currentHeader.classList.remove(`${currentHeaderId}-to-top`, 'top-header');
        currentHeader.classList.add(`${currentHeaderId}-initial-position`);

        currentHeader.style.pointerEvents = 'auto';
        firstOtherHeader.style.pointerEvents = 'auto';
        secondOtherHeader.style.pointerEvents = 'auto';

        currentHeader.classList.remove('disable-transition');

        currentHeader.classList.remove('fade-out');
        firstOtherHeader.classList.remove('fade-out');
        secondOtherHeader.classList.remove('fade-out');

        firstOtherHeader.classList.add('fade-in');
        secondOtherHeader.classList.add('fade-in');

        document.getElementById(`${currentHeaderId}-body`).style.display = 'none';
        document.getElementById('back-btn').style.display = 'none'; 

        const header_body_elmnts = document.querySelectorAll(`#${currentHeaderId}-body p, #${currentHeaderId}-body img, #back-btn`);
        for (const el of header_body_elmnts) {
            el.classList.remove('reverse-animation');
        }
    }, 1000);
}

function secondHeaderClick () {
    const mainHeaders = document.getElementById('main-headers');
    const firstHeader = document.getElementById('first-header');
    const secondHeader = document.getElementById('second-header');
    const thirdHeader = document.getElementById('third-header');
    
    mainHeaders.className = '';
    mainHeaders.style = 'justify-content: flex-start';
    // document.getElementById('second-header').style = 'margin-top: 10vh';
    secondHeader.classList.add('float-up');
    firstHeader.style.display = 'none';
    thirdHeader.style.display = 'none';
    document.querySelector('#main-headers > a').style.cursor = 'default';
    document.getElementsByClassName('first-header-logos')[0].style.display = 'none';
    document.getElementById('first-header-body').style.display = 'block';
    document.getElementById('back-btn').style.display = 'block';
    moveHeaderToTop(secondHeader);
}

function showIcons () {
    const firstHeader = document.getElementById('first-header');
    const secondHeader = document.getElementById('second-header');
    const thirdHeader = document.getElementById('third-header');
    setTimeout(() => {
        firstHeader.classList.add('hover');
    }, 100);
    setTimeout(() => {
        secondHeader.classList.add('hover');
    }, 200);
    setTimeout(() => {
        thirdHeader.classList.add('hover');
    }, 300);
    setTimeout(() => {
        firstHeader.classList.remove('hover');
    }, 1300);
    setTimeout(() => {
        secondHeader.classList.remove('hover');
    }, 1400);
    setTimeout(() => {
        thirdHeader.classList.remove('hover');
    }, 1500);
    setTimeout(() => {
        firstHeader.classList.add('float');
        secondHeader.classList.add('float');
        thirdHeader.classList.add('float');
    }, 1600);
}

window.onload = () => {
//    testfn();
    // handleClick();
    // handlePop();
    showIcons();
};