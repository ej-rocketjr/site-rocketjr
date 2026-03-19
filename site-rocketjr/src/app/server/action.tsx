'use server'; 

import { PrismaClient } from '../../generated/prisma/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';

const adapter = new PrismaLibSql({ url: 'file:./dev.db' });
const prisma = new PrismaClient({ adapter });

export async function salvarContato(selectedSubjects: string[], prevState: any, formData: FormData) {
  const name = formData.get('nome') as string;
  const email = formData.get('email') as string;
  const message = formData.get('mensagem') as string;
  const enterprise = formData.get('empresa') as string;
  const telephone = formData.get('telefone') as string;
  const subject = selectedSubjects.join(', ');

  try {
    await prisma.contactForms.create({
      data: { name, email, message, enterprise, subject, telephone },
    });

    console.log("Mensagem salva com sucesso!");
    return { success: true };
  } catch (error: any) {
    console.error("Erro ao salvar contato:", error);
    
    // Fallback para restrições de banco de dados
    if (error.code === 'P2002') {
      return { success: false, error: "Este email ou telefone já foi cadastrado." };
    }
    
    return { success: false, error: "Ocorreu um erro ao salvar sua mensagem. Tente novamente mais tarde." };
  }
}


export async function pegarContatos() {

  try {
    const contatos = await prisma.contactForms.findMany();
    console.log("Mensagens salvas com sucesso!");
    return { success: true, data: contatos};

  } catch (error: any) {
    console.error("Erro ao retornar contatos:", error);
    return { success: false, error: "Ocorreu um erro ao retornar as mensagens. Tente novamente mais tarde." };
  }
}

