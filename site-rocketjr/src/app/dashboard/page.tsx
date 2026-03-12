'use client'
import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [contatos, setContatos] = useState([]);

  // Busca os dados da API quando a página carrega
  useEffect(() => {
    fetch('http://localhost:3333/contact-forms')
      .then(res => res.json())
      .then(data => setContatos(data));
  }, []);

  return (
    <div className="p-8 bg-neural-900 min-h-screen text-white">
      <h1 className="flex text-2xl font-bold mb-6 justify-center items-center">Lista de Pedidos/Contatos</h1>
      
      <div className="overflow-x-auto shadow-xl rounded-lg">
        <table className="min-w-full bg-zinc-900 border border-zinc-800">
          <thead>
            <tr className="bg-zinc-900">
              <th className="p-4 text-left">Nome</th>
              <th className="p-4 text-left">E-mail</th>
              <th className="p-4 text-left">Telefone</th>
              <th className="p-4 text-left">Dados Extras (JSONB)</th>
              <th className="p-4 text-left">Mensagem</th>
            </tr>
          </thead>
          <tbody>
            {contatos.map((contato: any) => (
              <tr key={contato.id} className="border-t border-zinc-800 hover:bg-zinc-800">
                <td className="p-4">{contato.name}</td>
                <td className="p-4">{contato.email}</td>
                <td className="p-4">{contato.telephone}</td>
                <td className="p-4 text-sm font-mono text-red-300">
                  {JSON.stringify(contato.subject)}
                </td>
                <td className="p-4 italic">"{contato.message}"</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}