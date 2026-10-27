import { Page, expect } from '@playwright/test';
import SetupElements from '../elements/SetupElements';
import BasePage from './BasePage';

export interface DadosContato {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
}

export default class SetupPage extends BasePage {
  readonly setupElements: SetupElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.setupElements = new SetupElements(page);
  }

  async validarHome(): Promise<void> {
    await this.verifyUrl(/gruposetup\.com/);
    await this.verifyTitle(/Grupo SETUP/i);
    await expect(this.setupElements.getEspecialidadesHeading()).toBeVisible();
    await expect(this.setupElements.getQuemSomosSection()).toBeVisible();
  }

  async navegarParaQuemSomos(): Promise<void> {
    await this.setupElements.getQuemSomosNavLink().click();
  }

  async validarPaginaQuemSomos(): Promise<void> {
    await this.verifyUrl(/\/quem-somos\/?$/);
    await this.verifyTitle(/Quem Somos/i);
    await expect(this.setupElements.getQuemSomosPageHeading()).toBeVisible();
  }

  async preencherFormularioContato(dados: DadosContato): Promise<void> {
    await this.setupElements.getNomeField().fill(dados.nome);
    await this.setupElements.getEmailField().fill(dados.email);
    await this.setupElements.getTelefoneField().fill(dados.telefone);
    await this.setupElements.getMensagemField().fill(dados.mensagem);
    await this.setupElements.getPrivacidadeCheckbox().check();
  }

  async validarFormularioPreenchido(dados: DadosContato): Promise<void> {
    await expect(this.setupElements.getNomeField()).toHaveValue(dados.nome);
    await expect(this.setupElements.getEmailField()).toHaveValue(dados.email);
    await expect(this.setupElements.getTelefoneField()).toHaveValue(
      dados.telefone
    );
    await expect(this.setupElements.getMensagemField()).toHaveValue(
      dados.mensagem
    );
    await expect(this.setupElements.getPrivacidadeCheckbox()).toBeChecked();
    await expect(this.setupElements.getEnviarButton()).toBeEnabled();
  }
}
