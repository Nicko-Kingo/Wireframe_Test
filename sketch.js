/*   Constructs a simple wireframe of a table
*
*    Each face is colored
*
*
*/

//Top of the Table
let node1 = [-100,100,100];
let node2 = [100,100,100];
let node3 = [100,-100,100];
let node4 = [-100,-100,100];

//Bottom of the table top
let n9 = [-100,100,80];
let n10 = [100,100,80];
let n11 = [100,-100,80];
let n12 = [-100,-100,80];

//Lower Left Leg
let node5 = [-100,100,-100]; //Lower Left Node
let node6 = [-100,70,-100];  //Upper left Node
let node7 = [-70,100,-100];  //Lower Right Node
let node8 = [-70,70,-100];   //Upper Right Node

//Special nodes for drawing edges/shapes for lower left leg
let n13 = [-100,70,80];
let n14 = [-70,100,80];
let n15 = [-70,70,80];

//Upper Left Leg
let n16 = [-100,-100,-100]; //Lower Left Node
let n17 = [-100,-70,-100];  //Upper left Node
let n18 = [-70,-100,-100];  //Lower Right Node
let n19 = [-70,-70,-100];   //Upper Right Node

//Upper Left Leg upper nodes
let n20 = [-100,-70,80];   
let n21 = [-70,-100,80];
let n22 = [-70,-70,80];

//upper Right Leg 
let n23 = [100,-100,-100]; //Lower Left Node
let n24 = [100,-70,-100];  //Upper left Node
let n25 = [70,-100,-100];  //Lower Right Node
let n26 = [70,-70,-100];   //Upper Right Node

//Upper Right Leg upper nodes
let n27 = [100,-70,80];   
let n28 = [70,-100,80];
let n29 = [70,-70,80];

//Lower Right Leg
let n30 = [100,100,-100]; //Lower Left Node
let n31 = [100,70,-100];  //Upper left Node
let n32 = [70,100,-100];  //Lower Right Node
let n33 = [70,70,-100];   //Upper Right Node

//Lower Right Leg Upper nodes
let n34 = [100,70,80];   
let n35 = [70,100,80];
let n36 = [70,70,80];


//Difference set of nodes for each face?
//To get different colors
let nodes = [node1,node2,node3,node4, node5, node6, node7, node8, n9, n10, n11, n12, n13,n14,n15,
            n16,n17,n18,n19,n20,n21,n22,n23,n24,n25,n26,n27,n28,n29,n30,n31,n32,n33,n34,n35,n36];

//Edges for the top
let e1 = [0,1];
let e2 = [1,2];
let e3 = [2,3];
let e4 = [3,0];
let e5 = [4,8]; 

//Lower Left Leg edges
let e6 = [5,4];
let e7 = [4,6];
let e8 = [6,7];
let e9 = [7,5];

//Edges top of table to bottom
let e10 = [8,0];
let e11 = [1,9];
let e12 = [2,10];
let e13 = [3,11];

//Lower Left edges together
let e14 = [8,9];
let e15 = [10,9];
let e16 = [11,10];
let e17 = [8,11];

//Lower Left Edges to top of table
let e18 = [5,12];
let e19 = [6,13];
let e20 = [7,14];
let e21 = [14,13];
let e22 = [14,12];

//Upper Left leg, connect lower nodes 
let e23 = [15,16];
let e24 = [17,15];
let e25 = [17,18];
let e26 = [16,18];

//Upper left leg, connect lower nodes to upper
let e27 = [3,15];
let e28 = [16,19];
let e29 = [17,20];
let e30 = [18,21];

//Upper Left Leg upper node connections
let e31 = [21,20];
let e32 = [21,19];

//Upper Right Leg lower connections
let e33 = [22,23];
let e34 = [22,24];
let e35 = [24,25];
let e36 = [23,25];

//Upper Right lower to upper connections
let e37 = [2,22];
let e38 = [26,23];
let e39 = [27,24];
let e40 = [28,25];

//Upper Right upper connections
let e41 = [27,28];
let e42 = [28,26];

//Lower Right Lower connections
let e43 = [29,30];
let e44 = [29,31];
let e45 = [31,32];
let e46 = [30,32];

//Lower Right lower to upper connections
let e47 = [1,29];
let e48 = [33,30];
let e49 = [34,31];
let e50 = [35,32];

let e51 = [34,35];
let e52 = [35,33];

