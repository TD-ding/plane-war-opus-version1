# 部署与运行指南

## 运行环境

- 任意现代浏览器（Chrome / Firefox / Edge / Safari）
- 开发/测试：Node.js 18+（仅用于运行单元测试与 lint）
- 容器部署（可选）：Docker 20+ 及 Docker Compose v2

## 方式一：直接打开

游戏是纯前端单页应用，最简单的方式是直接用浏览器打开 `index.html`。

> 注意：部分浏览器对 `file://` 协议加载本地 `src/logic.js` 有限制。如遇脚本无法加载，请改用方式二的本地服务器。

## 方式二：本地静态服务器

```bash
python3 -m http.server 8000
# 浏览器访问 http://localhost:8000
```

或使用 Node 的 http-server：

```bash
npx http-server -p 8000
```

## 方式三：Docker

```bash
# 构建并启动（默认映射到宿主机 8080 端口）
docker compose up --build

# 自定义端口
HOST_PORT=9000 docker compose up --build
```

启动后访问 `http://localhost:8080`（或自定义端口）。

环境变量见 `.env.example`：

| 变量 | 说明 | 默认值 |
|------|------|--------|
| `HOST_PORT` | 宿主机映射端口（容器内固定 80） | 8080 |

## 开发：测试与 Lint

```bash
npm install      # 安装开发依赖
npm test         # 运行 jest 单元测试
npm run lint     # 运行 ESLint
```

单元测试覆盖 `src/logic.js` 中的纯逻辑：碰撞检测、关卡计算、敌机速度递增、边界约束。

## 持续集成

- `.github/workflows/ci.yml`：PR 触发，执行 lint + test
- `.github/workflows/cd.yml`：合并到 main 触发，验证 Docker 镜像构建

## 操作说明

- 方向键 ↑ ↓ ← → 或手指拖动：移动飞机
- 空格 / 点击屏幕：开始或重新开始
- P 键：暂停 / 继续
- 子弹自动发射；击毁敌机 +10 分；撞机扣 1 命，命数耗尽游戏结束
