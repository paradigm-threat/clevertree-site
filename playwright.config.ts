import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  fullyParallel: false,
  retries: 0,
  workers: 1,
  reporter: [['list']],
  timeout: 60_000,
  use: {
    baseURL: 'http://127.0.0.1:4173',
    trace: 'on-first-retry',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: 'npx --yes serve e2e/fixtures -l 4173',
    url: 'http://127.0.0.1:4173/ssr-home.html',
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
})
