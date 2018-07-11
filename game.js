$('.start').click(function(){
    $(".nb").hide();
    startClock();


    });


var timeLeft = 4;


function startClock(){
  $(".nb:first").remove();
  if(timeLeft!=='GO CLEAN !'){
       timeLeft = timeLeft-1;
   document.getElementById('start').innerHTML = timeLeft;
   setTimeout(startClock, 1000);

   }
  if(timeLeft==0){
       timeLeft='GO CLEAN !';
       play();
  document.getElementById('start').innerHTML = 'GO CLEAN !';
}
}
/*startClock();
*/


/*var count = 3;
var timer = setInterval(function() { handleTimer(count); }, 1000);

function endCountdown() {
  // logic to finish the countdown here
}

function handleTimer() {
  if(count === 0) {
    clearInterval(timer);
    endCountdown();
  } else {
    $('#count_num').html(count);
    count--;
  }
}

handleTimer();*/


function play(){

    function Board () {
        this.ctx = document.getElementById('canvas').getContext('2d');
        this.img1 = new Image();   // Crée un nouvel élément Image
        this.img1.src = './images/V.png';

        this.img2 = new Image();   // Crée un nouvel élément Image
        this.img2.src = './images/J.png';

        this.img3 = new Image();   // Crée un nouvel élément Image
        this.img3.src = './images/M.png';

        this.img4 = new Image();   // Crée un nouvel élément Image
        this.img4.src = './images/G.png';

    }


    Board.prototype.draw = function (){
            this.ctx.drawImage(this.img1, 0, 400, 200, 100);
            this.ctx.drawImage(this.img2, 230, 400, 200, 100);
            this.ctx.drawImage(this.img3, 460, 400, 200, 100);
            this.ctx.drawImage(this.img4, 690, 400, 200, 100);
    }




    /*Board.prototype.setInterval = function(){
        this.wastes = [];
        for (var i = 0; i<waste.length; i++) {
            var waste = new Waste();
            this.wastes.push(waste)
            waste.draw(this.ctx);
        }
        setInterval(()=>{
            this.waste.forEach((aa) => {
                aa.y += 6;
            });
            this.updateCanvas();
            this.displayTrash();
        },100)
    }*/

    var myBoard = new Board();

    var trash = [
        {name: "green",    img : "V.jpg",     shortname : "V"},
        {name: "yellow",   img : "J.jpg",      shortname : "J"},
        {name: "brown",    img : "M.jpg",     shortname : "M"},
        {name: "white",    img: "G.jpg",      shortname : "B"}
        ]


    var waste = [  
      { name: 'banana',          img: 'banana.jpg',         rightTrash: "brown" },
      { name: 'paper',           img: 'paper.jpg',          rightTrash: "yellow"},
      { name: 'yogurt',          img: 'yogurt.jpg',         rightTrash: "green" },
      { name: 'plastic bottle',  img: 'plastic bottle.jpg', rightTrash: "yellow"},
      { name: 'oil',             img: 'oil.jpg',            rightTrash: "yellow"},
      { name: 'newspaper',       img: 'newspaper.jpg',      rightTrash: "yellow"},
      { name: 'apple',           img: 'apple.png',         rightTrash: "brown" },
      { name: 'shampoo',         img: 'shampoo.jpg',        rightTrash: "yellow"},
      { name: 'plastic',         img: 'plastic.jpg',        rightTrash: "green" },
      { name: 'letter',          img: 'letter.jpg',         rightTrash: "yellow"},
      { name: 'coffee',          img: 'coffee.jpg',         rightTrash: "brown" },
      { name: 'glass bottle',    img: 'glass bottle.jpg',   rightTrash: "white" },
      { name: 'fork',            img: 'fork.jpg',           rightTrash: "green" },
      { name: 'tomato',          img: 'tomato.jpg',         rightTrash: "brown" },
      { name: 'beer bottle',     img: 'beer bottle.jpg',    rightTrash: "white" },
      { name: 'orange juice',    img: 'orange juice.png',   rightTrash: "yellow"}
    ];

    var question = {};


    function displayTrash () {
       question = waste[Math.floor(Math.random()*waste.length)];
    };


    // function guess (waste) {
    //     chosenTrash = prompt ("Is this green, yellow, brown or white trash?");
    // };


    displayTrash();

    //CREATION OF IMAGES

    var img_trash = new Image();
    img_trash.src = "images/"+question.img;



    /*function fallingImages (0,0,30,30){
        this.img = myImg;
        this.x = 0;
        this.y = 0;
        this.width = 30px;
        this.height = 30px;
    }*/



    /*function image (){
        this.ctx = document.getElementById('canvas').getContext('2d');
        this.banana.onload = () => {
            this.ctx.drawImage(this.banana, 400, 0, 200, 100)
        }
        this.ctx = document.getElementById('canvas').getContext('2d');
        this.paper.onload = () => {
            this.ctx.drawImage(this.paper, 400, 0, 200, 100)
        }

    }*/


    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    /*var sth = {
        x: 0,
        y:0,
        width: 50px,
        heigth: 50px
    }*/

    /*ctx.src = "images/banana.jpg";*/
    /*ctx.fillStyle = "#FF2288";*/

    var y = 0;
    var x = 400;

    // MOVE IMAGES

    document.onkeydown = function(e) {
      switch (e.keyCode) {
        case 37: x=x-18 ;  break;
        case 39: x=x+18; break;
        case 40: y=y+5; break;
      }
    }



    function clearCanvas() {
      ctx.clearRect(0,0,900,500);
    }

    function updateCanvas(){
      y += 0.5;
      clearCanvas();
      ctx.drawImage(img_trash,x,y,100,100);
      myBoard.draw();
        /*ctx.fillRect(400,y,100,50);*/
      checkIfRight(question);
      window.requestAnimationFrame(updateCanvas);
    }

    window.requestAnimationFrame(updateCanvas);


    /*var img = new Image();
    img.src = 'someimage.png';
    var ptrn = ctx.createPattern(img, 'repeat');*/

    /*function greenTrash (M) {
        this.x = 200;
        this.y = 750;
        this.ctx = ctx;
        this.img.src = './images/M.jpg';
    }*/

    /*trash.prototype.draw = function() {
        var img = new Image()
        img.src = './images/M.jpg'
        
    }*/




    /*guess()*/


    /*function checkIfRight (waste) {
        if (question.rightTrash === chosenTrash) {
            return true;
        }
        return false;

    }*/

    /*console.log (checkIfRight());*/

    function howManyPoints(){
        document.getElementById("score").innerHTML = 'Score: ' + count;
    }

    var count = 0;
    function checkIfRight (waste){
        console.log(count);
        if (x>0 && x<230 && y>400 && waste.rightTrash==="green") {
            newDechet();
            count++;
            return true;        
        }
        else if (x>230 && x<460 && y>400 && waste.rightTrash==="yellow"){
            newDechet();
            console.log("OK");
            count++;
            return true;
        }
        else if (x>460 && x<690 && y>400 && waste.rightTrash==="brown"){
            newDechet();
            console.log("OK");
            count++;
            return true;
        }
        else if (x>690 && y>400 && waste.rightTrash==="white"){
            newDechet();
            count++;
            return true;
        }
          else if (y> 400) {
            newDechet(); 
        }

        howManyPoints();
    }

    function newDechet (){
        x=400;
        y=0;
        displayTrash();
        img_trash.src = "images/"+question.img;
    }

}


/*function newCount (){
    var count = 0;
    for (var i=0; i<waste.length; i= i+1){
      if checkIfRight() === true{
         count = count + 1
     }    
    }
    console.log (count)
}*/
