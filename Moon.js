class Moon {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("moon.png")
      World.add(world, this.body);
      this.image1=loadImage("moonSurface.jpg")
      
    }

    removeMoon(){
     
      World.remove(world, this.body);
      image (this.image1,170,10)

    }
    display(){    
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill(255);
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };