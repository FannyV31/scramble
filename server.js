window.onload = choosePic;

var myPix = new Array('letter_A.png', 'letter_B.png', 'letter_C.png', 'letter_D.png', 'letter_E.png', 'letter_F.png', 'letter_G.png', 'letter_H.png', 'letter_I.png', 'letter_J.png', 'letter_K.png', 'letter_L.png', 'letter_M.png', 'letter_N.png', 'letter_O.png', 'letter_P.png', 'letter_Q.png', 'letter_R.png', 'letter_S.png', 'letter_T.png', 'letter_U.png', 'letter_V.png', 'letter_W.png', 'letter_X.png', 'letter_Y.png', 'letter_Z.png', 'letter.png');

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];



// function randomImg() {
//     var myImages = new Array();
//     var images = ['letter_A.png', 'letter_B.png', 'letter_C.png', 'letter_D.png', 'letter_E.png', 'letter_F.png', 'letter_G.png', 'letter_H.png', 'letter_I.png', 'letter_J.png', 'letter_K.png', 'letter_L.png', 'letter_M.png', 'letter_N.png', 'letter_O.png', 'letter_P.png', 'letter_Q.png', 'letter_R.png', 'letter_S.png', 'letter_T.png', 'letter_U.png', 'letter_V.png', 'letter_W.png', 'letter_X.png', 'letter_Y.png', 'letter_Z.png', 'letter.png'];

// $('<img src="images/Blue copy' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#draggable');

<script>
window.onload = choosePic;

var myPix = random

var myPix = new Array('letter_A.png', 'letter_B.png', 'letter_C.png', 'letter_D.png', 'letter_E.png', 'letter_F.png', 'letter_G.png', 'letter_H.png', 'letter_I.png', 'letter_J.png', 'letter_K.png', 'letter_L.png', 'letter_M.png', 'letter_N.png', 'letter_O.png', 'letter_P.png', 'letter_Q.png', 'letter_R.png', 'letter_S.png', 'letter_T.png', 'letter_U.png', 'letter_V.png', 'letter_W.png', 'letter_X.png', 'letter_Y.png', 'letter_Z.png', 'letter.png');

function choosePic() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("myPicture").src = myPix[randomNum];
</script>

var str = "HELLO";
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var strArray = str.split('');
var lettersArray = letters.split('');

for (var i = 0; i < 3; i++) {
    var pos1 = Math.round(Math.random() * (str.length - 1));
    var pos2 = Math.round(Math.random() * (letters.length - 1));
    strArray[pos1] = lettersArray[pos2];
}

alert(strArray.join(""));