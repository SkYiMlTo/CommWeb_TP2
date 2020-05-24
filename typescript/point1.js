var Point1 = /** @class */ (function () {
    function Point1(xGiven, yGiven) {
        this.x1 = xGiven;
        this.y1 = yGiven;
    }
    Point1.prototype.setX = function (xGiven) {
        this.x1 = xGiven;
    };
    Point1.prototype.setY = function (yGiven) {
        this.y1 = yGiven;
    };
    Point1.prototype.getX = function () {
        return this.x1;
    };
    Point1.prototype.getY = function () {
        return this.y1;
    };
    return Point1;
}());
