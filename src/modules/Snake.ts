class Snake {
  //获取蛇的容器
  element: HTMLElement;
  //表示蛇元素
  head: HTMLElement;
  // 表示蛇的身体(包括蛇头)
  bodies: HTMLCollection;

  constructor() {
    this.element = document.getElementById("snake")!;
    this.head = document.querySelector("#snake > div") as HTMLElement;
    this.bodies = this.element.getElementsByTagName("div");
  }

  //获取蛇头的X坐标
  get X() {
    return this.head.offsetLeft;
  }

  //获取蛇头的Y坐标
  get Y() {
    return this.head.offsetTop;
  }

  //设置蛇头的X坐标
  set X(value: number) {
    this.head.style.left = value + "px";
  }

  //设置蛇头的Y坐标
  set Y(value: number) {
    this.head.style.top = value + "px";
  }

  //蛇增加身体
  addBody(){
    // 向element中添加一个div
    this.element.insertAdjacentHTML("beforeend", "<div><div/>")
  }
}

export default Snake;