class Ground {
    constructor(x, y) {
      var options = {
        density:1.5,
        friction: 1.0,
        restitution:0.5,
         isStatic:true
      };
      this.body = Bodies.rectangle(x, y, 10000, 130, options);
      this.image = loadImage("Ground.png");
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;

       imageMode(CENTER);
       image(this.image,pos.x,pos.y,this.width,this.width)
       //rectMode(CENTER);
       //rect(pos.x,pos.y,this.width,this.width);
    };
  };