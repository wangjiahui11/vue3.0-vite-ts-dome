// generics 泛型  定义函数，类，接口时，事先不定义具体的类型； 而在使用的时候自动生成对应的类型；

// 单一参数
function createArray<T>(length: number, value: T): Array<T> {
  let result = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

createArray<string>(3, 'x'); // ['x', 'x', 'x']

// 多个参数 (U,T数据交换)
 function swape<T,U>(params:[T,U]):[U,T] {
   return [params[1], params[0]]
 }
swape([1,'string'])

// 泛型约束
// 1.定义接口;
interface lengthInterface {
  length:number
}

//2.泛型继承接口
function lengthIdentity<T extends lengthInterface>(params:T):T {
  console.log(params.length)   //  此时属性上不存在params的值
  return params
}

// 泛型接口数据定义函数

// 数组 Array<number>,number[]  T = string 默认类型
function createArrayFn<T = string>(length: number, value: T): Array<T> {
  let result:T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

createArrayFn(3, 'x'); // ['x', 'x', 'x']
