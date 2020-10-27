// 基础数据类型 Primitive data types

// a.基础数据类型
let  isDone:boolean=false
let  isNumber:number=1111
let  isString:string='string'
let u: undefined = undefined;
let n: null = null;
//  空值（Void）的概念  undefined
let isVoid: void = undefined
let anyThing: any = 'hello';  // 任意值
// 返回值为空值
function alertName(): void {
  alert('My name is Tom');
}

// b.类型推到
let string1 ='wang'
// string1 =666 // 类型推导
// let anyThing: any = 'hello';

// c.联合数据类型  -------1.必须访问其共有属性，2.类型推导后可以访问其一个类的型得属性方法
 let numberString :number|string//联合数据类型
numberString = 'seven';  // 进行类型推导了
// console.log(numberString.length); // 5
// numberString = 7;
// console.log(numberString.length); // 编译时报错

// d.interface --对象类型接口
// 必须一一对应确定类型 不许多，不许少;
interface Person{
 readonly name:string, // 只读属性
  age?:number, // 可选参数
  [T: number]: string | number | boolean | undefined;// person的对象的所以属性必须是此类型，如string此时会报错
}

let jack:Person={
  name: 'jack',
  age: 18,
  1111:false,
  // gender:false  // ------ 必须满足[T:number]数据类型
}


// e.数组和元祖
// 1.数组
let array1:number[]=[1,3,4]  //类型+[]
let array2:Array<number>=[1,3,4] //数组泛型
interface NumberArray {
  [index: number]: number;
}

let array3: NumberArray = [1, 3, 4]  // 接口表示法

// 2.元祖
let array4: [string, number] = ['Tom', 25];
// 越界操作时，会执行联合类型
let array5: [string, number] = ['Tom', 25];
array5.push(2)
// array5.push(false)  // 报错，只能添加联合类型


//f.枚举 枚举成员会被赋值为从 0 开始递增的数字， 来源 C#。
enum user_role{
  admin,  //0
  check, //1
  manger=5,  // 指定赋值
  master
}

// console.log(user_role.admin)  // 0

// g.函数类型
// 函数声明（Function Declaration）
function sum(x:number, y:number):number {
  return x + y;
}

// 函数表达式（Function Expression）
let mySum =( x: number, y: number): number {
  return x + y;
};
// 等价于
// let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
//   return x + y;
// };
// 接口定义
interface mySuminterface{
  (x: number, y: number): number;
  // (firstName: string, lastName: string = 'Cat'):string  // 设置默认值
}
// h.断言 以用来手动指定一个值的类型。 语法：值 as 类型 或 <类型>值
interface Cat {
  name: string;
  run(): void;
}
interface Fish {
  name: string;
  swim(): void;
}

function isFish(animal: Cat | Fish) {
  // 断言成fish方式
  if (typeof (animal as Fish).swim === 'function') {
    return true;
  }
  return false;
}


// window.foo =1 // ----------报错 window 上没有foo的属性

(window as any).foo =1 // 注意：断言会掩饰真正的错误类型，切记不能随意使用断言；

/**
 * 断言的总结：
 * 联合类型可以被断言为其中一个类型
 * 父类可以被断言为子类
 * 任何类型都可以被断言为 any
 * 要使得 A 能够被断言为 B，只需要 A 兼容 B 或 B 兼容 A 即可
 */


 // j
 // k.内置对象 global上存在的对象；Boolean RegExp Error、Date;
