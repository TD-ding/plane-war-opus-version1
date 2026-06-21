# plane-war-opus-version1

一个基于 HTML5 Canvas 的飞机大战小游戏。

## 简介

经典纵版射击游戏：控制飞机移动、自动发射子弹、击毁来袭的敌机得分，撞到敌机则游戏结束。纯前端单文件实现，无需任何依赖，打开即玩。

## 技术栈

- HTML5 Canvas
- 原生 JavaScript（无第三方运行时依赖）
- Jest（单元测试）+ ESLint（代码检查）
- Docker + nginx（可选容器部署）

## 目录结构

```
plane-war-opus-version1/
├── index.html               # 游戏主文件（渲染 + 交互）
├── src/
│   └── logic.js             # 纯逻辑模块（碰撞/关卡/速度/边界），可测试可复用
├── tests/
│   └── logic.test.js        # Jest 单元测试
├── docs/
│   └── deployment.md        # 部署与运行指南
├── Dockerfile               # nginx 静态服务镜像（非 root）
├── docker-compose.yml
├── .env.example
├── package.json
└── .github/workflows/       # CI（lint+test）/ CD（docker build）
```

## 如何运行

直接用浏览器打开 `index.html`，或启动本地静态服务器：

```bash
python3 -m http.server 8000
# 然后访问 http://localhost:8000
```

也支持 Docker：`docker compose up --build`（默认 8080 端口）。
完整部署、测试、CI 说明见 [docs/deployment.md](docs/deployment.md)。

## 操作说明

- 方向键 ↑ ↓ ← → 或手指拖动 控制飞机移动
- 子弹自动发射
- 击毁敌机 +10 分，撞到敌机损失一条生命
- 空格 / 点击屏幕：开始或重新开始；P 键：暂停

## 游戏特性

- 3 条生命，撞机扣血，命数耗尽才结束
- 分数每满 100 升一关，敌机速度随关卡提升
- 最高分本地保存（localStorage），刷新不丢失
