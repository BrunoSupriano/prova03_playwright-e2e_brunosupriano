import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'src/scenarios',
  timeout: 120000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  expect: {
    timeout: 30000
  },
  reporter: [
    ['list'],
    [
      'html',
      {
        outputFolder: 'artifacts/report',
        open: 'never'
      }
    ]
  ],
  use: {
    baseURL: 'https://gruposetup.com/',
    locale: 'pt-BR',
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'off'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});
