class Ground {
    constructor(a,b,w,h)
    {
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(a,b,w,h,options)
        World.add(world,this.body)
        this.w=w
        this.h=h
    }
    
    display()
    {fill ("brown")
        rectMode (CENTER);
  rect (this.body.position.x,this.body.position.y,this.w,this.h);
    }
}