//声明字符串
let title:string = 'jam';

//声明数字
let amount:number = 10;
let notNumber:number = NaN;
let infinityNumber:number = Infinity;
let decimal:number = 6; //十进制数
let hex:number = 0xf00d; //十六进制数
let binary:number = 0b1010; //二进制数
let octal:number = 0o744; //八进制

//声明布尔
let isTrue:boolean = false;

//声明understand
let u:undefined = undefined;

//声明null
let n:null = null;

//空值（void）
//javascript中没有空值的概念，在ts中可以表示没有任何返回值的函数
function sayHi():void {
    console.log('hi');
}

//任意值（any）
let anyThing:any = 10
anyThing = 'jam'
anyThing = true
anyThing = undefined
anyThing = null
anyThing = sayHi