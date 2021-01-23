class Paper {
    constructor(x, y) {
      var options = {
       density:1.5,
        friction: 40,
        restitution:0.5,
        isStatic : false
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      this.image = loadImage("Paper.png");
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      
       imageMode(CENTER);
       image(this.image,pos.x,pos.y,this.width,this.width);
    };
  };