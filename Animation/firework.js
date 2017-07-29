function Fireworks(pos,shape)
{
    this.pos = pos.copy();
    this.shape = shape;
    this.particles = [];
    this.particles[0] = new Particle(this.pos,shape,false);
    this.burstFlag = false;
    this.life = 255;
}


Fireworks.prototype.show = function()
{
    if (!this.burstFlag)
    {
        //not bursted
        this.particles[0].show();
        this.burstFlag= this.bursted();
    }
    else
    {
        //already burst
        for (var i = 0; i < this.particles.length;i++)
            this.particles[i].show();
        this.life = this.life - 2;
    }
}

Fireworks.prototype.update = function()
{
    if (!this.burstFlag)
    {
        this.particles[0].update();
    }
    else
    {
        for (var i = 0; i < this.particles.length;i++)
            this.particles[i].update();
    }
}

Fireworks.prototype.bursted = function()
{
    if (this.particles[0].vel.y > -1.3)
    {
        this.pos = this.particles[0].pos; //remain last position
        this.particles.splice(0,1);
        for (var i = 0 ; i < 10 ; i++)
        {
                this.particles[i] = new Particle(this.pos,this.shape,true);
        }
        return true;
    }
    return false;    
}

Fireworks.prototype.isDisappear = function()
{
    //煙花是否消失,消失delete from array
    if ( this.life < 0)
    {
        return true;
    }
    return false;
}

Fireworks.prototype.releaseMem = function()
{
    for (var i = this.particles.length - 1 ; i>=0 ;i--)
    {
            this.particles.splice(i,1);
    }
}