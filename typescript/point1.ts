class Point1{
    protected x1 : number;
    protected y1 : number;
    constructor(xGiven:number, yGiven:number){
        this.x1 = xGiven; 
        this.y1 = yGiven;
    }
    setX(xGiven:number) : void {
        this.x1 = xGiven;
    }
    setY(yGiven:number) : void {
        this.y1 = yGiven;
    }
    getX() : number {
        return this.x1;
    }
    getY() : number {
        return this.y1;
    }
}