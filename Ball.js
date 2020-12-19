class Ball {
    constructor(x,y,r)
    {
        this.ball = loadImage("Images/paper.png");
        
        var options={
            
            //restitution:0.4,
            friction:1
            
        }
        this.body=Bodies.circle(x,y,r,options)
        World.add(world,this.body)
        this.r=r
        
        
        
    }
    display()
    {
        push ()
        translate(this.body.position.x,this.body.position.y)
        rotate (this.body.angle)
        imageMode (CENTER);
        
  image(this.ball,0,0,50,50)
  pop ()
    }
}