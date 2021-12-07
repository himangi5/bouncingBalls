class Boxxy{
    constructor(x,y){
        var opt = {
            restitution: 0.8,
        }
        this.color="purple"
        this.body = Bodies.rectangle(x, y, 50, 70, opt);
        World.add(world,this.body);
        console.log(this.body)
    }
    //function -  method
    show(){
        fill(this.color)
        rect(this.body.position.x, this.body.position.y,50,70)
    }
}