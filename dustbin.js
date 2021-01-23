class Dustbin {
    constructor(x, y) {
      var options = {
        density:1.5,
        friction: 1.0,
        restitution:0.5,
        isStatic : true
      };
      this.body = Bodies.rectangle(x, y,250,20, options);
      this.width = 200;
      this.height = 100;
      this.image = loadImage("basket.png");
      World.add(world, this.body);
      
    };
    display(){
      var pos = this.body.position;

       imageMode(CENTER);
       image(this.image,750,340,this.width,this.height)
       //rectMode(CENTER);
       //rect(pos.x,pos.y,this.width,this.height);
    };
  };