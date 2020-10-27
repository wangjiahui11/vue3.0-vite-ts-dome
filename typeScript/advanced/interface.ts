interface Person2 {
  name: string;
  age: number;
}

let tom: Person2 = {
  name: 'Tom',
  age: 25
};
// 接口的继承模式
interface Students extends Person2{
  shcool:string,
  gender:boolean
}

let zhengshan:Students={
  // name: 'Tom',
  // age: 25,
  ...tom,
  shcool:'longshan',
  gender:false,
}
