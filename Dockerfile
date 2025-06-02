# ─── STAGE 1: build your React app ───────────────────────────
FROM node:20.14.0-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# tell react-scripts to prefix all asset paths with /kaza
ENV PUBLIC_URL=/kaza
RUN npm run build
RUN sed -i 's|<head>|<head><base href="/kaza/">|' /app/build/index.html

# ─── STAGE 2: nginx to serve /app/build under /kaza ──────────
FROM nginx:alpine

# drop in our custom config
COPY nginx.conf /etc/nginx/conf.d/default.conf
# copy over the build output
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 9732
CMD ["nginx", "-g", "daemon off;"]
