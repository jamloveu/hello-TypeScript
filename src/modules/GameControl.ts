import Food from './Food';
import Snake from './Snake';
import ScorePanel from './ScorePanel';

class GameControl{
    //定义三个属性
    snake: Snake;
    food:Food;
    scorePanel: ScorePanel

    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();

        this.init()
    }

    init(){
        // 绑定键盘按下的事件
        document.addEventListener("keydown", this.keydownHandler);
    }

    //键盘按下的事件函数
    //ArrowUp、ArrowDown、ArrowLeft、ArrowRight
    keydownHandler(event:KeyboardEvent){
        console.log(event.key);  
    }
}

export default GameControl