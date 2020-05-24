function Rectangle(width, height){
    this.height = height;
    this.width = width;
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.draw = function(ctx){
    ctx.beginPath();
    ctx.rect(this.getCenter().getX(), this.getCenter().getY(), this.width, this.height);
    ctx.stroke();
};
