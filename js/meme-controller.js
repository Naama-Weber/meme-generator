'use strict';

var gCanvas;
var gCtx;
var gCurrImgId;

function onInit() {
    gCanvas = document.querySelector('#canvas');
    gCtx = gCanvas.getContext('2d');
    renderGallery();
}

function renderGallery() {
    let imgs = getImgsForDisplay();
    let strHTMLs = imgs.map((img) => {
        return `<div><img class="meme-img img-${img.id}" src="images/memes/${img.url}" onclick="onRenderCanvas(${img.id})"></div>`
    });
    let elGalleryContainer = document.querySelector('.gallery-container');
    elGalleryContainer.innerHTML = strHTMLs.join('');
}

function resizeCanvas(width, height) {
    gCanvas.width = width;
    gCanvas.height = height;
}

function onRenderCanvas(imgId = gCurrImgId) {
    gCurrImgId = imgId;
    updateSelectedImg(imgId);
    onShowEditor();
    let meme = getMeme();
    var img = new Image();
    img.src = `images/memes/${meme.selectedImgId}.jpg`;
    img.onload = () => {
        resizeCanvas(img.width, img.height)
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        drawText();
    }
}

function drawText() {
    const lines = getMeme().lines;
    lines.forEach(line => {
        gCtx.txt = line.txt;
        gCtx.lineWidth = 2;
        gCtx.strokeStyle = line.stroke;
        gCtx.fillStyle = line.fill;
        gCtx.font = `${line.size}px ${line.font}`;
        gCtx.textAlign = line.align;
        gCtx.posY = line.posY;
        gCtx.posX = line.posX;
        if (line.isFocused) gCtx.strokeStyle = 'red';
        gCtx.fillText(line.txt, line.posX, line.posY);
        gCtx.strokeText(line.txt, line.posX, line.posY);
    });
}

function onEditText(txt) {
    updateMeme('txt', txt);
    onRenderCanvas();
}

function onIncreaseText(num) {
    updateMeme('size', num);
    onRenderCanvas();
}

function onDecreaseText(num) {
    updateMeme('size', num);
    onRenderCanvas();
}

function onMoveLineUp(num) {
    updateMeme('lineY', num);
    onRenderCanvas();
}

function onMoveLineDown(num) {
    updateMeme('lineY', num);
    onRenderCanvas();
}

function onChangeFill(color) {
    updateMeme('fill', color);
    onRenderCanvas();
}

function onChangeStroke(color) {
    updateMeme('stroke', color);
    onRenderCanvas();
}

function onSwitchLine() {
    changeCurrLineIdx();
    onRenderCanvas();
}

function onAddLine() {
    addLine();
    changeCurrLineIdx();
    onRenderCanvas();
}

function onRemoveLine() {
    removeLine();
    onRenderCanvas();
}

function onDownloadMeme(elLink) {
    let imgContent = canvas.toDataURL();
    elLink.href = imgContent;
}

function onShowEditor() {
    let elEditor = document.querySelector('.meme-editor');
    elEditor.classList.remove('hide-editor');
}

function onGoBack() {
    let elEditor = document.querySelector('.meme-editor');
    elEditor.classList.add('hide-editor');
}

function onToggleMenu() {
    document.body.classList.toggle('menu-open');
}