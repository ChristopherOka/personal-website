function handleClick() {
    $('html').click('click',(e) => {
        if ($('.click-text').length){
            $('.click-text').remove();
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
        $('body').append(`<div class='click-text' style='top: ${positionY}px; left: ${positionX}px; transform: rotate(${rotation}deg)'>click!</div>`)
    });
}

function renderNavbar() {
    $('#navbar').load('./navbar.html');
}

$(document).ready(() => {
    handleClick();
    renderNavbar();
});