class Connection  {
    constructor(a,b)
    {
        var options={
            bodyA:a,
            pointB:b,
            stiffness:0.04,
            length:20
        }
        console.log(b)
        this.constraint=Constraint.create(options)
        World.add(world,this.constraint)  
       this.a=a
       this.b=b
       this.sling1=loadImage("Images/sling1.png")
       this.sling2=loadImage("Images/sling2.png")
       this.sling3=loadImage("Images/sling3.png")
    }
    display(){
       
        image(this.sling1,230,45,50,150)
        image(this.sling2,200,45,50,100)
if(this.constraint.bodyA!=null){
    var a= this.constraint.bodyA.position;
    var b= this.constraint.pointB;
    stroke(48,22,8)
    strokeWeight(5)
    line (a.x-20,a.y+20,b.x-10,b.y+20);
    line (a.x+30,a.y+10,b.x+30,b.y+10);
    if(a.x<=250){
    image (this.sling3,a.x-20,a.y-10,10,30)}
    else{
        image(this.sling3,a.x+20,a.y-10,10,30)
    }
    }}
    fly(){
        this.constraint.bodyA=null
    }
    
   
      }

    
