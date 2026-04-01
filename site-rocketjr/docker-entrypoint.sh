#!/bin/sh
set -e

# Garantir que o diretório de dados existe
mkdir -p /data

# Garantir que a variável DATABASE_URL está definida
if [ -z "$DATABASE_URL" ]; then
  export DATABASE_URL="file:/data/dev.db"
fi

echo "📦 Database URL: $DATABASE_URL"
echo "🔄 Running Prisma migrations..."
npx prisma migrate deploy || npx prisma db push --accept-data-loss

echo "🚀 Starting Next.js server..."
echo "📍 Server running on http://0.0.0.0:$PORT"
exec node server.js
