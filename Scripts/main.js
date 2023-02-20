function handleClick() {
    document.documentElement.addEventListener("click", (e) => {
        if (document.getElementById("click-text")) {
            document.getElementById("click-text").remove();
        }
        let randomX = 0;
        while (randomX > -65 && randomX < 20) {
            randomX = Math.round(
                Math.random() < 0.65 ? Math.random() * -85 : Math.random() * 35
            );
        }
        const randomY = Math.round(
            Math.random() < 0.5 ? Math.random() * -45 : Math.random() * 40
        );
        const randomRot = Math.round(
            Math.random() < 0.5 ? Math.random() * -30 : Math.random() * 30
        );
        let positionX = e.pageX + randomX;
        let positionY = e.pageY + randomY;
        let rotation = randomRot;
        let clickTextNode = document.createElement("div");
        clickTextNode.id = "click-text";
        clickTextNode.style = `top: ${positionY}px; left: ${positionX}px; transform: rotate(${rotation}deg)`;
        clickTextNode.textContent = "click!";
        document.body.appendChild(clickTextNode);
    });
}

function handlePop() {
    let positionX = 0;
    while (positionX > -100 && positionX < 460) {
        positionX = Math.round(
            Math.random() < 0.5 ? Math.random() * -200 : Math.random() * 600
        );
    }
    const positionY = Math.round(
        Math.random() < 0.5 ? Math.random() * -100 : Math.random() * 50
    );
    const rotation = Math.round(
        Math.random() < 0.5 ? Math.random() * -30 : Math.random() * 30
    );

    document.getElementById(
        "pop"
    ).style = `top: ${positionY}px; left: ${positionX}px; transform: rotate(${rotation}deg)`;
}

function delayRedirect(url) {
    setTimeout(() => {
        window.location.href = "./" + url;
    }, 500);
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
    return [x + vX * t, y + vY * t - (g / 2) * t ** 2, vY - g * t];
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
        const coords = projectileEqnCoordGenerator([x0, y0], [vX0, vY0], t);
        xf = Math.round(coords[0] * 100) / 100;
        yf = Math.round(coords[1] * 100) / 100;
        vYf = Math.round(coords[2] * 100) / 100;
        body.innerHTML += `<div class='proj' style='left: ${xf}px; bottom: ${yf}px'></div>`;
        t++;
    }
    t = 0;
    while (t < 20) {
        const coords = projectileEqnCoordGenerator([xf, yf], [vX0, -vYf], t);
        x = Math.round(coords[0] * 100) / 100;
        y = Math.round(coords[1] * 100) / 100;
        vy = Math.round(coords[2] * 100) / 100;
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

function renderNewPage(currentHeaderEl) {
    hideBg();
    const headers = ["first-header", "second-header", "third-header"];
    const currentHeaderId = currentHeaderEl.id;
    const otherHeaders = headers.filter((e) => e !== currentHeaderId);

    const firstOtherHeaderId = otherHeaders[0];
    const secondOtherHeaderId = otherHeaders[1];
    const currentHeader = document.getElementById(currentHeaderId);
    const firstOtherHeader = document.getElementById(firstOtherHeaderId);
    const secondOtherHeader = document.getElementById(secondOtherHeaderId);

    currentHeader.classList.remove("fade-in");
    firstOtherHeader.classList.remove("fade-in");
    secondOtherHeader.classList.remove("fade-in");

    firstOtherHeader.classList.add("fade-out");
    secondOtherHeader.classList.add("fade-out");

    currentHeader.classList.remove(`${currentHeaderId}-initial-position`);
    firstOtherHeader.classList.remove(`${firstOtherHeaderId}-initial-position`);
    secondOtherHeader.classList.remove(
        `${secondOtherHeaderId}-initial-position`
    );

    currentHeader.classList.add(`${currentHeaderId}-to-top`, "top-header");

    currentHeader.style.pointerEvents = "none";
    firstOtherHeader.style.pointerEvents = "none";
    secondOtherHeader.style.pointerEvents = "none";

    currentHeader.classList.add("disable-transition");

    document
        .getElementById(`${currentHeaderId}-body`)
        .classList.remove("hidden-well");
    document.getElementById("back-btn").classList.remove("hidden-well");

    if (currentHeaderId === "third-header") {
        setTimeout(() => {
            document
                .getElementById("TH-FH-body")
                .classList.remove("hidden-well");
            document.getElementById("TH-FH-body").classList.add("well-open");
        }, 1500);
    } else if (currentHeaderId === "first-header") {
        setTimeout(() => {
            document.getElementById("blackout").classList.remove("hidden-well");
        }, 1500);
    }

    const canHover = window.matchMedia("(hover: hover)").matches;
    const viewportWidth = window.innerWidth;
    const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        );

    if (!canHover || viewportWidth < 600 || isMobile) {
        currentHeader.classList.remove("enabled");
        firstOtherHeader.classList.remove("enabled");
        secondOtherHeader.classList.remove("enabled");
    } else {
        currentHeader.classList.add("enabled");
        firstOtherHeader.classList.add("enabled");
        secondOtherHeader.classList.add("enabled");
    }
}

