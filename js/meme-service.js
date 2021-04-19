'use strict';

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
            txt: 'default',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
}


function getMeme() {
    return gMeme;
}

// function getImgById(imgId) {
//     return gImgs.find(function (img) {
//         return img.id === imgId
//     });
// }
    
function getImgsForDisplay() {
    return gImgs;
}

function updateSelectedImg(imgId) {
    gMeme.selectedImgId = imgId;
}

function updateSelectedLineIdx(line) {
    gMeme.selectedLineIdx = line;
    gCurrLine = line;
}

function updateLines(txt, size, align, color) {
    gMeme.lines[0].txt = txt;
    gMeme.lines[0].size = size;
    gMeme.lines[0].align = align;
    gMeme.lines[0].color = color;
}

function getLines() {
    return gMeme.lines[0];
}



