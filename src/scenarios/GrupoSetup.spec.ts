import { expect, test } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import SetupPage from '../support/pages/SetupPage';

test.describe('Grupo Setup E2E', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.gruposetup')
    .retrieveData();

  let setupPage: SetupPage;

  test.beforeEach(async ({ page }) => {
    setupPage = new SetupPage(page);
    await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });
  });

  test('deve carregar a home com título e seções principais', async () => {
    await setupPage.validarHome();
  });

  test('deve navegar até a página Quem Somos pelo menu', async () => {
    await setupPage.navegarParaQuemSomos();
    await setupPage.validarPaginaQuemSomos();
  });

  test('deve preencher o formulário de contato com dados válidos', async () => {
    // Observação: o formulário é apenas preenchido e validado, sem submeter,
    // para não gerar mensagens reais no canal de atendimento da empresa.
    const dados = {
      nome: faker.person.fullName(),
      email: faker.internet.email(),
      telefone: '(48) 99999-0000',
      mensagem: faker.lorem.sentence()
    };

    await setupPage.preencherFormularioContato(dados);
    await setupPage.validarFormularioPreenchido(dados);
  });
});