function returnHome() {
    showBg();

    const currentHeaderId = document.getElementsByClassName("top-header")[0].id;

    const headers = ["first-header", "second-header", "third-header"];
    const otherHeaders = headers.filter((e) => e !== currentHeaderId);

    const currentHeader = document.getElementById(currentHeaderId);

    const firstOtherHeader = document.getElementById(otherHeaders[0]);
    const secondOtherHeader = document.getElementById(otherHeaders[1]);

    const header_body_els = document.querySelectorAll(
        `#${currentHeaderId}-body, #${currentHeaderId}-body a, #back-btn, #paragraphs, #resume`
    );

    for (const el of header_body_els) {
        el.classList.add("reverse-animation");
        el.style.animation = "none";
        el.offsetHeight; /* trigger reflow */
        el.style.animation = null;
    }

    const innerWidth = window.innerWidth;
    const timeoutLength = innerWidth < 915 ? 0 : 1000;

    setTimeout(() => {
        currentHeader.classList.remove(
            `${currentHeaderId}-to-top`,
            "top-header"
        );
        currentHeader.classList.add(`${currentHeaderId}-initial-position`);

        currentHeader.style.pointerEvents = "auto";
        firstOtherHeader.style.pointerEvents = "auto";
        secondOtherHeader.style.pointerEvents = "auto";

        currentHeader.classList.remove("disable-transition");

        currentHeader.classList.remove("fade-out");
        firstOtherHeader.classList.remove("fade-out");
        secondOtherHeader.classList.remove("fade-out");

        firstOtherHeader.classList.add("fade-in");
        secondOtherHeader.classList.add("fade-in");
    }, timeoutLength);

    setTimeout(() => {
        document
            .getElementById(`${currentHeaderId}-body`)
            .classList.add("hidden-well");
        document.getElementById("back-btn").classList.add("hidden-well");

        const header_body_elmnts = document.querySelectorAll(
            `#${currentHeaderId}-body, #${currentHeaderId}-body a, #back-btn, #paragraphs`
        );
        for (const el of header_body_elmnts) {
            el.classList.remove("reverse-animation");
        }

        resetThirdHeaders();
    }, 1000);

    const canHover = window.matchMedia("(hover: hover)").matches;
    const viewportWidth = window.innerWidth;
    const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        );

    if (!canHover || viewportWidth < 600 || isMobile) {
        currentHeader.classList.remove(
            `${currentHeaderId}-to-top`,
            "top-header"
        );
        currentHeader.classList.add(`${currentHeaderId}-initial-position`);
        currentHeader.classList.add("enabled", "hover");
        firstOtherHeader.classList.add("enabled", "hover");
        secondOtherHeader.classList.add("enabled", "hover");
        setTimeout(() => {
            if (currentHeaderId === "first-header") {
                document
                    .getElementById("blackout")
                    .classList.add("hidden-well");
            }
        }, 500);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function showIcons() {
    console.log('showIcons!!')
    await sleep(1000);
    const firstHeader = document.getElementById("first-header");
    const secondHeader = document.getElementById("second-header");
    const thirdHeader = document.getElementById("third-header");
    const viewportWidth = window.innerWidth;
    const canHover = window.matchMedia("(hover: hover)").matches;
    const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        );

    if (canHover && viewportWidth > 600 && !isMobile) {
        setTimeout(() => {
            firstHeader.classList.add("hover");
        }, 2800);
        setTimeout(() => {
            secondHeader.classList.add("hover");
        }, 2900);
        setTimeout(() => {
            thirdHeader.classList.add("hover");
        }, 3000);
    } else {
        setTimeout(() => {
            firstHeader.classList.add("hover");
        }, 100);
        setTimeout(() => {
            secondHeader.classList.add("hover");
        }, 200);
        setTimeout(() => {
            thirdHeader.classList.add("hover");
        }, 300);
    }
    if (canHover && viewportWidth > 600 && !isMobile) {
        setTimeout(() => {
            firstHeader.classList.remove("hover");
        }, 4000);
        setTimeout(() => {
            secondHeader.classList.remove("hover");
        }, 4100);
        setTimeout(() => {
            thirdHeader.classList.remove("hover");
        }, 4200);
    }
    setTimeout(() => {
        firstHeader.classList.add("float");
        secondHeader.classList.add("float");
        thirdHeader.classList.add("float");
    }, 1600);
}