let edges = [e1,e2,e3,e4,e5,e6,e7,e8,e9,e10,e11,e12,e13,e14,e15,e16,e17,
            e18,e19,e20,e21,e22,e23,e24,e25,e26,e27,e28,e29,e30,e31,e32,
            e33,e34,e35,e36,e37,e38,e39,e40,e41,e42,e43,e44,e45,e46,e47,
            e48,e49,e50,e51,e52];


//Do faces here
let f1 = [0,1,2,3];
let f2 = [8,9,10,11];

let f3 = [0,1,9,8];
let f4 = [1,2,10,9];
let f5 = [2,3,11,10];
let f6 = [3,0,8,11];

//Fronts
//Top Left Leg
let f7 = [16,18,21,19];
//TopRight
let f8 = [26,28,25,23];
//BottomLeft
let f9 = [6,4,0,13];
//Bottom Right
let f10 = [1,29,31,34];

//Top Right Left facing
let f11 = [28,27,24,25];
//Bottom Right Left Facing
let f12 = [32,35,34,31];

//Bottom Left
let f13 = [4,0,12,5];

//Top Left Left Facing
let f14 = [15,16,19,3];

//Lower Left Right facing
let f15 = [6,13,14,7];

//Upper Left Right Facing
let f16 = [17,20,21,18];

//Upper Right Right Facing
let f17 = [26,2,22,23];

//Lower Right Right Facing
let f18 = [1,29,30,33];

//Lower Right Back Facing
let f19 = [32,35,33,30];

//Lower Left Back Facing
let f20 = [7,14, 12,5];

//Upper Right Back Facing
let f21 = [27,24,22,2];

//Upper Left Back Facing
let f22 = [17,20,3,15];

//Lower left bottom
let f23 = [5,4,6,7];
//Upper Left bottom
let f24 = [16,15,17,18];

//Upper Right Bottom
let f25 = [23,22,24,25];
//Lower right bottom
let f26 = [30,29,31,32];

//Faces for the coffee table
let faces = [f2,
             
             //Left facing legs
             f11,f12,
             
             //Right Facing Sides
             f15,f16,
             
             //Front Facing Legs
             f7,f8, f9, f10,
             
             f18,f13,
             
             //Back Facing sides
             f19,f20,f21,f22,
             
             f17,f14,
             
             //Table Sides?
             f3, f4, f5, f6, 
             
             f1,
            
             f23, f24, f25, f26 ];

//top of table base
let v1 = [0,0,0];
let v2 = [0,0,-100];

//bottom of table base
let v3 = [0,0,100];

//Sides of table base
let v4 = [0,-100,0];   //Bottom 
let v5 = [-100,0,0];   //Right
let v6 = [0,100,0];   //Top
let v7 = [100,0,0];   //Left



//Holds the nodes, is looped through to rotate them
//Only 7 nodes are necessary as there are only 6 possible faces
let b  = [v1,v2,v3,v4,v5,v6,v7];

//Node pairings for normalized vector calculations
let v   = [[v1,v3],
           
           //Legs, Left
           [v1,v7],[v1,v7],
           
           //Legs, Right
           [v1,v5],[v1,v5],
           
           //Legs, Front
           [v1,v4],[v1,v4],[v1,v4],[v1,v4],
           
           [v1,v5],[v1,v7],
           
           //Legs, Back
           [v1,v6],[v1,v6],[v1,v6],[v1,v6],
           
           [v1,v5],[v1,v7],
           
           //Table Sides
           [v1,v4], [v1,v5],[v1,v6],[v1,v7],
           
           //Top Of Table
           [v1,v2],
            
           
           //Bottom of the table
           [v1,v3],[v1,v3],[v1,v3],[v1,v3] ]

//Array of colors for each face
let colors = ['red','yellow', 'blue', 'green', 'Aqua', 'DarkMagenta','DarkSlateGray',
             'khaki', 'LightPink','MediumVioletRed','OrangeRed', 'Orchid','Tomato', 'SteelBlue', 'Chocolate','LawnGreen',
             'LightSeaGreen', 'Maroon', 'DeepPink','MediumAquaMarine', 'Olive','White','Teal','SaddleBrown','RebeccaPurple',
             'RoyalBlue']


