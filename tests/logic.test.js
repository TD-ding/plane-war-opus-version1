const {
  isColliding,
  computeLevel,
  enemySpeed,
  clamp
} = require("../src/logic");

describe("isColliding", () => {
  const base = { x: 100, y: 100, w: 40, h: 40 };

  test("两个重叠矩形返回 true", () => {
    const other = { x: 120, y: 120, w: 40, h: 40 };
    expect(isColliding(base, other)).toBe(true);
  });

  test("完全分离的矩形返回 false", () => {
    const other = { x: 300, y: 300, w: 40, h: 40 };
    expect(isColliding(base, other)).toBe(false);
  });

  test("仅边缘接触（不重叠）返回 false", () => {
    const other = { x: 140, y: 100, w: 40, h: 40 };
    expect(isColliding(base, other)).toBe(false);
  });
});

describe("computeLevel", () => {
  test("0 分为第 1 关", () => {
    expect(computeLevel(0, 100)).toBe(1);
  });

  test("99 分仍为第 1 关", () => {
    expect(computeLevel(99, 100)).toBe(1);
  });

  test("100 分进入第 2 关", () => {
    expect(computeLevel(100, 100)).toBe(2);
  });

  test("250 分为第 3 关", () => {
    expect(computeLevel(250, 100)).toBe(3);
  });
});

describe("enemySpeed", () => {
  test("第 1 关为基础速度", () => {
    expect(enemySpeed(2, 1, 0.4)).toBe(2);
  });

  test("速度随关卡线性递增", () => {
    expect(enemySpeed(2, 3, 0.4)).toBeCloseTo(2.8);
  });
});

describe("clamp", () => {
  test("区间内的值原样返回", () => {
    expect(clamp(50, 0, 100)).toBe(50);
  });

  test("低于下界取下界", () => {
    expect(clamp(-10, 0, 100)).toBe(0);
  });

  test("高于上界取上界", () => {
    expect(clamp(150, 0, 100)).toBe(100);
  });
});
