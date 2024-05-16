let trazos1 = [];
let trazos2 = [];
let trazos3 = [];
let trazos4 = [];
let img;
let estado = 0;

function preload() {
    img = loadImage('data/fondo.png');
    for(let i=0; i<11; i++ ) {
        let nombre = "data/blue1/trazo"+nf( i, 2)+".png";
        trazos1[i] = loadImage(nombre);
    }
    for(let i=0; i<7; i++ ) {
        let nombre = "data/blue2/trazo"+nf( i, 2)+".png";
        trazos2[i] = loadImage(nombre);
    }
    for(let i=0; i<8; i++ ) {
        let nombre = "data/blue3/trazo"+nf( i, 2)+".png";
        trazos3[i] = loadImage(nombre);
    }

    for(let i=0; i<5; i++ ) {
        let nombre = "data/blue4/trazo"+nf( i, 2)+".png";
        trazos4[i] = loadImage(nombre);
    }

}
function setup (){
    createCanvas (windowWidth, windowHeight);
    background(225, 225, 192);
    image(img, 0, 0, width, height);
    imageMode(CENTER);
}

function draw() {
    // let x = random ( width );
    // let y = random ( height );
    // let cual = int (random( trazos.length ));
    // image(trazos[cual] , x, y );
}

function mousePressed(){ 
    if (estado === 0){
        estado = 1;
        dibujoA();
    } else if (estado === 1){
        estado = 2;
        dibujoA2();
    } else if (estado === 2){
        estado = 3;
        dibujoB();
    } else if (estado === 3){
        estado = 4;
        dibujoB2();
    }else if (estado === 4){
        estado = 5;
        dibujoC();
    } else if (estado === 5){
        estado = 6;
        dibujoC2();
    }else if (estado === 6){
        estado = 7;
        dibujoD();
    }else if (estado === 7){
        estado = 0;
        dibujoD2();
    }
}

function dibujoA (){
    let x = width/2;
    let y = height/2;
    image(trazos1[0], x, y, 400, 604);
    image(trazos1[1], x, y, 400, 604);
    image(trazos1[2], x, y, 400, 604);
    image(trazos1[3], x, y, 400, 604);
    image(trazos1[4], x, y, 400, 604);
}
function dibujoA2(){
    let x = width/2;
    let y = height/2;
    image(trazos1[5], x, y, 400, 604);
    image(trazos1[6], x, y, 400, 604);
    image(trazos1[7], x, y, 400, 604);
    image(trazos1[8], x, y, 400, 604);
    image(trazos1[9], x, y, 400, 604);
    image(trazos1[10], x, y, 400, 604);
}


function dibujoB(){
    let x = 100;
    let y = 300;
    image(trazos4[2], x, y, 400, 604);
    image(trazos4[3], x, y, 400, 604);
    image(trazos4[4], x, y, 400, 604);
}
function dibujoB2(){
    let x = 100;
    let y = 300;
    image(trazos4[0], x, y, 400, 604);
    image(trazos4[1], x, y, 400, 604);
}



function dibujoC (){ 
    let x = 1200;
    let y = 300;
    image(trazos2[4], x, y, 500, 704);
    image(trazos2[5], x, y, 500, 704);
    image(trazos2[6], x, y, 500, 704);
}
function dibujoC2 (){ 
    let x = 1200;
    let y = 300;
    image(trazos2[0], x, y, 500, 704);
    image(trazos2[1], x, y, 500, 704);
    image(trazos2[2], x, y, 500, 704);
    image(trazos2[3], x, y, 500, 704);
}



function dibujoD (){ 
    let x = 400;
    let y = 450;
    image(trazos3[0], x, y, 500, 704);
    image(trazos3[1], x, y, 500, 704);
    image(trazos3[2], x, y, 500, 704);
    image(trazos3[3], x, y, 500, 704);
}
function dibujoD2 (){ 
    let x = 400;
    let y = 450;
    image(trazos3[4], x, y, 500, 704);
    image(trazos3[5], x, y, 500, 704);
    image(trazos3[6], x, y, 500, 704);
    image(trazos3[7], x, y, 500, 704);
}
