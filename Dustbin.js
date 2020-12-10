class Dustbin {
    constructor (){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(600,660,200,20,options)
        this.lbody = Bodies.rectangle(510,600,20,100,options)
        this.rbody = Bodies.rectangle(690,600,20,100,options)
        this.image = loadImage ("dustbin.png")
        this.rwidth = 20
        this.rheight = 100
        this.lwidth = 20
        this.lheight = 100
        this.width = 200
        this.height = 20
        World.add(world,this.body)
        World.add(world,this.lbody)
        World.add(world,this.rbody)
    }
    display(){
        rectMode(CENTER)
        strokeWeight(0)
        fill("yellow")
        rect(this.lbody.position.x + 10,this.lbody.position.y,this.lwidth,this.lheight)
        rect(this.rbody.position.x - 10,this.rbody.position.y,this.rwidth,this.rheight)
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y - 100,this.width,this.height + 200)
    }
}