
// 表示记分牌的类
class ScorePanel{
    // score和level用来记录分数和等级
    score = 0;
    level = 1;
    // 设置一个变量限制等级
    maxLevel: number;
    // 设置多少分升一级
    upScore:number;

    // 分数和等级存在的元素
    scoreElement: HTMLElement;
    levelElement: HTMLElement;

    constructor(maxLevel:number=10,upScore:number=10){
        this.scoreElement = document.getElementById("score")!;
        this.levelElement = document.getElementById("level")!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    // 加分
    addScore(){
        this.scoreElement.innerHTML = ++this.score + '';

        //判断分数是多少
        if(this.score%this.upScore === 0){
            this.levelUp()
        }
    }

    // 升级
    levelUp(){
        if(this.level<this.maxLevel){
            this.levelElement.innerHTML = ++this.level + '';
        }
    }
} 

export default ScorePanel;