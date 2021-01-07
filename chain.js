class Chain
{
    constructor(body1,point2)
    {
        var options = {
            bodyA : body1,
            pointB : point2,
            stiffness : .03,
            length : 10
      }
    this.Chain = Constraint.create(options);
    World.add(world,this.Chain);
    }
    display ()
    {
       if ( this.Chain.bodyA)
        { var firstPos = this.Chain.bodyA.position;
          var secondPos = this.Chain.pointB;

          push ();
          strokeWeight (7);
          stroke ("#000000");
          line(firstPos.x,firstPos.y,secondPos.x,secondPos.y);
          pop ();
        }
    } 

    fly ()
    {
        this.Chain.bodyA = null;
    } 

    attach (body1)
    {
        this.Chain.bodyA = body1;
    }
} 