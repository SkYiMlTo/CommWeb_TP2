class Circle1 extends Shape1 {
    protected radius1 : number;
    constructor(radiusGiven : number){
        super(0,0);
        this.radius1 = radiusGiven;
    }
    draw1(context1 : any) : void{
        context1.beginPath();
        context1.arc(this.getCenter1().getX(),this.getCenter1().getY(), this.radius1, 0, 2 * Math.PI);
        context1.stroke();
    }
}