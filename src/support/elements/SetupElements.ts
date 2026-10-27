import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class SetupElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  // Home
  getEspecialidadesHeading(): Locator {
    return this.page.getByRole('heading', {
      name: 'Conheça as especialidades do Grupo Setup'
    });
  }

  getQuemSomosSection(): Locator {
    return this.page.getByRole('heading', { name: 'Quem somos', exact: true });
  }

  // Navegação
  getQuemSomosNavLink(): Locator {
    return this.page
      .getByRole('link', { name: 'Quem Somos', exact: true })
      .first();
  }

  getQuemSomosPageHeading(): Locator {
    return this.page.getByRole('heading', { name: 'Quem Somos?' });
  }

  // Formulário de contato (Gravity Forms)
  getNomeField(): Locator {
    return this.page.locator('#input_1_1');
  }

  getEmailField(): Locator {
    return this.page.locator('#input_1_2');
  }

  getTelefoneField(): Locator {
    return this.page.locator('#input_1_3');
  }

  getMensagemField(): Locator {
    return this.page.locator('#input_1_4');
  }

  getPrivacidadeCheckbox(): Locator {
    return this.page.locator('#choice_1_6_1');
  }

  getEnviarButton(): Locator {
    return this.page.locator('#gform_submit_button_1');
  }
}
