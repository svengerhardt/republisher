# --- Build-Stage ---
FROM node:22.12.0-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build


# --- Production-Stage ---
FROM node:22.12.0-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

RUN npm ci --only=production

ENTRYPOINT ["node", "dist/republish.js"]
