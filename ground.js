class Ground {
    constructor(x,y,w,h){
        var ops = {
            isStatic: true
        }
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.body = Bodies.rectangle(x,y,w,h,ops)
        World.add(world,this.body)
    }
    display(){
    var pos = this.body.position
    push()
    translate(pos.x,pos.y)
    rectMode(CENTER)
    stroke(255)
    fill(127)
    rect(0,0,this.w,this.h)
    pop()
    }
}