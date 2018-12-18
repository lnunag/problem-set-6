/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
  var ctx = document.getElementById('canvas1').getContext('2d');
    ctx.font = '48px sans-serif';
    ctx.strokeText('Hello, World!', 10, 50);
}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {

  height = Number(prompt('Height:'))
  width = Number(prompt('Width:'))
  x = Number(prompt('X:'))
  y = Number(prompt('Y:'))

  if (height < 1 || !Number.isInteger(height)){
    alert("Your height is too small.")
  }
  if (width < 1 || !Number.isInteger(width)){
    alert("Your width is too small.")
  }
  if (x < 5 || !Number.isInteger(x)){
    alert("Your x-coordinate is too small.")
  }
  if (y < 5 || !Number.isInteger(y)){
    alert("Your y-coordinate is too small.")
  }
  if (length > 500 || width > 1000 || x > 1000 || y > 500 || !Number.isInteger(y)){
    alert("Your rectangle will not fit on the canvas.")
  }
  var ctx = document.getElementById('canvas2').getContext('2d');
    ctx.strokeRect(x, y, width, height);
}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {
  color = prompt("Color:");

  if (color == "black"){
    var ctx = document.getElementById('canvas3').getContext('2d');
    ctx.fillStyle = 'black';
      ctx.fillRect(10, 10, 100, 50);
  }
  if (color == "blue"){
    var ctx = document.getElementById('canvas3').getContext('2d');
    ctx.fillStyle = 'blue';
      ctx.fillRect(10, 10, 100, 50);
  }
  if (color == "green"){
    var ctx = document.getElementById('canvas3').getContext('2d');
    ctx.fillStyle = 'green';
      ctx.fillRect(10, 10, 100, 50);
  }
  if (color == "orange"){
    var ctx = document.getElementById('canvas3').getContext('2d');
    ctx.fillStyle = 'orange';
      ctx.fillRect(10, 10, 100, 50);
  }
  if (color == "purple"){
    var ctx = document.getElementById('canvas3').getContext('2d');
    ctx.fillStyle = 'purple';
      ctx.fillRect(10, 10, 100, 50);
  }
  if (color == "red"){
    var ctx = document.getElementById('canvas3').getContext('2d');
    ctx.fillStyle = 'red';
      ctx.fillRect(10, 10, 100, 50);
  }
  if (color == "yellow"){
    var ctx = document.getElementById('canvas3').getContext('2d');
    ctx.fillStyle = 'yellow';
      ctx.fillRect(10, 10, 100, 50);
  }
  if (color !="black" && color !="blue" && color !="green" && color !="orange" && color !="purple" && color !="red" && color !="yellow")
    alert(color + " is not a supported color.")
}

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {
  let x=10;
  let y=10;
  let a;
  let b;
  let c;
  let canvas = document.getElementById("canvas4");
  let context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  while(true){
	a=Number(prompt("Side 1:"));
	b=Number(prompt("Side 2:"));
	c=Number(prompt("Side 3:"));
	if(((a**2) + (b**2) == (c**2)) && a>0 && b>0 && c>0 && canvas.width-x-a>=0 && canvas.height-y-b>=0){
		break;
	}else{
		alert("This is not a valid right triangle.")
	}
  }

 context.beginPath();
 context.moveTo(x,y);
 context.lineTo(x,y+a);
 context.stroke();

 context.beginPath();
 context.moveTo(x,y+a);
 context.lineTo(x+b,y+a);
 context.stroke();

 context.beginPath();
 context.moveTo(x,y);
 context.lineTo(x+b,y+a);
 context.stroke();
}


/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
  let radius;
  let canvas = document.getElementById('canvas5');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
	while(true){
		radius=Number(prompt("Radius:"));
		if(radius>=1 && radius<=canvas.width && Number.isInteger(radius)){
			break;
		}
	}
  let x=canvas.width;
  let y=canvas.height;
  let eye=radius*.1
  let mouth=radius*.7
  ctx.beginPath();
  ctx.arc(x/2, y/2, radius, 0, Math.PI*2);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x/2 - radius/3, y/2-radius/4, eye,0, Math.PI*2);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x/2+radius/3, y/2-radius/4, eye,0, Math.PI*2);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x/2, y/2, mouth,0, Math.PI);
  ctx.stroke();
  }



