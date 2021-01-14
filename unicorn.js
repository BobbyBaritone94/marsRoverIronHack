// Rover object goes here:
let rover = {
    direction: 'N',
    x: 0,
    y: 0,
    travelLog: []
  }
  
  let rotateAngle = 0;
  let RoverX
  
  function getRoverX(rover)
  { 
    return rover.x * 44;
  }
  
  function getRoverY(rover)
  {
    return rover.y *44;
  }
  
  function log(information)
  {
    document.getElementById("status").innerHTML = "==Rover Status==\n" + information + `<div class="log2" id="log"></div>`;
  }
  
  function log2(information)
  {
    document.getElementById("log").innerHTML= information; 
  }
  
  
  
  
  function rotateRight() {
     rotateAngle= rotateAngle + 90;
    image = document.getElementById('rover');
    image.setAttribute("style", 
   `transform: 
   translate(${rover.x *44}px,${rover.y * 44}px) rotate(${rotateAngle}deg);`);
    
  }
  
  
  function rotateLeft() {
    image = document.getElementById('rover');
    rotateAngle= rotateAngle - 90;
    image.setAttribute("style", 
   `transform: 
   translate(${rover.x *44}px,${rover.y * 44}px) rotate(${rotateAngle}deg);`);
  }
  
  let boxSizeX=44;
  let boxSizeY=0;
  
  function moveImageForward()
  {
    image=document.getElementById('rover');
    
    image.setAttribute("style", 
   `transform: 
   translate(${rover.x *44}px,${rover.y * 44}px) rotate(${rotateAngle}deg);`);
  }
  
  
  // ==========================
  //Rover Orientation Functions
  //===========================
  
  function turnLeft(rover) {
    console.log('turnLeft was called!');
    rotateLeft();
    
    if (rover.direction=== 'N')
      {
        rover.direction= 'W';
      }else if (rover.direction=== 'W')
      {
        rover.direction= 'S';
      }else if (rover.direction=== 'S')
      {
        rover.direction= 'E';
      }else if (rover.direction=== 'E')
      {
        rover.direction= 'N';
      }
  
  }
  
  
  function turnRight(rover) {
    console.log('turnRight was called!');
    rotateRight();
    if (rover.direction=== 'N')
      {
        rover.direction= 'E';
      }else if (rover.direction=== 'E')
      {
        rover.direction= 'S';
      }else if (rover.direction=== 'S')
      {
        rover.direction= 'W';
      }else if (rover.direction=== 'W')
      {
        rover.direction= 'N';
      }
    
  }
  
  
  
  //========================
  //Rover Movement functions
  //========================
  
  
  
  function moveForward(rover) {
    console.log('moveForward was called');
    if (rover.direction==='N' && rover.y>=1)
        {
          rover.y--;
        }
    else if(rover.direction==='E' && rover.x<=8)
        {
          rover.x++;
        }
    else if(rover.direction==='S' && rover.y<=8)
        {
          rover.y++;
        }
    else if(rover.direction==='W' && rover.x>=1)
        {
              rover.x--;
        }else
          {
            log("sorry I cant do that");
          }
    moveImageForward();
    status(rover);
  }
  
  function moveBackward(rover) {
    console.log('moveBackward was called');
    if (rover.direction==='N' && rover.y<=8)
        {
          rover.y++;
        }
    else if(rover.direction==='E' && rover.x>=1)
        {
          rover.x--;
        }
    else if(rover.direction==='S' && rover.y>=1)
        {
          rover.y--;
        }
    else if(rover.direction==='W' && rover.x<=8)
        {
              rover.x++;
        }else
          {
            console.log("sorry I cant do that")
          }
     moveImageForward();
    status(rover);
  }
  
  //====================
  //Rover Commands
  //====================
  
  function validateCommands(commandList){
  let valid=true;
  for (let i = 0; i < commandList.length; i++){
      switch(commandList.charAt(i)){
        case "f":
          break;
        case "l":
          break;
        case "r":
          break;
        case "b":
          break;
        default:
          valid=false;
          break;
      }
  }
    return valid;
  }
  
  function executeCommands(commandList)
  {
    for (let i = 0; i < commandList.length; i++){
      switch(commandList.charAt(i)){
        case "f":
          moveForward(rover);
          break;
        case "l":
          turnLeft(rover);
          break;
        case "r":
          turnRight(rover);
          break;
        case "b":
          moveBackward(rover);
          break;
        default:
          console.log(`ERROR Your instruction ${commandList.charAt(i)} does not                      compute`)
          break;
      }
    }
    
  }
  
  //====================
  //Rover Status
  //====================
  
  function status(rover){
  const status=`<br>
  Direction: ${rover.direction}<br>
  Position: (${rover.x},${rover.y})`;
    log(status);
    rover.travelLog.push(`(${rover.x},${rover.y})`);
  }
  
  function printTravelLog(rover){
    let fullTravelLog =`<br>Travel Log:
       `;
    for(let i = 0; i < rover.travelLog.length; i++ ){
       fullTravelLog += `<br>- ${rover.travelLog[i]}
       `;
    }
    log2(fullTravelLog);
  }
   
  function roverMove()
  { 
    if(!validateCommands(commandList)){
    log(`
    Your instuction contains an ivalid character
    Please enter valid instructions. (r,f,b, or l)`)
  }else{
  executeCommands(commandList);
  }
    printTravelLog(rover);
  }
  
  let commandList;
   
  function setCommandList()
  { 
   commandList = document.getElementById("commandList").value;
    roverMove();
  }
  
  rotateLeft();
  status(rover);
  
  
  //====================
  //Command Terminal
  //====================
  
  
  
  