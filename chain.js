class Connect{
    constructor(bodyA,bodyB){
    var options = {
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness : 0.1,
        length : 2
    }

    this.connect = Constraint.create(options)
    World.add(world,this.connect)
    }

    display(){
        var pointA = this.connect.bodyA.position;
        var pointB = this.connect.bodyB.position;

        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}