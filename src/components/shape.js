// declare class

// export class using module.exports

class Shape{
    constructor(){
        this.color="blue";
    }
    drawShape(){
        console.log("Drawing a shape");
    }
    calculateArea(){
        console.log("Don't know the Area of unknown Shape");
        return 0;
    }
}

module.exports =  Shape;
