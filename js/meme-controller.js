'use strict';

var gCanvas;
var gCtx;
var gCurrLine = 1;
var gCurrImg;
var gCurrMeme;

function onInit() {
    gCanvas = document.querySelector('#canvas');
    gCtx = gCanvas.getContext('2d');
    renderGallery();
}

function renderGallery() {
    var imgs = getImgsForDisplay();
    var strHTMLs = imgs.map((img) => {
        return `<div><img class="meme-img img-${img.id}" src="images/memes/${img.url}" onclick="onDrawImg('${img.id}')"></div>`
    });
    var elGalleryContainer = document.querySelector('.gallery-container');
    elGalleryContainer.innerHTML = strHTMLs.join('');
}

function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container');
    gCanvas.width = elContainer.offsetWidth;
    gCanvas.height = elContainer.offsetHeight;
}

function onDrawImg(imgId) {
    // gCurrImg = getImgById(imgId);
    // console.log(gCurrImg)
    updateSelectedImg(+imgId);
    resizeCanvas();
    var elImg = document.querySelector(`.img-${imgId}`);
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height);
}

function onEditMemeText(text, line) {
    updateSelectedLineIdx(+line);
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = 'white';
    gCtx.font = '50px Impact';
    gCtx.textAlign = 'center';
    updateLines(text, gCtx.font, gCtx.textAlign, gCtx.fillStyle);
    let lines = getLines();
    let txt = lines.txt;
    if (gCurrLine === 1){
        onDrawText(txt, 225, 100);
    } else {
        onDrawText(txt, 225, 400);
    }
}

function onDrawText(text, x, y) {
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}

// function onIncreaseText(text) {
//     updateLines();
// }

function onDownloadMeme(elLink) {
    var imgContent = canvas.toDataURL();
    elLink.href = imgContent;
}



// function handleMouse(ev) {
//     console.log('ev:', ev);
//     document.querySelector('input[name=line-top]').innerText = ev.type
// }

// function handleTouch(ev) {
//     ev.preventDefault();
//     console.log('ev:', ev);
//     document.querySelector('.touch h3').innerText = ev.type

// }

// function handleBoth(ev) {
//     ev.preventDefault();
//     console.log('ev:', ev.type);
//     document.querySelector('.both h3').innerText = ev.type

// }