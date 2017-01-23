var COLS =10, ROWS=20;
var board = [];
var lose;
var interval;
var current;
var currentX,currentY;


var shapes
[
  [ 1, 1, 1, 1 ],
[ 1, 1, 1, 0,
  1 ],
[ 1, 1, 1, 0,
  0, 0, 1 ],
[ 1, 1, 0, 0,
  1, 1 ],
[ 1, 1, 0, 0,
  0, 1, 1 ],
[ 0, 1, 1, 0,
  1, 1 ],
[ 0, 1, 0, 0,
  1, 1, 1 ]
];

var colors =
[
   'cyan', 'orange', 'blue', 'yellow', 'red', 'green', 'purple'
];

function newGame()
{
  clearInterval(interval);
  init();
  newShape();
  lose = false;
  interval = setInterval(tick,250);
}

newGame();

function init()
{
  for ( var y = 0; y < ROWS; ++y ) {
  board[ y ] = [];
  for ( var x = 0; x < COLS; ++x ) {
    board[ y ][ x ] = 0;
  }
}
}

function newShape()
{
  var id = Math.floor(Math.random() * shapes.length);
  var shape = shapes[id];
  current = [];
  for(var y = 0;y<4;++y)
  {
current[y] [];
for(var x =0;x<4;++x)
{
var i = 4 * y +x;
if(typeof shape[i]!='undefined' && shape[i])
{
current[y][x] = id+1;
}
else {
current[y][x] =0;
}
}
  }
  currentX = 5;
  currentY = 0;
}


function tick()
{
  //1つ下に移動するのである
  if(valid(0,1)){
    ++currentY;
  }
  else {
    freeze();
    clearLines();
    if(lose)
    {
      newGame();
      return false;
    }
    //新しい部録をセットする
    newShape();
  }
}


function valid(offsetx,offsety,newCurrent)
{
offsetx = offsetx || 0;
offsety = offsetx || 0;
offsetx = currentX + offsetx;
offsety = currentY + offsety;
newCurrent = newCurrent || current;
for(var y = 0;y<4;++y)
{
for(var x = 0;x<4;++x)
{
if(newCurrent[y][x])
{
  if(typeof board[y+offsety] =='undefined'
    || typeof board[y+offsety][x+offsetx] == 'undefined'
    || board[y+offsety][x+offsetx]
    || x + offsetx < 0
    || y + offsety >=ROWS
    || x + offsetx >=COLS){
      if(offsety == 1 && offsetx - currentX == 0 && offsety - currentY == 1){
      console.log('game over');
      lose = true;
      }
      return false;
    }
}
}
}
return true;
}

funciton freeze()
{
  for(var y =0; y<4;++y)
  {
    for(var x =0;x<4;++x)
    {
      if(current[y][x])
      {
        board[y+currentY][x+currentX] = current[y][x];
      }
    }
  }
}

funciton clearLines(){
  for(var y = ROWS - 1; y>=0;--y){
    var rowFilled = true;
    for(var x =0;x<COLS;++x){
if(board[y][x] == 0){
rowFilled = false;
break;
  }
}
  if(rowFilled){
    document.getElementById('clearsound').play();
    for(var yy = y;yy>0;--yy)
    {
      for(var x =0;x<COLS;++x)
      {
        board[yy][x] = board[yy-1][x];
      }
    }
    ++y;
  }
}
}
