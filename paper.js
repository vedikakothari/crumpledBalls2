class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
    this.ball = Bodies.circle(x,y,radius,options)
    this.radius = radius;
    World.add(world,this.ball);
    }

display(){
    var pos = this.ball.position;
    var angle = this.ball.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    ellipse(0,0,this.radius,this.radius);
    pop();
    }
}