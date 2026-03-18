class Figura {

 constructor(x, y, tam, col) {

  this.x = x;

  this.y = y;

  this.tam = tam;

  this.col = col;

 }



 display() {

  fill(this.col);

  rect(this.x, this.y, this.tam);

 }

}



let figuras = [];



function setup() {

 createCanvas(500, 250);

 noStroke();



 figuras = [

  new Figura(115, 150, 89, '#0000fe'),

  new Figura(110, 150, 75, '#ffd000'),

  new Figura(100, 150, 65, '#0088ff')

 ];

}



function draw() {

 background(176);



 for (const figura of figuras) {

  figura.display();

 }

}