'use strict';

var gCurrLineIdx = 0;
var gCurrImg;
var gCurrMeme;


var gKeywords = { 'happy': 12, 'funny': 1 }
var gImgs = [
    { id: 1, url: '1.jpg', keywords: ['politics'] },
    { id: 2, url: '2.jpg', keywords: ['cute', 'animals'] },
    { id: 3, url: '3.jpg', keywords: ['cute', 'animals', 'babies'] },
    { id: 4, url: '4.jpg', keywords: ['cute', 'animals'] },
    { id: 5, url: '5.jpg', keywords: ['cute', 'babies'] },
    { id: 6, url: '6.jpg', keywords: ['tv', 'funny'] },
    { id: 7, url: '7.jpg', keywords: ['cute', 'funny', 'babies'] },
    { id: 8, url: '8.jpg', keywords: ['tv', 'funny'] },
    { id: 9, url: '9.jpg', keywords: ['cute', 'funny', 'babies'] },
    { id: 10, url: '10.jpg', keywords: ['politics', 'funny'] },
    { id: 11, url: '11.jpg', keywords: ['tv', 'funny'] },
    { id: 12, url: '12.jpg', keywords: ['tv', 'funny'] },
    { id: 13, url: '13.jpg', keywords: ['tv', 'funny'] },
    { id: 14, url: '14.jpg', keywords: ['tv'] },
    { id: 15, url: '15.jpg', keywords: ['tv'] },
    { id: 16, url: '16.jpg', keywords: ['tv', 'funny'] },
    { id: 17, url: '17.jpg', keywords: ['politics'] },
    { id: 18, url: '18.jpg', keywords: ['cute', 'tv'] }
];
var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'line1',
            size: 50,
            font: 'Impact',
            align: 'center',
            fill: 'white',
            stroke: 'black',
            posX: 250,
            posY: 100,
            isFocused: true
        },
        {
            txt: 'line2',
            size: 50,
            font: 'Impact',
            align: 'center',
            fill: 'white',
            stroke: 'black',
            posX: 250,
            posY: 400,
            isFocused: false
        }
    ]
}


function getMeme() {
    return gMeme;
}

function getImgsForDisplay() {
    return gImgs;
}

function updateSelectedImg(imgId) {
    gMeme.selectedImgId = imgId;
    gCurrImg = imgId
}

function changeCurrLineIdx() {
    gMeme.lines[gMeme.selectedLineIdx].isFocused = false;
    gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx > gMeme.lines.length - 1) {
        gMeme.selectedLineIdx = 0;
    }
    gMeme.lines[gMeme.selectedLineIdx].isFocused = true;

}

function updateMeme(key, val) {
    const line = gMeme.lines[gMeme.selectedLineIdx];
    switch (key) {
        case 'txt':
            line.txt = val;
            break;
        case 'size':
            line.size += val;
            break;
        case 'lineX':
            line.posX += val;
            break;
        case 'lineY':
            line.posY += val;
            break;
        case 'fill':
            line.fill = val;
            break;
        case 'stroke':
            line.stroke = val;
            break;
        case 'font':
            line.font = val;
            break;
        case 'align':
            line.align = val;
            break;
    }
}

function addLine() {
    let line = {
        txt: 'line',
        size: 50,
        font: 'Impact',
        align: 'center',
        fill: 'white',
        stroke: 'black',
        posX: 250,
        posY: 250,
        isFocused: false
    }
    gMeme.lines.push(line);
}

function removeLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1);
}