class Shape { //Base class that Rectangle, Triangle, and Circle derive from

    constructor(color) {
        this.color = color;
    }

    getArea() {

    }
}


class Rectangle extends Shape { //Subclass of Shape, inherits 'color' and getArea()

    constructor(color, height, width){
        super(color);
        this.height = height;
        this.width = width;
    }

    getArea(){

    }
}

class Triangle extends Shape { //Subclass of Shape, inherits 'color' and getArea()

    constructor(color, base, height){
        super(color);
        this.base = base;
        this.height = height;
    }

    getArea(){

    }
}

class Circle extends Shape { //Subclass of Shape, inherits 'color' and getArea()

    constructor(color, radius){
        super(color);
        this.radius = radius;
    }

    getArea(){

    }
}

