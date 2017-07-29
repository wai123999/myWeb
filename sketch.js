var fireworksCanvas;
var fireworks = [];
var total = 7;
function setup() {
    colorMode(RGB);
   fireworksCanvas = createCanvas(windowWidth,windowHeight);
   fireworksCanvas.addClass("fireworks");
    for (var i = 0; i < total ; i++)
    {
        var pos = createVector(random(windowWidth),windowHeight+random(10,200));
        fireworks[i] = new Fireworks(pos,floor(random(0,2)));
    }
}

function draw()
{
   background(255,255,255);//(255,255,255,0.2);
    for (var i = 0; i < fireworks.length ; i++)
    {
        fireworks[i].show();
        fireworks[i].update();
    }
    for (var i = fireworks.length - 1 ; i>=0 ;i--)
    {
        if ( fireworks[i].isDisappear())
        {
            fireworks[i].releaseMem();
            fireworks.splice(i,1);
        }
    }
    if (random(1) < 0.04)
    {
        //4% make a new fireworks
        var pos = createVector(random(windowWidth),windowHeight+random(10,200));
        fireworks.push( new Fireworks(pos,floor(random(0,2))));
    }
    
}
