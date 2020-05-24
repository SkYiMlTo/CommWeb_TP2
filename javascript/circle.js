function Circle(radius){
    this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.draw = function(ctx){
    ctx.beginPath();
    ctx.arc(this.getCenter().getX(), this.getCenter().getY(), this.radius, 0, 2 * Math.PI);
    ctx.stroke();
};