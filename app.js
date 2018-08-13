/*MARS ROVER KATA

Including: boundaries, obstacles and functions move backwards and validate inputs
To move the rover: runCommands()
*/

var rover = {
  direction:"N",
  x: 0,
  y: 0,
  travelLog:"",
};

var obstacles = [[2, 5, 8],[4, 7, 8]];

var alert, movement;

function runCommands(command){
  command = command.toLowerCase();
  for (i = 0; i < command.length; i++){
    if (command[i].match(/[lrfb]/g)) {
      action(command[i]);
      movement = command[i];    
  }
}
};

function action(direction){
  switch(direction){
  case "r":
  turnRight(rover);
  break;
  case "l":
  turnLeft(rover);
  break;
  case "f":
  moveForward(rover);
  break;
  case "b":
  moveBackward(rover);
}
};

function turnLeft(rover){
 console.log("turnLeft was called!");
  switch(rover.direction){
  case "N":
  rover.direction = "W";
  break;
  case "S":
  rover.direction = "E";
  break;
  case "E":
  rover.direction = "N";
  break;
  case "W":
  rover.direction = "S";
  } rover.travelLog += "l";
}

function turnRight(rover){
 console.log("turnRight was called!");
  switch(rover.direction){
    case "N":
    rover.direction = "E";
    break;
    case "S":
    rover.direction = "W";
    break;
    case "E":
    rover.direction = "S";
    break;
    case "W":
    rover.direction = "N";
    } rover.travelLog += "r";
  }

function moveForward(rover){
  alert = "moveForward was called";
  movement = "f";
  yTemp = rover.y;
  xTemp = rover.x;
  switch(rover.direction){
    case "N":
    yTemp--;
    break;
    case "S":
    yTemp++;
    break;
    case "E":
    xTemp++;
    break;
    case "W":
    xTemp--;
    }
    checkMoves(xTemp, yTemp, alert, movement);
  }

  function moveBackward(rover){
    alert = "moveBackward was called";
    movement = "b";
    yTemp = rover.y;
    xTemp = rover.x;
    switch(rover.direction){
      case "N":
      yTemp++;
      break;
      case "S":
      yTemp--;
      break;
      case "E":
      xTemp--;
      break;
      case "W":
      xTemp++;
      }
      checkMoves(xTemp, yTemp, alert, movement);
    }

    function checkMoves(xTemp, yTemp, message, movement){
      var xObstacle = [2, 5, 8];
      var yObstacle = [4, 7, 8];
      if ((xTemp >= 0 && xTemp <= 9) && (yTemp >= 0 && yTemp <= 9)){
        if((xObstacle.includes(xTemp)) && (yObstacle.includes(yTemp))){
          console.log("Oops, obstacle found!");
        } else {
          rover.x = xTemp;
          rover.y = yTemp;
          rover.travelLog += movement;
          console.log(message);
        }
      } else {
        console.log("Out of bounds!");
      }
    };