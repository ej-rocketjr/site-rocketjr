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
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-6">Lista de Pedidos/Contatos</h1>
      
      <div className="overflow-x-auto shadow-xl rounded-lg">
        <table className="min-w-full bg-gray-800 border border-gray-700">
          <thead>
            <tr className="bg-gray-700">
              <th className="p-4 text-left">Nome</th>
              <th className="p-4 text-left">E-mail</th>
              <th className="p-4 text-left">Telefone</th>
              <th className="p-4 text-left">Dados Extras (JSONB)</th>
              <th className="p-4 text-left">Mensagem</th>
            </tr>
          </thead>
          <tbody>
            {contatos.map((contato: any) => (
              <tr key={contato.id} className="border-t border-gray-700 hover:bg-gray-700">
                <td className="p-4">{contato.name}</td>
                <td className="p-4">{contato.email}</td>
                <td className="p-4">{contato.telephone}</td>
                <td className="p-4 text-sm font-mono text-blue-300">
                  {/* Transformando o objeto JSON em string para visualização rápida */}
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