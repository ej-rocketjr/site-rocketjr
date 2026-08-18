#!/bin/sh
set -e

mkdir -p /data

if [ -z "$DATABASE_URL" ]; then
  export DATABASE_URL="file:/data/dev.db"
fi

# Backup do banco existente antes de qualquer operação de schema
if [ -f /data/dev.db ]; then
  echo "🗂️  Criando backup /data/dev.db.bak"
  cp /data/dev.db /data/dev.db.bak
fi

echo "Sincronizando banco de dados com Prisma (migrate deploy)..."
if ! npx prisma migrate deploy; then
  echo "❌ Migration failed — abortando startup para preservar dados"
  echo "   Restaure manualmente com: cp /data/dev.db.bak /data/dev.db"
  exit 1
fi

echo "Iniciando a aplicação Node.js..."
exec node server.js
