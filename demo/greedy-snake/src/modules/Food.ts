// 定义实物类
class Food {
    // 定义一个属性表示食物所对应的元素
    element: HTMLElement;
  
    constructor() {
      // 获取页面上的food元素并将其赋值给element
      // !表示非空
      this.element = document.getElementById("food")!;
    }
  
    // 定义一个获取食物X轴坐标的方法
    get X() {
      return this.element.offsetLeft;
    }
  
    // 定义一个获取食物Y轴坐标的方法
    get Y() {
      return this.element.offsetTop;
    }
  
    // 修改食物位置的方法
    change() {
      // 生成一个随机位置
      // 食物的位置最小是0，最大是290
      // 蛇移动一次就是一格，一格大小就是10，所以要求食物的位置是10的倍数
      const top = Math.round(Math.random() * 29) * 10;
      const left = Math.round(Math.random() * 29) * 10;
  
      this.element.style.left = left + "px";
      this.element.style.top = top + "px";
    }
  }
  
export default Food;  