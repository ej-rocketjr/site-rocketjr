import Fastify from 'fastify';
import cors from '@fastify/cors';
import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';

const app = Fastify();
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

app.register(cors, {
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'] // Métodos permitidos
});

app.get('/contact-forms', async (request, reply) => {
  try{
      const contatosView = await prisma.contactForms.findMany({
      orderBy: {
        id: 'asc', 
      },
    });
    return reply.send(contatosView);
  } catch (error) {
    console.error(error);
    return reply.status(500).send({ error: 'Internal Server Error' });
  }
});

app.post('/contact-forms', async (request, reply) => {
  const { name, email, telephone, enterprise, subject, message } = request.body as any;
  
  const newContactForm = await prisma.contactForms.create({
    data: { name, email, telephone, enterprise, subject, message }
  });
  return reply.status(201).send(newContactForm);
});

app.listen({ port: 3333, host: '0.0.0.0' }).then(() => {
  console.log("Server rodando em http://localhost:3333");
});