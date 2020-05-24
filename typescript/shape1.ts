abstract class Shape1{
    protected center1:Point1;
    constructor(xGiven:number, yGiven:number){
        this.center1 = new Point1(xGiven, yGiven);
    }
    abstract draw1(context1 : any) : void;
    setCenter1(centerGiven : Point1) : void {
        this.center1 = centerGiven;
    }
    getCenter1() : Point1{
        return this.center1;
    }
}