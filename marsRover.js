// Rover Object Goes Here
// ======================
const rover1 ={
    direction : "N",
    x : 0,
    y : 0,
    travelLog : []
}

const rover2 ={
    direction : "N",
    x : 1,
    y : 3,
    travelLog : []
}



// ======================
function turnLeft(rover){
    console.log("turnLeft was called!\n");
    switch(rover.direction){
        case "N": 
            rover.direction="W";
            break;
        case "W":
            rover.direction="S";
            break;
        case "S":
            rover.direction="E";
            break;
        case "E":
            rover.direction="N";
    }
    
  }
  
function turnRight(rover){
    console.log("turnRight was called!\n");
    switch(rover.direction){
        case "N": 
            rover.direction="E";
            break;
        case "E":
            rover.direction="S";
            break;
        case "S":
            rover.direction="W";
            break;
        case "W":
            rover.direction="N";
    }
  }
  
function moveForward(rover,grid){
    console.log("moveForward was called\n")
    switch(rover.direction){
        case "N":
            if(rover.y!==0){
                if(grid[rover.y-1][rover.x]==1)
                {
                    console.log("Obstacle found\n");
                }
                else if(grid[rover.y-1][rover.x]==2){
                    console.log("Another rover in the way\n");
                }
                else{
                    grid[rover.y][rover.x]=0;
                    rover.y-=1;
                    grid[rover.y][rover.x]=2;
                }
                
            } 
            break;
        case "E":
            if(rover.x!==9){
                if(grid[rover.y][rover.x+1]==1)
                {
                    console.log("Obstacle found\n");
                }
                else if(grid[rover.y][rover.x+1]==2){
                    console.log("Another rover in the way\n");
                }
                else{
                    grid[rover.y][rover.x]=0;
                    rover.x+=1;
                    grid[rover.y][rover.x]=2;
                }
                
            } 
            break;
        case "S":
            if(rover.y!==9){
                if(grid[rover.y+1][rover.x]==1)
                {
                    console.log("Obstacle found\n");
                }
                else if(grid[rover.y+1][rover.x]==2){
                    console.log("Another rover in the way\n");
                }
                else{
                    grid[rover.y][rover.x]=0;
                    rover.y+=1;
                    grid[rover.y][rover.x]=2;
                }

            } 
            break;
        case "W":
            if(rover.x!==0){
                if(grid[rover.y][rover.x-1]==1)
                {
                    console.log("Obstacle found\n");
                }
                else if(grid[rover.y][rover.x-1]==2){
                    console.log("Another rover in the way\n");
                }
                else{
                    grid[rover.y][rover.x]=0;
                    rover.x-=1;
                    grid[rover.y][rover.x]=2;
                }
                
            } 
        
    }
  }


function moveBackward(rover,grid){
    console.log("moveForward was called\n")
    switch(rover.direction){
        case "N":
            if(rover.y!==9){
                if(grid[rover.y+1][rover.x]==1)
                {
                    console.log("Obstacle found\n");
                }
                else if(grid[rover.y+1][rover.x]==2){
                    console.log("Another rover in the way\n");
                }
                else{
                    grid[rover.y][rover.x]=0;
                    rover.y+=1;
                    grid[rover.y][rover.x]=2;
                }
            } 
            break;
        case "E":
            if(rover.x!==0){
                if(grid[rover.y][rover.x-1]==1)
                {
                    console.log("Obstacle found\n");
                }
                else if(grid[rover.y][rover.x-1]==2){
                    console.log("Another rover in the way\n");
                }
                else{
                    grid[rover.y][rover.x]=0;
                    rover.x-=1;
                    grid[rover.y][rover.x]=2;
                }
            } 
            break;
        case "S":
            if(rover.y!==0){
                if(grid[rover.y-1][rover.x]==1)
                {
                    console.log("Obstacle found\n");
                }
                else if(grid[rover.y-1][rover.x]==2){
                    console.log("Another rover in the way\n");
                }
                else{
                    grid[rover.y][rover.x]=0;
                    rover.y-=1;
                    grid[rover.y][rover.x]=2;
                }
            } 
            break;
        case "W":
            if(rover.x!==9){
                if(grid[rover.y][rover.x+1]==1)
                {
                    console.log("Obstacle found\n");
                }
                else if(grid[rover.y][rover.x+1]==2){
                    console.log("Another rover in the way\n");
                }
                else{
                    grid[rover.y][rover.x]=0;
                    rover.x+=1;
                    grid[rover.y][rover.x]=2;
                }
            } 
        
    }
  }

  //Funcao que da os comandos de movimentos para os rovers
function commands(commandList,rover,grid){
    console.log("*******************\nRover start to move\n");
    for(let i=0;i<commandList.length;i++){
        switch(commandList[i]){
            case "r": 
                turnRight(rover);
                break;
            case "l":
                turnLeft(rover)
                break;S
            case "f":
                rover.travelLog.push([rover.y,rover.x]);
                moveForward(rover,grid)
                break;
            case "b":
                rover.travelLog.push([rover.y,rover.x]);
                moveBackward(rover,grid)
                break;
        }
    }
    console.log("Rover stop to move\n")
}


//Gerando a grid de maneira aleatória com os obstáculos.
let grid = [];
for(let i = 0;i<=9;i++){
    let temp=[];
    for(let j = 0;j<=9;j++){
            temp.push(Math.floor(Math.random()*2))
    }
    grid.push(temp)
}


//Funçao que coloca as posicoes inicias na grid. Considerei que a do rover1 e do rover2 nunca serão iguais
//-2 corpos nao ocupam mesmo lugar.
function roverGrid(rover,grid){
    grid[rover.y][rover.x]=2;
}
//Grid com a posicao inicial dos rovers.
roverGrid(rover1,grid)
roverGrid(rover2,grid)
console.log(grid.join('\n'))

//Comando de movimento do rover1
commands("rffrfflfrff",rover1,grid)
//Comando de movimento do rover2
commands('bffbrlfrff',rover2,grid)

//historico de movimento dos rovers.
console.log(rover1.travelLog)
console.log(rover2.travelLog)

//posicao final dos rovers na grid.
console.log(grid.join('\n'))



