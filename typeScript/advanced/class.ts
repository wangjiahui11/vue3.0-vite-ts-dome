// es6类的方法；
class Animal {
  public name;
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    return `My name is ${this.name}`;
  }
  // 静态方法，只能通过class类来调用
  static isAnimal(a:any) {
    return a instanceof Animal;
  }
}

let a = new Animal('Jack');

class Fish extends Animal {
  constructor(name) {
    super(name); // 调用父类的 constructor(name)
    console.log(this.name);
  }
  sayHi() {
    return 'Fish, ' + super.sayHi(); // 调用父类的 sayHi()
  }
}

let fish = new Fish('Tom'); // Tom
// console.log(fish.sayHi()); // Meow, My name is Tom


// ts 加了三个方法public，private，producted
class Animal2 {
  public name;
  protected constructor(name) {
    this.name = name;
  }
}
class Cat extends Animal2 {
  constructor(name) {
    super(name);
  }
}

// let a = new Animal('Jack');



///-------------类和接口-------------
// implement是关键字，一个类继承另一个类，有时候不同的类之间有共同的属性，通过接口将共同属性提取出来，此时用implements实现；


// 共同的属性
interface Alarm {
  alert(): void;
}

class Door {
}

class SecurityDoor extends Door implements Alarm {
  alert() {
    console.log('SecurityDoor alert');
  }
}

class Car implements Alarm {
  alert() {
    console.log('Car alert');
  }
}


// --------------接口和接口继承-----------
interface Alert1{
  alert():void
}

interface lightAlert extends Alert1{
  lightOn:void,
  lightOff:void
}


// --------------接口继承类-----------

// class Point 不仅创建了类，还创建了Point数据类型
class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

interface Point3d extends Point {
  z: number;
}

let point3d: Point3d = { x: 1, y: 2, z: 3 };


class Point2 {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

function printPoint(p: Point) {
  console.log(p.x, p.y);
}

printPoint(new Point(1, 2));


// 等价于
// interface PointInstanceType {
//   x: number;
//   y: number;
// }
// function printPoint(p: PointInstanceType) {
//   console.log(p.x, p.y);
// }
