#!/bin/sh
echo "Sincronizando banco de dados com Prisma..."
npx prisma db push --accept-data-loss

echo "Iniciando a aplicação Node.js..."
exec node server.js
