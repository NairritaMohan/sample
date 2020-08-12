class Paper{
    constructor(x,y,r){
        var options = {
            restitution: 0.04,
            density: 1.0,
            friction: 0.5
        }
    this.image = loadImage("paper.png")
     this.body = Bodies.circle(x,y,r,options)
     this.x = x
     this.y = y;
     this.r = r;
   
     World.add(world,this.body)

}


destroy(){
    if(this.body.speed == 1){
       World.remove(world,this.body)
}
}

display(){
    
    stroke(255);
    //console.log(this.body.speed)
    var pos = this.body.position
    push()
   translate(pos.x,pos.y)
   imageMode(RADIUS)
    image(this.image,0,0,this.r)
    pop()
}
}