# 使用轻量 nginx 镜像作为静态文件服务器
FROM nginx:1.27-alpine

# 以非 root 用户运行，提升安全性
RUN addgroup -S app && adduser -S app -G app

# 拷贝游戏静态资源到 nginx 默认站点目录
COPY index.html /usr/share/nginx/html/index.html
COPY src/ /usr/share/nginx/html/src/

# 调整目录权限以适配非 root 用户
RUN chown -R app:app /usr/share/nginx/html \
    && chown -R app:app /var/cache/nginx \
    && touch /var/run/nginx.pid \
    && chown app:app /var/run/nginx.pid

USER app

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -q --spider http://localhost:80/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
