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

window.onload = () => {
    handleClick();
    handlePop();
};