function detectWindowResize() {
    const firstHeader = document.getElementById("first-header");
    const secondHeader = document.getElementById("second-header");
    const thirdHeader = document.getElementById("third-header");
    const canHover = window.matchMedia("(hover: hover)").matches;
    const viewportWidth = window.innerWidth;
    const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        );
    if (canHover && viewportWidth > 600 && !isMobile) {
        firstHeader.classList.add("enabled");
        firstHeader.classList.remove("hover");
        secondHeader.classList.add("enabled");
        secondHeader.classList.remove("hover");
        thirdHeader.classList.add("enabled");
        thirdHeader.classList.remove("hover");
    } else if (!document.getElementsByClassName("top-header").length) {
        firstHeader.classList.add("hover");
        secondHeader.classList.add("hover");
        thirdHeader.classList.add("hover");
    }
    moveImageUpwards();
}

function detectParagraphScroll() {
    const paragraphWell = document.getElementById("paragraphs");
    paragraphWell.addEventListener("scroll", moveImageUpwards);
}

function moveImageUpwards() {
    const headshotWell = document.getElementById("headshot-well");
    const paragraphWell = document.getElementById("paragraphs");
    const scrollBarPosition = paragraphWell.scrollTop;
    headshotWell.style.top = `-${scrollBarPosition}px`;
}

function showBg() {
    const secondaryBg = document.getElementById("secondary-bg");
    const tertiaryBg = document.getElementById("tertiary-bg");
    const name = document.getElementById("name");
    secondaryBg.classList.remove("hide-bg");
    tertiaryBg.classList.remove("hide-bg");
    secondaryBg.style.visibility = "visible";
    tertiaryBg.style.visibility = "visible";
    secondaryBg.classList.add("return-bg");
    tertiaryBg.classList.add("return-bg");
    name.classList.remove("hide-name");
    name.style.visibility = "visible";
    name.classList.add("return-name");
}

function hideBg() {
    const secondaryBg = document.getElementById("secondary-bg");
    const tertiaryBg = document.getElementById("tertiary-bg");
    const name = document.getElementById("name");
    secondaryBg.classList.remove("return-bg");
    tertiaryBg.classList.remove("return-bg");
    secondaryBg.classList.add("hide-bg");
    tertiaryBg.classList.add("hide-bg");
    name.classList.remove("return-name");
    name.classList.add("hide-name");
    setTimeout(() => {
        secondaryBg.style.visibility = "invisible";
        tertiaryBg.style.visibility = "invisible";
        name.style.visibility = "invisible";
    }, 2000);
}

function updateLiveParagraphVals() {
    const currentDate = new Date().getTime();
    let term = "graduated";
    const terms = {
        [new Date(2021, 5, 1).getTime()]: "1A",
        [new Date(2022, 1, 1).getTime()]: "1B",
        [new Date(2022, 9, 1).getTime()]: "2A",
        [new Date(2023, 5, 1).getTime()]: "2B",
        [new Date(2024, 1, 1).getTime()]: "3A",
        [new Date(2024, 9, 1).getTime()]: "3B",
        [new Date(2025, 1, 1).getTime()]: "4A",
        [new Date(2025, 5, 1).getTime()]: "4B",
    };

    for (const date in terms) {
        if (currentDate < parseInt(date)) {
            term = terms[date];
            break;
        }
    }

    const schoolPgph = document.getElementById("school-p");
    const schoolPgphText = schoolPgph.innerText;
    let replacedSchoolPgphText;
    if (term !== "graduated!") {
        replacedSchoolPgphText = schoolPgphText.replace(/{TERM}/g, term);
        replacedSchoolPgphText = replacedSchoolPgphText.replace(/\n/g, "");
    } else {
        replacedSchoolPgphText = schoolPgphText.replace(
            /I'm currently studying/g,
            "I've graduated from"
        );
        replacedSchoolPgphText = replacedSchoolPgphText.replace(/in my/g, "");
        replacedSchoolPgphText = replacedSchoolPgphText.replace(
            /{TERM} term/g,
            ""
        );
        replacedSchoolPgphText = replacedSchoolPgphText.replace(/ so far/g, "");
        replacedSchoolPgphText = replacedSchoolPgphText.replace(/\n/g, "");
    }
    schoolPgph.innerText = replacedSchoolPgphText;

    const yearsSince2015 =
        new Date(currentDate).getFullYear() -
        new Date(2015, 1, 1).getFullYear();
    const curlingPgph = document.getElementById("curling-p");
    const curlingPgphText = curlingPgph.innerText;
    let replacedCurlingPgphText = curlingPgphText.replace(
        /{YEARS}/g,
        yearsSince2015
    );
    replacedCurlingPgphText = replacedCurlingPgphText.replace(/\n/g, "");
    curlingPgph.innerText = replacedCurlingPgphText;
}

