# Projeto Base React

O projeto está configurado para rodar com eslint, prettier, husky e lint-staged. Qualquer alteração no código será alterada e modificada para os padrões descritos nas configs dos respectivos plugins.

## Plugins no VSCode
Necessária instalação dos seguintes plugins no Visual Studio Code.
* Prettier
* ESLint
* EditorConfig

## Stack de desenvolvimento

* Vite -> [https://vitejs.dev](https://vitejs.dev)
* Material UI -> [https://mui.com/material-ui/react-autocomplete/](https://mui.com/material-ui/react-autocomplete/)
* Vitest -> [https://vitest.dev/guide/cli.html](https://vitest.dev/guide/cli.html)

## Desenvolvimento

Para utilizar o projeto, basta baixar do repositório, acessar a pasta do projeto e rodar os seguintes comandos:

````
npm install
````

em seguida:
````
npm run dev
````

Para rodar os testes utilize:
````
npm run test
````
ou
````
npm run test:coverage
````
para saber a cobertura dos testes.

## Estrutura do projeto

A estrutura básica do projeto e dos componentes. Utiliza-se a estrutura de [Exportação em Barril](https://blog.logrocket.com/using-barrel-exports-organize-react-components/) para criação de componentes no React.

├── public
├── ...
├── src
│   ├── Assets
│   ├── Components
│   │   ├── Example
│   │   │   ├── Example.styles.ts
│   │   │   ├── Example.test.tsx
│   │   │   ├── Example.tsx
│   │   │   ├── Example.types.ts
│   │   │   ├── index.ts
│   ├── Config
│   ├── Contexts
│   ├── Hooks
│   ├── ...
│   ├── App.tsx
│   ├── vite-env.ts
├── node_modules
├── package.json
├── ...
└── vite.config.ts
