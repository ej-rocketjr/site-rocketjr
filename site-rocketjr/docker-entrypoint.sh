#!/bin/sh
set -e

# Garantir que o diretório de dados existe
mkdir -p /data

# Garantir que a variável DATABASE_URL está definida
if [ -z "$DATABASE_URL" ]; then
  export DATABASE_URL="file:/data/dev.db"
fi

echo "📦 Database URL: $DATABASE_URL"

# Backup do banco existente antes de qualquer operação de schema
if [ -f /data/dev.db ]; then
  echo "🗂️  Criando backup /data/dev.db.bak"
  cp /data/dev.db /data/dev.db.bak
fi

echo "🔄 Running Prisma migrations..."
if ! npx prisma migrate deploy; then
  echo "❌ Prisma migration failed — preservando /data/dev.db e abortando startup"
  echo "   Restaure manualmente com: cp /data/dev.db.bak /data/dev.db"
  exit 1
fi

echo "🚀 Starting Next.js server..."
echo "📍 Server running on http://0.0.0.0:$PORT"
exec node server.js
