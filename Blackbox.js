class Bbox{
    constructor(x,y){
        var option={
            isStatic:false
        }
    this.body=Bodies.rectangle(x,y,50,50,option)
    this.width=50;
    this.height=20
    this.visiblity=255
    World.add(world,this.body)
    }
display(){
  
    if(this.body.speed<3){
        var pos = this.body.position
    rectMode(CENTER)
    fill("gray")
    rect(pos.x,pos.y,50,50) 
}else{   
    
    World.remove(world,this.body) 
    push();
    this.visiblity=this.visiblity-5
    tint(255,this.visiblity)
   
   // rect(this.body.position.x,this.body.position.y,50,50) 
    pop();
}
}
}
