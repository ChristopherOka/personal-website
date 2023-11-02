const ROUTE_MAP = {
    "first-header": "/about",
    "second-header": "/hobbies",
    "third-header": "/experience",
};

function renderNewPage(currentHeaderEl, skipAnimation = false) {
    hideBg(skipAnimation);
    const headers = ["first-header", "second-header", "third-header"];
    const currentHeaderId = currentHeaderEl.id;
    window.history.pushState(undefined, undefined, ROUTE_MAP[currentHeaderId]);
    const otherHeaders = headers.filter((e) => e !== currentHeaderId);
    showSocials(currentHeaderId);
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
        .classList.remove("hidden");
    document.getElementById("back-btn").classList.remove("hidden");

    if (currentHeaderId === "third-header") {
        if (skipAnimation) {
            document.getElementById("TH-FH-body").classList.remove("hidden");
            document.getElementById("TH-FH-body").classList.add("well-open");
        } else {
            setTimeout(() => {
                document
                    .getElementById("TH-FH-body")
                    .classList.remove("hidden");
                document
                    .getElementById("TH-FH-body")
                    .classList.add("well-open");
            }, 1500);
        }
    }

    const canHover = window.matchMedia("(hover: hover)").matches;
    const viewportWidth = window.innerWidth;
    const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        );

    if (!canHover || viewportWidth < 915 || isMobile) {
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
    hideSocials(currentHeaderId);

    const headers = ["first-header", "second-header", "third-header"];
    const otherHeaders = headers.filter((e) => e !== currentHeaderId);

    const currentHeader = document.getElementById(currentHeaderId);

    const firstOtherHeader = document.getElementById(otherHeaders[0]);
    const secondOtherHeader = document.getElementById(otherHeaders[1]);

    const header_body_ids = [
        `#${currentHeaderId}-body`,
        `#${currentHeaderId}-body a`,
        "#back-btn",
        "#paragraphs",
        "#right-card-scroller",
        "#divider",
    ];

    const header_body_els = document.querySelectorAll(
        header_body_ids.join(", ")
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
            .classList.add("hidden");
        document.getElementById("back-btn").classList.add("hidden");

        const header_body_elmnts = document.querySelectorAll(
            header_body_ids.join(", ")
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

    if (!canHover || viewportWidth < 915 || isMobile) {
        currentHeader.classList.remove(
            `${currentHeaderId}-to-top`,
            "top-header"
        );
        currentHeader.classList.add(`${currentHeaderId}-initial-position`);
        currentHeader.classList.add("enabled", "hover");
        firstOtherHeader.classList.add("enabled", "hover");
        secondOtherHeader.classList.add("enabled", "hover");
    }

    closeAllExpandedCards();
}

async function hideSocials(currentHeaderId) {
    const socialsBar = document.getElementById("socials-bar");
    const viewportWidth = window.innerWidth;
    socialsBar.classList.add("reverse-animation");
    socialsBar.style.animation = "none";
    socialsBar.offsetHeight; /* trigger reflow */
    socialsBar.style.animation = null;

    if (viewportWidth < 915) {
        await sleep(1000);
        if (!socialsBar.classList.contains("initial")) {
            socialsBar.classList.add("initial", "animation-delay");
        }
        socialsBar.classList.remove("reverse-animation");
        socialsBar.style.animation = "none";
        socialsBar.offsetHeight; /* trigger reflow */
        socialsBar.style.animation = null;
    } else {
        await sleep(1000);
    }
    if (currentHeaderId === "first-header") {
        socialsBar.classList.remove("animate");
    }
}

async function showSocials(currentHeaderId) {
    const socialsBar = document.getElementById("socials-bar");
    const viewportWidth = window.innerWidth;
    if (viewportWidth < 915) {
        socialsBar.classList.add("reverse-animation");
        socialsBar.style.animation = "none";
        socialsBar.offsetHeight; /* trigger reflow */
        socialsBar.style.animation = null;

        await sleep(1000);
        if (socialsBar.classList.contains("initial")) {
            socialsBar.classList.remove("initial");
        }
    } else {
        await sleep(1000);
    }
    if (currentHeaderId === "first-header") {
        socialsBar.classList.add("animate");
        socialsBar.classList.remove("reverse-animation");
        socialsBar.style.animation = "none";
        socialsBar.offsetHeight; /* trigger reflow */
        socialsBar.style.animation = null;
    }
}

function getRandomDarkColor() {
    let letters = "012345".split("");
    let color = "#";
    color += letters[Math.round(Math.random() * 5)];
    letters = "0123456789ABCDEF".split("");
    for (var i = 0; i < 5; i++) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

function reanimateThatsMe() {
    const thatsMeLine = document.getElementById("thats-me-line");
    const arrowTop = document.getElementById("arrow-top");
    const arrowRight = document.getElementById("arrow-right");
    const thatsMeText = document.getElementById("thats-me-text");
    const thatsMeWell = document.getElementById("thats-me-well");
    const randomStrokeWidth = Math.floor(Math.random() * 12) + 2;
    const randomStrokeColour = getRandomDarkColor();

    thatsMeLine.style.strokeWidth = `${randomStrokeWidth}px`;
    thatsMeLine.style.stroke = `${randomStrokeColour}`;
    arrowTop.style.strokeWidth = `${randomStrokeWidth}px`;
    arrowTop.style.stroke = `${randomStrokeColour}`;
    arrowRight.style.strokeWidth = `${randomStrokeWidth}px`;
    arrowRight.style.stroke = `${randomStrokeColour}`;
    thatsMeLine.style.animationDelay = "0.2s";
    arrowTop.style.animationDelay = "1.5s";
    arrowRight.style.animationDelay = "1.7s";
    thatsMeText.style.animationDelay = "0s";
    thatsMeWell.remove();
    thatsMeWell.classList.remove("return-name", "hide-name");
    document.body.querySelector("div").appendChild(thatsMeWell);
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function showIcons() {
    const firstHeader = document.getElementById("first-header");
    const secondHeader = document.getElementById("second-header");
    const thirdHeader = document.getElementById("third-header");
    const viewportWidth = window.innerWidth;
    const canHover = window.matchMedia("(hover: hover)").matches;
    const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        );

    if (canHover && viewportWidth > 915 && !isMobile) {
        await sleep(2500);
        setTimeout(() => {
            if (document.getElementsByClassName("top-header")[0]) {
                return;
            }
            firstHeader.classList.add("hover");
        }, 2800);
        setTimeout(() => {
            if (document.getElementsByClassName("top-header")[0]) {
                return;
            }
            secondHeader.classList.add("hover");
        }, 2900);
        setTimeout(() => {
            if (document.getElementsByClassName("top-header")[0]) {
                return;
            }
            thirdHeader.classList.add("hover");
        }, 3000);
    } else {
        await sleep(1000);
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
    if (canHover && viewportWidth > 915 && !isMobile) {
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
    if (canHover && viewportWidth > 915 && !isMobile) {
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
}

function showBg() {
    const secondaryBg = document.getElementById("secondary-bg");
    const tertiaryBg = document.getElementById("tertiary-bg");
    const name = document.getElementById("name");
    const thatsMe = document.getElementById("thats-me-well");
    secondaryBg.classList.remove("hide-bg");
    tertiaryBg.classList.remove("hide-bg");
    secondaryBg.style.visibility = "visible";
    tertiaryBg.style.visibility = "visible";
    secondaryBg.classList.add("return-bg");
    tertiaryBg.classList.add("return-bg");
    name.classList.remove("hide-name");
    thatsMe.classList.remove("hide-name");
    name.style.visibility = "visible";
    thatsMe.style.visibility = "visible";
    name.classList.add("return-name");
    thatsMe.classList.add("return-name");
}

function hideBg(skipAnimation = false) {
    const secondaryBg = document.getElementById("secondary-bg");
    const tertiaryBg = document.getElementById("tertiary-bg");
    const name = document.getElementById("name");
    const thatsMe = document.getElementById("thats-me-well");
    secondaryBg.classList.remove("return-bg");
    tertiaryBg.classList.remove("return-bg");
    secondaryBg.classList.add("hide-bg");
    tertiaryBg.classList.add("hide-bg");
    name.classList.remove("return-name");
    thatsMe.classList.remove("return-name");
    name.classList.add("hide-name");
    thatsMe.classList.add("hide-name");
    if (skipAnimation) {
        secondaryBg.style.visibility = "hidden";
        tertiaryBg.style.visibility = "hidden";
        name.style.visibility = "hidden";
        thatsMe.style.visibility = "hidden";
        return;
    }
    setTimeout(() => {
        secondaryBg.style.visibility = "hidden";
        tertiaryBg.style.visibility = "hidden";
        name.style.visibility = "hidden";
        thatsMe.style.visibility = "hidden";
    }, 2000);
}

function hideHeaderCover() {
    const headerCover = document.getElementById("header-cover");
    headerCover.style.visibility = "hidden";
}

function swapThirdHeaders(el, skipAnimation = false) {
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
        activeBody.classList.add("hidden");
        headerBody.classList.remove("hidden", "well-close");
        headerBody.classList.add("active-body", "well-open");
    }, 1000);
    let headerBody;
    if (classList.includes("first-header")) {
        headerBody = document.getElementById("TH-FH-body");
        window.history.pushState(undefined, undefined, "/experience");
    } else if (classList.includes("second-header")) {
        headerBody = document.getElementById("TH-SH-body");
        window.history.pushState(undefined, undefined, "/experience/design");
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
    THFHbody.classList.add("hidden", "active-body");
    THSHbody.classList.add("hidden");
    // THTHbody.classList.add('hidden');
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

function toggleImageExpand(card) {
    if (card.querySelector("img").classList.contains("expand")) {
        card.querySelector("img").classList.remove("expand");
    } else {
        card.querySelector("img").classList.add("expand");
    }
}

function closeExpandedCard(button) {
    button.classList.add("rotate-90");
    const card = button.closest(".card-expanded");
    card.classList.add("collapse-into-close-button");
    card.classList.add("fade-out");
    window.history.back();
    setTimeout(() => {
        card.classList.add("hidden");
        card.classList.remove("fade-out");
        button.classList.remove("rotate-90");
        card.classList.remove("collapse-into-close-button");
    }, 1000);
}

function openExpandedCard(card) {
    const cardId = card.id;
    const cardExpanded = document.getElementById(`${cardId}-expanded`);
    const closeButton = cardExpanded.querySelector(".close-button");
    cardExpanded.classList.remove("hidden");
    closeButton.classList.add("open-up");
    cardExpanded.classList.add("fade-in");
    const currentPath = window.location.pathname;
    window.history.pushState(undefined, undefined, `${currentPath}/${cardId}`);
    setTimeout(() => {
        cardExpanded.classList.remove("fade-in");
        closeButton.classList.remove("open-up");
    }, 1000);
}

function closeAllExpandedCards() {
    const cards = document.getElementsByClassName("card-expanded");
    window.history.pushState(undefined, undefined, "/");
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.add("collapse-into-close-button");
        cards[i].classList.add("animating", "fade-out");
        setTimeout(() => {
            cards[i].classList.add("hidden");
            cards[i].classList.remove("animating", "fade-out");
            cards[i].classList.remove("collapse-into-close-button");
        }, 1000);
    }
}

function openExpandedCardByUrl() {
    const pathname = window.location.pathname;
    const firstHeader = document.getElementById("first-header");
    const secondHeader = document.getElementById("second-header");
    const thirdHeader = document.getElementById("third-header");
    const designHeader = document.getElementById("TH-SH").querySelector("a");
    const urlParams = new URLSearchParams(window.location.search);
    const cardId = urlParams.get("card");

    if (pathname.includes("/experience") || cardId) {
        renderNewPage(thirdHeader, true);
        hideHeaderCover();
        if (cardId) {
            const card = document.getElementById(cardId);
            openExpandedCard(card);
            return;
        }
        if (pathname.includes("/experience/design")) {
            swapThirdHeaders(designHeader);
            const card = document.getElementById(pathname.split("/")[3]);
            if (!card) return;
            openExpandedCard(card);
            return;
        }
        const card = document.getElementById(pathname.split("/")[2]);
        if (!card) return;
        openExpandedCard(card);
    } else if (pathname === "/about") {
        renderNewPage(firstHeader, true);
        hideHeaderCover();
    } else if (pathname === "/hobbies") {
        renderNewPage(secondHeader, true);
        hideHeaderCover();
    }
}

function openExpandedCardBySearchParam() {
    const thirdHeader = document.getElementById("third-header");
    if (cardId) {
        const card = document.getElementById(cardId);
        renderNewPage(thirdHeader);
        openExpandedCard(card);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    showIcons();
    window.addEventListener("resize", detectWindowResize);
    openExpandedCardByUrl();
});
