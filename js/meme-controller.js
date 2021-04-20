'use strict';

var gCanvas;
var gCtx;
var gFontSize = 50;

function onInit() {
    gCanvas = document.querySelector('#canvas');
    gCtx = gCanvas.getContext('2d');
    renderGallery();
}

function renderGallery() {
    let imgs = getImgsForDisplay();
    let strHTMLs = imgs.map((img) => {
        return `<div><img class="meme-img img-${img.id}" src="images/memes/${img.url}" onclick="onDrawImg(${img.id})"></div>`
    });
    let elGalleryContainer = document.querySelector('.gallery-container');
    elGalleryContainer.innerHTML = strHTMLs.join('');
}

function resizeCanvas() {
    let elContainer = document.querySelector('.canvas-container');
    gCanvas.width = elContainer.offsetWidth;
    gCanvas.height = elContainer.offsetHeight;
}

function onDrawImg(imgId) {
    updateSelectedImg(imgId);
    onShowEditor();
    var meme = getMeme();
    var img = new Image();
    img.src = `images/memes/${meme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
    }
    resizeCanvas();
}

function onShowEditor() {
    let elEditor = document.querySelector('.meme-editor');
    elEditor.classList.remove('hide-editor');
}

// function onHideEditor() {
//     let elEditor = document.querySelector('.meme-editor');
//     elEditor.classList.add('hide-editor');
// }
function onEditMeme(line) {
    updateSelectedLineIdx(line);
    const MEME = getMeme();
    let currLine = MEME.lines[line];
    gCtx.txt = currLine.txt;
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = currLine.stroke;
    gCtx.fillStyle = currLine.fill;
    gCtx.font = `${currLine.size}px ${currLine.font}`;
    gCtx.textAlign = currLine.align;
    gCtx.posY = currLine.posY;
    gCtx.posX = currLine.posX;
    onDrawText();
    gCtx.fillText(gCtx.txt, gCtx.posX, gCtx.posY);
    gCtx.strokeText(gCtx.txt, gCtx.posX, gCtx.posY);
}

function onDrawText() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
    let elImg = document.querySelector(`.img-${gCurrImg}`);
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height);
}


function onEditText(txt, line) {
    updateMeme('txt', txt, line);
    onEditMeme(line);
}

function onIncreaseText(num) {
    const MEME = getMeme();
    let line = MEME.selectedLineIdx;
    updateMeme('size', num, line);
    onEditMeme(line);
}

function onDecreaseText(num) {
    const MEME = getMeme();
    let line = MEME.selectedLineIdx;
    updateMeme('size', num, line);
    onEditMeme(line);
}

function onMoveLineUp(num) {
    const MEME = getMeme();
    let line = MEME.selectedLineIdx;
    updateMeme('lineY', num, line);
    onEditMeme(line);
}

function onMoveLineDown(num) {
    const MEME = getMeme();
    let line = MEME.selectedLineIdx;
    updateMeme('lineY', num, line);
    onEditMeme(line);
}

function onAddLine() {
    let elSpan = document.querySelector('.new-line');
    elSpan.innerHTML = `<lable for="3">Middle Line
    <input class="text-line" type="text" name="3" oninput="onEditText(this.value, +name)"></input>
</lable>`;
}

function onDownloadMeme(elLink) {
    let imgContent = canvas.toDataURL();
    elLink.href = imgContent;
}

function onSaveMeme(link) {
    console.log(link)
    saveToStorage()
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

function onGoBack() {
    let elEditor = document.querySelector('.meme-editor');
    elEditor.classList.add('hide-editor');
}

function onToggleMenu() {
    document.body.classList.toggle('menu-open')
}