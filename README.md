# Clinic Agenda

PROJETO FULL STACK CLUB
Aplicação Next.js com Drizzle ORM, PostgreSQL e UI moderna baseada em TailwindCSS + ShadCN. Ideal para agendamento, cadastro de clínicas, pacientes, médicos e gerenciamento de consultas.

---

## Stack

- **Next.js 15** (`app/` directory)
- **React 19**
- **TypeScript**
- **TailwindCSS 4**
- **ShadCN UI v2.5.0** (`@shadcn/ui`)
- **Drizzle ORM** + `drizzle-kit` para banco de dados PostgreSQL
- **PostgreSQL** como banco de dados
- **Prettier + Tailwind Plugin** para formatação automática
- **ESLint + Simple Import Sort** para padronização de código

---

## Estrutura do Projeto

```txt
    .
    ├── components.json
    ├── drizzle.config.ts
    ├── eslint.config.mjs
    ├── estrutura.txt
    ├── next.config.ts
    ├── next-env.d.ts
    ├── package.json
    ├── package-lock.json
    ├── postcss.config.mjs
    ├── public
    │   ├── file.svg
    │   ├── globe.svg
    │   ├── next.svg
    │   ├── vercel.svg
    │   └── window.svg
    ├── README.md
    ├── src
    │   ├── app
    │   │   ├── favicon.ico
    │   │   ├── globals.css
    │   │   ├── layout.tsx
    │   │   └── page.tsx
    │   ├── components
    │   │   └── ui
    │   │       └── button.tsx
    │   ├── db
    │   │   ├── index.ts
    │   │   └── schema.ts
    │   └── lib
    │       └── utils.ts
    └── tsconfig.json

    8 directories, 24 files

```

# Scripts Disponíveis

```nodejs

npm run dev         # Iniciar ambiente de desenvolvimento
npm run build       # Gerar build de produção
npm run start       # Iniciar aplicação em produção
npm run lint        # Rodar linter
npx drizzle-kit push       # Sincronizar schema com o banco
npx drizzle-kit generate   # Gerar SQLs de migração

```

# Convenções de Código

- prettier com plugin Tailwind para ordenação de classes.
- eslint com simple-import-sort ativado.
- Salvar (Ctrl+S) ordena automaticamente classes e imports via VS Code.

# Tecnologias Utilizadas

- Drizzle ORM
- TailwindCSS
- ShadCN UI
- PostgreSQL
- Next.js
- Lucide Icons

# To-do Futuro

- Integração de autenticação (ex: NextAuth)
- Tela de login e cadastro
- Painel de gestão de agenda
- Testes automatizados
- Deploy (Vercel / Railway)
