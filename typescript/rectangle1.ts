class Rectangle1 extends Shape1{
    protected width1 : number;
    protected height1 : number;
    constructor(w : number, h:number){
        super(0,0);
        this.width1 = w;
        this.height1 = h;
    }

    draw1(context : any) : void{
        context.beginPath();
        context.rect(this.getCenter1().getX(),this.getCenter1().getY(),this.width1, this.height1);
        context.stroke();
    }
}