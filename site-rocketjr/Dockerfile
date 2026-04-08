FROM node:20-alpine AS deps
WORKDIR /app

# Dependências para compilar módulos nativos (better-sqlite3)
RUN apk add --no-cache python3 make g++

COPY package*.json ./
# Prisma precisa do schema e config ANTES do npm install (postinstall roda prisma generate)
COPY prisma ./prisma
COPY prisma.config.ts ./

# Usa npm install no lugar de npm ci (mais tolerante)
RUN npm install

FROM node:20-alpine AS builder
WORKDIR /app

# Precisa das ferramentas nativas aqui também
RUN apk add --no-cache python3 make g++

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# prisma generate já rodou no postinstall, mas garante que está atualizado
RUN npx prisma generate
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Instalando curl para health checks
RUN apk add --no-cache curl

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/generated ./generated
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma.config.ts ./
COPY docker-entrypoint.sh ./docker-entrypoint.sh

RUN chmod +x ./docker-entrypoint.sh && mkdir -p /data

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

VOLUME ["/data"]

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD curl -f http://localhost:3000 || exit 1

CMD ["./docker-entrypoint.sh"]