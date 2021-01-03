class Rope{
    constructor(bodyA,bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.01,
            length: 200
        }
       
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    attach(bodyA,bodyB){
      this.rope.bodyA = bodyA;
      this.rope.bodyB = bodyB;
   
   
       }
   
       fly(){
           this.rope.bodyA = null;
       }
    
    display(){
      if (this.rope.bodyA) {
        var pointA = this.rope.bodyA.position; 
        var pointB = this.rope.bodyB.position;
         fill("black")
        strokeWeight(5); 
        line(pointA.x, pointA.y, pointB.x, pointB.y);   
      }  
        
    }
    
}