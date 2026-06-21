# plane-war-opus-version1

一个基于 HTML5 Canvas 的飞机大战小游戏。

## 简介

经典纵版射击游戏：控制飞机移动、自动发射子弹、击毁来袭的敌机得分，撞到敌机则游戏结束。纯前端单文件实现，无需任何依赖，打开即玩。

## 技术栈

- HTML5 Canvas
- 原生 JavaScript（无第三方依赖）

## 目录结构

```
plane-war-opus-version1/
├── index.html      # 游戏主文件（含全部逻辑）
└── README.md
```

## 如何运行

直接用浏览器打开 `index.html` 即可，或启动一个本地静态服务器：

```bash
python3 -m http.server 8000
# 然后访问 http://localhost:8000
```

## 操作说明

- 方向键 ↑ ↓ ← → 控制飞机移动
- 子弹自动发射
- 击毁敌机 +10 分，撞到敌机游戏结束
