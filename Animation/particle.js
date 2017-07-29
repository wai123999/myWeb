function Particle(pos,shape,burstFlag)
{
    rectMode(CENTER);
    ellipseMode(CENTER);
    noStroke();
    this.burstFlag = burstFlag;
    this.pos = pos.copy();
    this.shape = shape;
    if ( !burstFlag)
    {
        this.vel = createVector(0,random(-6,-15));
    }
    else if (burstFlag)
    {
        this.vel = createVector(random(-2,2),random(-4,3));
    }
    this.acc = createVector(0,0.05);
    this.col = color(255,random(150,255),0);
    fill(this.col);
    if (this.shape == 0)
    {
        //rect
        if ( !burstFlag)
        {
            this.w = random(10,20);
            this.h = random(10,20);
        }
        else
        {
            //爆開後應該更細
            this.w = random(1,8);
            this.h = random(1,8);
        }
    }
    else if ( this.shape == 1)
    {
        //circle
          if ( !burstFlag)
        {
            this.r = random(10,20);
        }
        else
        {
            //爆開後應該更細
                this.r = random(3,8);
        }
    
    }

}

Particle.prototype.show = function()
{
    
    if (this.shape==0)
    {
        //rect particle
        rect(this.pos.x,this.pos.y,this.w,this.h);
        
    }
    else if (this.shape==1)
    {
        //circle particle
        ellipse(this.pos.x,this.pos.y,this.r*2,this.r*2);
    }
}

Particle.prototype.update = function()
{
    this.vel.add(this.acc);
    this.pos.add(this.vel);   
    this.vel.mult(0.99);
}


