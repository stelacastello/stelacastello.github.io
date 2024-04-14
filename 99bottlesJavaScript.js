function generateLyrics() {
    let lyrics = '';
    for (let i = 99; i > 0; i--) {
        lyrics += `${i} bottles of beer on the wall, ${i} bottles of beer.<br>`;
        lyrics += `Take one down and pass it around, ${i - 1} bottles of beer on the wall.<br><br>`;
    }
    return lyrics;
}

document.getElementById('lyrics').innerHTML = generateLyrics();