//Draws the Nodes of the wire frame
function drawNodes()
{
  push();
  fill(0);
  noStroke();
  //beginShape();
  for(let p in nodes)
  {
    //vertex(nodes[p][0], nodes[p][1]);
    ellipse(nodes[p][0], nodes[p][1], 3, 3);
  }
  //endShape();
  pop();
}

//Draw the faces of the coffee table
function drawFaces()
{
  //push();
  for(let f in faces)
  {
    let z = [0,0,0]
    z[0] = v[f][0][0] - v[f][1][0];
    z[1] = v[f][0][2] - v[f][1][1];
    z[2] = v[f][0][1] - v[f][1][2];
    
    z[2] /= (sqrt(z[0] * z[0] + z[1] * z[1] + z[2] * z[2]));

    if(z[2] <= 0)
      continue;
    
    beginShape();
    fill(colors[f]);
    
    //Stroke();
    for(let x in faces[f])
    {
      let n = faces[f][x];
      
      vertex(nodes[n][0], nodes[n][1]);
      //console.log(nodes[f[n]][0]) 
    }
    
    endShape();
    
  }
  //pop();
}

//Draws the edges of the wireframe
function drawEdges()
{
  push();
  for (var e=0; e<edges.length; e++) {
    var n0 = edges[e][0];
    var n1 = edges[e][1];
    var node0 = nodes[n0];
    var node1 = nodes[n1];
    line(node0[0], node0[1], node1[0], node1[1]);
  }
  pop();
}

//Rotates the frame about the Y axis
var rotateY3D = function(theta) {
  var sinTheta = sin(theta);
  var cosTheta = cos(theta);
  for (var n=0; n<nodes.length; n++) {
    var node = nodes[n];
    let x = node[0];
    let z = node[2];
    node[0] = x * cosTheta - z * sinTheta;
    node[2] = z * cosTheta + x * sinTheta;
  }
  for(var i in b)
  {
    let x = b[i][0];
    let z = b[i][2];
    b[i][0] = x * cosTheta - z * sinTheta;
    b[i][2] = z * cosTheta + x * sinTheta;
  }
};

//Rotates about the X axis
var rotateX3D = function(theta) {
  var sinTheta = sin(theta);
  var cosTheta = cos(theta);
  for (var n=0; n<nodes.length; n++) {
    var node = nodes[n];
    let y = node[1];
    let z = node[2];
    node[1] = y * cosTheta - z * sinTheta;
    node[2] = z * cosTheta + y * sinTheta;
  }
  for(var i in b)
  {
    let y = b[i][1];
    let z = b[i][2];
    b[i][1] = y * cosTheta - z * sinTheta;
    b[i][2] = z * cosTheta + y * sinTheta;
  }
};

//Generates the canvas
function setup() {
  createCanvas(400, 400);

}

//Rotations for X and Y axis
var thetaX = 0;
var thetaY = 0;

//Starting point for rotations
var xy = [0,0];

function draw() {

  background(220);
  
  //Moves the center to an arbitrary center point for rotations
  translate(200,200);
  
  
  drawNodes();
  drawEdges();
  drawFaces();
  
  //Rotates the table whenever the mouse is pressed,
  //amount rotated depends on where the user last clicked
  //If the destination is reached, reset the initial position (xy)
  //to where the mouse currently is
  if(mouseIsPressed)
  {
    //Rotates the X axis as related to the change in Y
    //Change to rotX to prevent double math or whatever
    if(thetaY <= abs((mouseX - xy[0])) / 100)
    {
      let rot = abs((mouseX - xy[0])) / 175
      if(mouseX > xy[0])
        rotateY3D(-rot);
      else if(mouseX < xy[0])
        rotateY3D(rot);
      thetaY += rot;
    }
    else
    {
      thetaY = 0;
      xy[0] = mouseX;
    }
    //Rotates the Y axis as related for the change in X
    //Change to rotY to prevent double math or whatever
    if(thetaX <= abs((mouseY - xy[1])) / 100)
    {
      let rot = abs((mouseY - xy[1])) / 175
      if(mouseY > xy[1])
        rotateX3D(-rot);
      else if(mouseY < xy[1])
        rotateX3D(rot);
      thetaX += rot;
    }
    else
    {
      thetaX = 0;
      xy[1] = mouseY;
    }
    
  }
 
}

//Called when the mouse is pressed
function mousePressed()
{
  thetaX = 0;
  thetaY = 0;
  xy = [mouseX, mouseY];
}