function swapThirdHeaders(el) {
    const activeHeader = document.getElementsByClassName("active-header")[0];
    const currentHeader = el.parentElement;
    if (activeHeader == currentHeader) {
        return;
    }
    const classList = Array.from(currentHeader.classList);
    let currentPosition;
    if (classList.includes("left")) {
        currentPosition = "left";
    } else if (classList.includes("middle")) {
        currentPosition = "middle";
    } else if (classList.includes("right")) {
        currentPosition = "right";
    }
    currentHeader.classList.remove(currentPosition);
    currentHeader.classList.add("active-header", "left");
    activeHeader.classList.remove("active-header", "left");
    activeHeader.classList.add(currentPosition);
    const activeBody = document.getElementsByClassName("active-body")[0];
    activeBody.classList.remove("well-open");
    activeBody.classList.add("well-close");
    activeBody.classList.remove("active-body");
    setTimeout(() => {
        activeBody.classList.add("hidden-well");
        headerBody.classList.remove("hidden-well", "well-close");
        headerBody.classList.add("active-body", "well-open");
    }, 1000);
    let headerBody;
    if (classList.includes("first-header")) {
        headerBody = document.getElementById("TH-FH-body");
    } else if (classList.includes("second-header")) {
        headerBody = document.getElementById("TH-SH-body");
    } else if (classList.includes("third-header")) {
        headerBody = document.getElementById("TH-TH-body");
    }
}

function toggleSwapThirdHeaders() {
    const activeHeader = document.getElementsByClassName("active-header")[0];
    const headerOne = document.getElementById("TH-FH");
    const headerTwo = document.getElementById("TH-SH");
    if (activeHeader == headerOne) {
        headerOne.style.display = "none";
        headerTwo.style.display = "block";
        swapThirdHeaders(headerTwo.querySelector("a"));
    } else if (activeHeader == headerTwo) {
        headerTwo.style.display = "none";
        headerOne.style.display = "block";
        swapThirdHeaders(headerOne.querySelector("a"));
    }
}

function resetThirdHeaders() {
    const THFHbody = document.getElementById("TH-FH-body");
    const THSHbody = document.getElementById("TH-SH-body");
    // const THTHbody = document.getElementById('TH-TH-body');
    THFHbody.classList.add("hidden-well", "active-body");
    THSHbody.classList.add("hidden-well");
    // THTHbody.classList.add('hidden-well');
    THFHbody.classList.remove("well-open", "well-close");
    THSHbody.classList.remove("active-body", "well-open", "well-close");
    // THTHbody.classList.remove('active-body', 'well-open', 'well-close');

    const THFH = document.getElementById("TH-FH");
    const THSH = document.getElementById("TH-SH");
    // const THTH = document.getElementById('TH-TH');
    THFH.className = "first-header active-header left";
    THSH.className = "second-header middle";
    // THTH.className = 'third-header right';
}

function toggleImageExpand(image) {
    if (image.classList.contains("expand")) {
        image.classList.remove("expand");
    } else {
        image.classList.add("expand");
    }
}

function swipeDown() {
    let startY = 0;
    let isPulling = false;

    document.addEventListener("touchstart", function (event) {
        startY = event.touches[0].pageY;
        isPulling = false;
    });

    document.addEventListener("touchmove", function (event) {
        var currentY = event.touches[0].pageY;
        if (currentY < startY) {
            // The user is scrolling down, allow the default behavior
            return;
        } else {
            // The user is pulling to refresh
            isPulling = true;
        }
    });

    document.addEventListener("touchend", function () {
        if (isPulling) {
            // Remove the overflow: hidden property from the html and body elements
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
            // Refresh the page
            location.reload();
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    showIcons();
    detectParagraphScroll();
    window.addEventListener("resize", detectWindowResize);
});

window.onload = function () {
    // swipeDown();
    // updateLiveParagraphVals();
};
