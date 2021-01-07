class Box{

  constructor(xpos,ypos,width,height)
  {
      var rect_options={
          'restitution':0.8,
          'friction':1.0
      }
      this.body = Bodies.rectangle(xpos,ypos,width,height,rect_options);
      this.width = width;
      this.height = height;
      this.visibility =255;
      this.fade = false;
      this.removed = false;
      World.add(world,this.body);
  }
  display()
  {  
            
      if(this.fade === true && this.visibility > 0)    {
           
          this.visibility-=5;    
       }
      if(this.body.velocity.y>3)
      {
          this.fade = true;
      }
      if(!this.removed)
      {
          var pos = this.body.position;
          var angle = this.body.angle;
          push();
              rectMode(CENTER);
              translate(pos.x,pos.y);
              rotate(angle);  
              stroke(255);
              fill(0, 153, 255,this.visibility)
              rect(0, 0, this.width, this.height);
          pop();
      }
      if(this.visibility<=0 && !this.removed)
      {
       World.remove(world,this.body);
       this.removed = true 
       score = score + 1;

      }
  }
  
  }