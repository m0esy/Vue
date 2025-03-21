<template>
  <div>
    <!-- 游戏区域 -->
    <div id="gameArea" @click="handleClick" v-if="isGameStarted">
      <!-- 功能区域 -->
      <div id="functionArea" v-if="!isCountingDown">
        <button class="button" @click="togglePause">{{ isGamePaused ? '继续' : '暂停' }}</button>
        <button class="button" @click="confirmExit">退出</button>
        <div>
          击中个数: {{ hitCount }}
          命中率: {{ hitRate }}%
          <span v-if="isScoreMode">剩余时间: {{ countdownScore.toFixed(3) }} 秒</span>
          <span v-else>游戏时间: {{ gameTime.toFixed(3) }} 秒</span>
        </div>
      </div>
      <div v-if="isCountingDown" class="countdown">{{ countdown }}</div>
      <div 
        v-for="(ball, index) in balls" 
        :key="index" 
        :style="{ 
          left: ball.x + 'px', 
          top: ball.y + 'px', 
          width: ballSize + 'px', 
          height: ballSize + 'px', 
          backgroundColor: 'red', 
          borderRadius: '50%', 
          position: 'absolute' 
        }"
      ></div>
    </div>
    <!-- 开始按钮，游戏未开始时显示 -->
    <div v-if="!isGameStarted">
      <button class="button" @click="startPracticeMode">练习模式</button>
      <button class="button" @click="startScoreMode">积分模式</button>
    </div>
    <!-- 结束弹窗 -->
    <div v-if="showEndModal" class="end-modal">
      <div class="modal-content">
        <p v-if="isScoreMode && shouldShowScore">游戏结束，你的得分是: {{ hitCount }}</p>
        <p v-else>确定要退出游戏吗？</p>
        <div v-if="!isScoreMode ||!shouldShowScore">
          <button class="button" @click="exitConfirm(true)">是</button>
          <button class="button" @click="exitConfirm(false)">否</button>
        </div>
        <button v-if="isScoreMode && shouldShowScore" class="button" @click="exitGame">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const functionAreaHeight = 100; // 功能区域高度
    return {
      isGameStarted: false, // 游戏是否开始
      isGamePaused: false, // 游戏是否暂停
      isCountingDown: false, // 是否正在倒计时
      countdown: 3, // 倒计时初始值
      ballSize: 30, // 小球大小
      balls: [], // 小球数组
      hitCount: 0, // 击中个数
      clickCount: 0, // 点击次数
      gameInterval: null, // 游戏定时器
      timerInterval: null, // 计时定时器
      gameTime: 0, // 游戏时间
      gameAreaWidth: 1200, // 修改为固定宽度 1200px
      gameAreaHeight: 600, // 修改为固定高度 600px
      functionAreaHeight, // 新增功能区域高度
      isScoreMode: false, // 是否为积分模式
      countdownScore: 60, // 积分模式倒计时
      showEndModal: false, // 是否显示结束弹窗
      shouldShowScore: false // 是否显示分数
    };
  },
  computed: {
    hitRate() {
      return this.clickCount === 0 ? 0 : (this.hitCount / this.clickCount * 100).toFixed(2);
    }
  },
  methods: {
    // 开始练习模式
    startPracticeMode() {
      this.isScoreMode = false;
      this.startGame();
    },
    // 开始积分模式
    startScoreMode() {
      this.isScoreMode = true;
      this.startGame();
      this.countdownScore = 60;
    },
    // 开始游戏
    startGame() {
      this.isGameStarted = true;
      this.isGamePaused = false;
      this.hitCount = 0;
      this.clickCount = 0;
      this.gameTime = 0;
      this.isCountingDown = true;
      this.countdown = 3;
      let countdownInterval = setInterval(() => {
        this.countdown--;
        if (this.countdown < 1) {
          clearInterval(countdownInterval);
          this.isCountingDown = false;
          this.createBalls();
          this.startTimer();
        }
      }, 1000);
    },
    // 开始计时
    startTimer() {
      this.timerInterval = setInterval(() => {
        if (!this.isGamePaused) {
          if (this.isScoreMode) {
            this.countdownScore -= 0.001;
            if (this.countdownScore <= 0) {
              this.countdownScore = 0;
              clearInterval(this.timerInterval);
              this.balls = []; // 游戏结束清除小球
              this.showEndModal = true;
              this.isGameStarted = false;
            }
          } else {
            this.gameTime += 0.001; // 精确到毫秒
          }
        }
      }, 1);
    },
    // 切换暂停和继续状态
    togglePause() {
      this.isGamePaused = !this.isGamePaused;
    },
    // 确认退出
    confirmExit() {
      this.showEndModal = true;
      this.isGamePaused = true;
      this.shouldShowScore = false;
    },
    // 退出确认处理
    exitConfirm(confirmExit) {
      if (confirmExit) {
        if (this.isScoreMode) {
          this.shouldShowScore = true;
        } else {
          this.exitGame();
        }
      } else {
        this.showEndModal = false;
        this.isGamePaused = false;
      }
    },
    // 退出游戏
    exitGame() {
      this.isGameStarted = false;
      this.isGamePaused = false;
      clearInterval(this.gameInterval);
      clearInterval(this.timerInterval);
      this.balls = [];
      this.gameTime = 0;
      this.countdownScore = 60;
      this.showEndModal = false;
    },
    // 创建小球
    createBalls() {
      for (let i = 0; i < 3; i++) {
        this.balls.push(this.getRandomBallPosition());
      }
    },
    // 获取随机小球位置，排除功能区域
    getRandomBallPosition() {
      return {
        x: Math.floor(Math.random() * (this.gameAreaWidth - this.ballSize)),
        y: Math.floor(Math.random() * (this.gameAreaHeight - this.ballSize - this.functionAreaHeight)) + this.functionAreaHeight
      };
    },
    // 处理点击事件
    handleClick(event) {
      if (this.isGameStarted && !this.isGamePaused) {
        const functionAreaRect = document.getElementById('functionArea').getBoundingClientRect();
        const clickX = event.clientX;
        const clickY = event.clientY;
        // 判断点击位置是否在功能区内
        if (
          clickX >= functionAreaRect.left &&
          clickX <= functionAreaRect.right &&
          clickY >= functionAreaRect.top &&
          clickY <= functionAreaRect.bottom
        ) {
          return; // 如果在功能区内，不增加点击次数
        }
        this.clickCount++;
        const rect = event.currentTarget.getBoundingClientRect(); // 获取游戏区域的位置信息
        const clickedX = event.clientX - rect.left; // 计算相对于游戏区域的点击X坐标
        const clickedY = event.clientY - rect.top; // 计算相对于游戏区域的点击Y坐标
        let hit = false;
        this.balls = this.balls.map(ball => {
          const isHit = (
            clickedX >= ball.x &&
            clickedX <= ball.x + this.ballSize &&
            clickedY >= ball.y &&
            clickedY <= ball.y + this.ballSize
          );
          if (isHit) {
            this.hitCount++;
            hit = true;
            return this.getRandomBallPosition();
          }
          return ball;
        });
        if (!hit) {
          // 如果未击中，不做额外处理
        }
      }
    }
  }
};
</script>

<style scoped>
.button {
  padding: 10px 20px;
  font-size: 16px;
  color: rgb(6, 128, 250);
  border: 2px solid rgb(6, 128, 250);
  border-radius: 10px;
  margin: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.button:hover {
  background-color: rgb(6, 128, 250);
  color: rgb(253, 253, 253);
}

#gameArea {
  width: 1200px; /* 修改为固定宽度 1200px */
  height: 600px; /* 修改为固定高度 600px */
  border: 1px solid black;
  position: relative;
}

#functionArea {
  border: 1px solid gray;
  padding: 10px;
  position: absolute;
  top: 0; /* 让功能区上边框和游戏区贴合 */
  left: 0; /* 让功能区左边框和游戏区贴合 */
  background-color: rgba(255, 255, 255, 0.8);
  min-width: 400px; /* 增加功能区宽度到 400px */
}

.countdown {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 100px;
  color: red;
}

.end-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}
</style>    