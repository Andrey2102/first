
function chan(n){
	var z = document.images[n].src
    document.images[n].src=document.images[2].src;
    document.images[2].src=z
}

function onMoveImg(){
	document.images[3].heigth = 240
	document.images[3].width = 240
}
function onOutImg(){
	document.images[3].heigth = 90
	document.images[3].width = 90
}

function kur(n){
	document.images[n].src = "kur.png"
}

function kur1(n){
	document.images[n].src = "whi.png"
}