/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {
    let canvas = document.getElementById('canvas6');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

      let outer=Number(prompt("Outer radius:"));
      let inner=Number(prompt("Inner radius:"));
      if (outer>=inner && canvas.width>=outer+125 && canvas.height>=outer+125 && inner>=1 && outer>=1){
        let points=5;
        let outerx=[];
        let outery=[];
        let innerx=[];
        let innery=[];
        for(let i=0;i<points;i++){
          outerx.push(Math.cos((Math.PI*2*i)/points-(Math.PI/2))*outer+125);
          outery.push(Math.sin((Math.PI*2*i)/points-(Math.PI/2))*outer+125);
          innerx.push(Math.cos(((Math.PI*2*i)/points)-(Math.PI/2)+(Math.PI/points))*inner+125);
          innery.push(Math.sin(((Math.PI*2*i)/points)-(Math.PI/2)+(Math.PI/points))*inner+125);
        }
        ctx.beginPath();
        ctx.moveTo(outerx[0], outery[0]);
        for(let j=0;j<outerx.length;j++){
          ctx.lineTo(innerx[j], innery[j]);
          ctx.lineTo(outerx[j+1], outery[j+1]);
        }
        ctx.lineTo(outerx[0], outery[0]);
        ctx.stroke();
        ctx.closePath();
    }
    else{
        alert('Your outer radius must be larger than your inner radius.');
      }
  }




/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {
  let canvas = document.getElementById('canvas7');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let sidelength=80;
  let center=[10+(sidelength)/2+sidelength/Math.sqrt(2), 10+(sidelength/2)+(sidelength/Math.sqrt(2))]
  console.log(center)
  let points=8;
  let pointx=[];
  let pointy=[];

  for(let i=0;i<points;i++){
    pointx.push(Math.cos(((Math.PI*2*i)/points)-Math.PI/8)*100+center[0]);
    pointy.push(Math.sin(((Math.PI*2*i)/points)-Math.PI/8)*100+center[1]);
  }
  ctx.beginPath();
  ctx.moveTo([pointx][0], pointy[0]);
  for(let j=0;j<pointx.length;j++){
    ctx.lineTo(pointx[j], pointy[j]);
  }
  ctx.lineTo(pointx[0], pointy[0]);
  ctx.stroke();

  ctx.fillStyle="red";
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.textAlign="center";
  ctx.font="56px Arial";
  ctx.fillStyle="white";
  ctx.fillText("STOP", center[0], center[1]+15);
  ctx.closePath()
}


/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {
  let canvas = document.getElementById('canvas8');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let sideLength=Number(prompt("Side Length:"));
  let x=10;
  let y=canvas.height-10;
  let i=0;
  lineNumber=1;
  while(i<5){
    for(let j=0+lineNumber;j<=5;j++){
      ctx.strokeRect(x,y-sideLength,sideLength,sideLength);
      x+=sideLength;
    }
    x=10+(sideLength/2)*lineNumber;
    y-=sideLength;
    lineNumber++;
    i++;
  }

}
/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {
  let canvas = document.getElementById('canvas9');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  while(true){
  house=prompt("House Color:");
  door=prompt("Door Color:");
  if((door=="brown" || door=="blue" || door=="green" || door=="orange" || door=="purple" || door=="red" || door=="yellow")
  && (house=="brown" || house=="blue" || house=="green" || house=="orange" || house=="purple" || house=="red" || house=="yellow")) {
    break;
  }
  else{
      alert("One of your colors is not supported.")
  }
}
let x=150;
let lengthHouse=576;
let heightHouse=400;
let y=canvas.height-heightHouse-10;
ctx.beginPath();
ctx.fillStyle=house;
ctx.fillRect(x,y,lengthHouse,heightHouse);
ctx.fillStyle=door;
ctx.fillRect(x+(lengthHouse/2)-30,y+300,60,100);
ctx.fillStyle="gray";
ctx.moveTo(x,y);
ctx.lineTo(x+286,150);
ctx.lineTo(x+lengthHouse,y);
ctx.lineTo(x,y);
ctx.fill();
ctx.fillStyle="#ADD8E6";
ctx.fillRect(300,y+100, 50, 50);
ctx.fillRect(526,y+100, 50, 50);
ctx.fillRect(300,y+200, 50, 50);
ctx.fillRect(526,y+200, 50, 50);
ctx.closePath();
}
