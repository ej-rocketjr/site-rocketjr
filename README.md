# 🚀 Site Institucional – RocketJR

Este projeto utiliza **Next.js (App Router)**, **React** e **Tailwind CSS** para desenvolver o site institucional da RocketJR.

O objetivo é construir uma aplicação moderna, performática e escalável, seguindo boas práticas de arquitetura, versionamento e organização de código.

---

## 🔧 Requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:
- **Node.js** 18+
- **npm** 9+

Verifique sua versão no terminal:
```bash
node -v
npm -v
```

---

## 📥 Como Clonar e Executar o Projeto

Siga os passos abaixo para rodar o projeto localmente:

```bash
# Clone o repositório
git clone https://github.com/ej-rocketjr/site-rocketjr.git

# Acesse a pasta do projeto
cd site-rocketjr

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em: `http://localhost:3000`

---

## 🚀 Scripts Disponíveis

Todos os comandos devem ser executados na raiz do projeto.

| Comando | Quando usar |
| --- | --- |
| `npm install` | Após clonar o projeto ou quando novas dependências forem adicionadas. |
| `npm run dev` | Durante o desenvolvimento para visualização em tempo real. |
| `npm run build` | Para gerar a versão otimizada de produção e validar a compilação. |
| `npm run lint` | Antes de abrir um Pull Request, para verificar erros no código. |

---

## 🔎 ESLint

O ESLint é uma ferramenta que analisa o código para:

* Detectar erros potenciais
* Garantir a padronização
* Evitar más práticas
* Manter a consistência entre os desenvolvedores

Execute sempre antes de abrir um PR:

```bash
npm run lint
```

---

## 📁 Estrutura do Projeto

Este projeto utiliza o **App Router** do Next.js. A estrutura principal está organizada da seguinte forma:

```text
/
├── public/                # Arquivos públicos (logos, ícones, imagens estáticas)
│
├── src/
│ ├── app/                 # Rotas da aplicação (App Router)
│ │ ├── layout.tsx         # Layout global
│ │ ├── page.tsx           # Home
│ │ ├── servicos/          # Página Serviços
│ │ ├── quem-somos/        # Página Quem Somos
│ │ └── contato/           # Página Contato
│ │
│ ├── components/          # Componentes reutilizáveis
│ │ ├── layout/            # Header, Footer
│ │ ├── sections/          # Seções específicas de páginas
│ │ └── ui/                # Componentes menores reutilizáveis
│ │
│ ├── assets/              # Imagens importadas como módulo (opcional)
│ │
│ └── styles/              # Estilos globais adicionais (se necessário)
│
├── postcss.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🧩 Componentização (Next + React)

### Organização

* **`layout/`** → Componentes estruturais (Header, Footer).
* **`sections/`** → Seções completas de páginas (Ex: Hero, Sobre).
* **`ui/`** → Componentes reutilizáveis menores (Ex: Botões, Cards, Inputs).

> 💡 **Nota:** Essa organização garante escalabilidade e previsibilidade arquitetural.

### Criando um componente

Crie um arquivo `.tsx` dentro de `src/components/`.

```tsx
export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-red-600 text-white px-4 py-2 rounded-md">
      {children}
    </button>
  );
}
```

### Utilização

Importe e utilize o componente nas suas páginas:

```tsx
import Button from "@/components/ui/Button";

export default function Home() {
  return <Button>Saiba Mais</Button>;
}
```

---

## 🖼️ Imagens e SEO

### 📂 Uso da pasta `public/`

Use para: Logos, ícones e imagens acessadas diretamente via URL.

**Exemplo:**

```html
<img src="/logo-rocketjr.png" alt="Logo RocketJR" />
```

### 📦 `next/image` (Recomendado)

Sempre que possível, utilize o componente nativo do Next.js para otimização automática:

```tsx
import Image from "next/image";
import minhaImagem from '@/assets/logo-rocketjr'; 

export default function Logo() {
  return (
    <Image
        src={minhaImagem} 
        alt="Descrição da imagem" 
      width={200}
      height={80}
    />
  );
}
```

### 📌 Boas práticas de SEO

* Nomeie imagens de forma descritiva:
* ❌ `img1.png`
* ✅ `logo-rocketjr-vermelha.png`

* Utilize apenas um `<h1>` por página.
* Mantenha a hierarquia semântica correta (`h1`, `h2`, `section`, `article`).
* Evite imagens muito pesadas.
* Pense em SEO desde o início do desenvolvimento.

---

## 📏 Padrão de Commit (Obrigatório)

Utilizamos o padrão **Conventional Commits**.

**Formato:**
`tipo: descrição breve`

**Tipos principais:**

* `feat`: Nova funcionalidade.
* `fix`: Correção de erro/bug.
* `refactor`: Refatoração sem alterar o comportamento.
* `style`: Ajustes visuais ou de formatação no código.
* `docs`: Alterações na documentação.
* `chore`: Ajustes internos ou de dependências.
* `test`: Adição ou alteração de testes.

**Exemplos:**

* `feat: adicionar header`
* `fix: ajustar responsividade do header`
* `refactor: otimizar estrutura do header`

📚 **Referência:** [Padrões de Commits por iuricode](https://github.com/iuricode/padroes-de-commits)

---

## 🔀 Padrão de Pull Request

Antes de abrir um PR, valide seu código com o checklist abaixo:

* [ ] Funcionalidade implementada conforme o esperado.
* [ ] Layout responsivo testado.
* [ ] Sem avisos ou erros no console do navegador.
* [ ] Comando `npm run lint` executado sem erros.
* [ ] Commits organizados seguindo o padrão.
* [ ] Código revisado por você.

---

## 📚 Documentação Oficial

Em caso de dúvidas técnicas, consulte a documentação oficial ou abra uma *Issue* no repositório:

* 📘 [Next.js Docs](https://nextjs.org/docs)
* ⚛️ [React Docs](https://react.dev)
* 🎨 [Tailwind CSS Docs](https://tailwindcss.com/docs)