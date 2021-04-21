'use strict';

var gCurrLineIdx = 0;
var gCurrImg;
var gCurrMeme;


var gKeywords = { 'happy': 12, 'funny': 1 }
var gImgs = [
    { id: 1, url: '1.jpg', keywords: ['politics'] },
    { id: 2, url: '2.jpg', keywords: ['cute', 'animals'] },
    { id: 3, url: '3.jpg', keywords: ['cute', 'animals'] },
    { id: 4, url: '4.jpg', keywords: ['cute', 'animals'] },
    { id: 5, url: '5.jpg', keywords: ['cute', 'animals'] },
    { id: 6, url: '6.jpg', keywords: ['cute', 'animals'] },
    { id: 7, url: '7.jpg', keywords: ['cute', 'animals'] },
    { id: 8, url: '8.jpg', keywords: ['cute', 'animals'] },
    { id: 9, url: '9.jpg', keywords: ['cute', 'animals'] },
    { id: 10, url: '10.jpg', keywords: ['cute', 'animals'] },
    { id: 11, url: '11.jpg', keywords: ['cute', 'animals'] },
    { id: 12, url: '12.jpg', keywords: ['cute', 'animals'] },
    { id: 13, url: '13.jpg', keywords: ['cute', 'animals'] },
    { id: 14, url: '14.jpg', keywords: ['cute', 'animals'] },
    { id: 15, url: '15.jpg', keywords: ['cute', 'animals'] },
    { id: 16, url: '16.jpg', keywords: ['cute', 'animals'] },
    { id: 17, url: '17.jpg', keywords: ['cute', 'animals'] },
    { id: 18, url: '18.jpg', keywords: ['cute', 'animals'] }
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
            posX: 225,
            posY: 100
        },
        {
            txt: 'line2',
            size: 50,
            font: 'Impact',
            align: 'center',
            fill: 'white',
            stroke: 'black',
            posX: 225,
            posY: 375
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

function changeCurrLineIdx(idx) {
    gMeme.selectedLineIdx = idx;
    gCurrLineIdx = idx;
}


function switchLines() {
    if (gCurrLineIdx === line) return;
    else gCurrLineIdx = line;
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


function updateLineSize(line, size) {
    gMeme.selectedLineIdx = line;
    gMeme.lines[gMeme.selectedLineIdx].size = size;
}

function getLines() {
    return gMeme.lines;
}

function getLine() {
    return gMeme.lines[gMeme.selectedLineIdx];
}

function getFontSize() {
    return gMeme.lines[gCurrLineIdx].size;
}

function addLine() {
    let line = {
        txt: '',
        size: 50,
        font: 'Impact',
        align: 'center',
        fill: 'white',
        stroke: 'black',
        posX: 225,
        posY: 150
    }
    gMeme.lines.push(line);
}