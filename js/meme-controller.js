'use strict';

var gCanvas;
var gCtx;
var gCurrImg;

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

function onEditMemeText(text) {
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = 'white';
    gCtx.font = '50px impact';
    gCtx.textAlign = 'left';
    updateLines(text, gCtx.font, gCtx.textAlign, gCtx.fillStyle);
    let lines = getLines();
    let txt = lines.txt;
    onDrawText(txt, 100, 100);
}

function onDrawText(text, x, y) {
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}

function downloadMeme(elLink) {
    var imgContent = canvas.toDataURL();
    elLink.href = imgContent;
}