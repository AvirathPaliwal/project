class Line{
constructor(x,y,width,height){
    var position={
        isStatic:true
    }
this.lines=Bodies.rectangle(x,y,width,height,position)
this.lines1=Bodies.rectangle(x,y,width,height,position)
this.lines2=Bodies.rectangle(x,y,width,height,position);
World.add(world,this.lines)
this.w=width;
this.h=height;

}

display(){
var pos=this.lines.position;
rectMode(CENTER)
rect(pos.x,pos.y,this.w,this.h);
rect(pos.x,pos.y,this.w,this.h);
rect(pos.x,pos.y,this.w,this.h);
}
}