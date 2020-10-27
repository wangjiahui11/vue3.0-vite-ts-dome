
// 联合类型数据
type sum= ((a:number,b:number) =>number) | string  // 函数或者string

let sum1 :sum=(a:number,b:number):number=> a+b

let sum2:sum ='sting'

// 字符全自变量类型
type EventNames = 'click' | 'scroll' | 'mousemove'; // 确定类型
// let eventName:EventNames = 'mouse' // 报错，mouse不在EventName类型之中
