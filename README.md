# Grupo Setup — Testes E2E com Playwright

Testes end-to-end do site [gruposetup.com](https://gruposetup.com/) utilizando
[Microsoft Playwright](https://playwright.dev/) com TypeScript e o padrão
Page Object Model.

## GitHub Actions + SonarCloud

[![Build and Tests](https://github.com/BrunoSupriano/prova03_playwright-e2e_brunosupriano/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/BrunoSupriano/prova03_playwright-e2e_brunosupriano/actions/workflows/node.js.yml)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=BrunoSupriano_prova03_playwright-e2e_brunosupriano&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=BrunoSupriano_prova03_playwright-e2e_brunosupriano)

## Como executar

1. Instale o [Node.js](https://nodejs.org/) (versão >= 22.x)
1. Execute `npm install` para instalar as dependências
1. Execute `npx playwright install chromium` para instalar o navegador
1. Execute `npm test` para rodar toda a suíte de testes
1. Execute `npm run show-report` para visualizar o relatório HTML

Os artefatos de execução ficam em `./artifacts`. Para limpá-los, rode
`npm run clean`.

## Scripts disponíveis

- `npm test` — executa todos os cenários
- `npm run scenario` — executa apenas o cenário do Grupo Setup com 1 worker
- `npm run ui` — abre o modo UI interativo do Playwright
- `npm run debug` — executa em modo debug
- `npm run ci` — pipeline local: clean + format + verify + test

## Cenários de teste

1. **Home** — valida título, URL e seções principais da página inicial.
2. **Navegação** — navega até a página "Quem Somos" pelo menu e valida o conteúdo.
3. **Formulário de contato** — preenche e valida os campos do formulário de
   contato (o formulário não é submetido, para não gerar mensagens reais no
   canal de atendimento da empresa).

## Estrutura do projeto

- **Scenarios** (`src/scenarios`): mapeamento dos cenários de teste
- **Support** (`src/support`): estrutura de apoio
  - **Elements**: mapeamento dos elementos de cada tela
  - **Fixtures**: arquivos de configuração de dados (ex.: `config.yml`)
  - **Pages**: lógica usada para executar as ações nos testes
