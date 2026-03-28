FROM node:20-alpine AS deps
WORKDIR /app

# Dependências para compilar módulos nativos (better-sqlite3)
RUN apk add --no-cache python3 make g++

COPY package*.json ./

# Usa npm install no lugar de npm ci (mais tolerante)
RUN npm install

FROM node:20-alpine AS builder
WORKDIR /app

# Precisa das ferramentas nativas aqui também
RUN apk add --no-cache python3 make g++

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npx prisma generate
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app

RUN apk add --no-cache python3 make g++

ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules ./node_modules

RUN mkdir -p /data

EXPOSE 3000

CMD ["npm", "start"]