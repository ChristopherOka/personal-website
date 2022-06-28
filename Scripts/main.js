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

async function bindRedirects(){
    const urls = ['index.html', 'interests.html', 'experience.html', 'nav-bonus.html']
    const anchors = ['#nav-home', '#nav-interests', '#nav-experience', '#nav-bonus']
    for (let i in urls) {
        $(anchors[i]).click(() => {delayRedirect(urls[i])})
    }
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

window.onload = () => {
   testfn();
    handleClick();
    handlePop();
};