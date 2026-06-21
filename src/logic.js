// 游戏核心纯逻辑：与渲染/DOM 解耦，便于单元测试复用。
// 浏览器通过 <script> 引入后挂在 window.GameLogic；Node 通过 module.exports 引入。
(function (root) {
  "use strict";

  // 矩形碰撞检测（AABB）：两个 {x,y,w,h} 是否重叠
  function isColliding(a, b) {
    return a.x < b.x + b.w && a.x + a.w > b.x &&
           a.y < b.y + b.h && a.y + a.h > b.y;
  }

  // 根据当前分数和每关阈值计算关卡号（从 1 开始）
  function computeLevel(score, levelUpEvery) {
    return Math.floor(score / levelUpEvery) + 1;
  }

  // 敌机速度：基础速度 + 关卡加成
  function enemySpeed(base, level, perLevel) {
    return base + (level - 1) * perLevel;
  }

  // 将值限制在 [min, max] 区间，用于飞机边界约束
  function clamp(v, min, max) {
    return Math.max(min, Math.min(max, v));
  }

  var api = { isColliding: isColliding, computeLevel: computeLevel,
              enemySpeed: enemySpeed, clamp: clamp };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  } else {
    root.GameLogic = api;
  }
})(typeof window !== "undefined" ? window : this);
