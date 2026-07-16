/**
 * CleverTree CleverScript landmarks — SSR fixture from gateway try_ssr_client_hook.
 *
 * Regenerate fixture (from relay-gateway/):
 *   CLEVERTREE_BARE=/path/to/clevertree-site.git \
 *   CLEVERTREE_WRITE_FIXTURE=/home/ari/dev/clevertree-site/e2e/fixtures/ssr-home.html \
 *   cargo test --lib ssr_clevertree_site_produces_landmarks -- --nocapture
 */
import { test, expect } from '@playwright/test'

test.describe('CleverTree CleverScript SSR landmarks', () => {
  test('no-JS shows portfolio landmarks', async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false })
    const page = await context.newPage()
    await page.goto('/ssr-home.html')
    await expect(page.locator('#ct-name')).toHaveText('Ari Asulin')
    await expect(page.locator('#ct-home')).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Key Projects' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Resume' })).toBeVisible()
    await expect(page.getByText('Forgotten Future')).toBeVisible()
    await expect(page.locator('#root')).toHaveAttribute('data-relay-ssr', '1')
    await context.close()
  })

  test('theme toggle control is present for hydration', async ({ page }) => {
    await page.goto('/ssr-home.html')
    await expect(page.locator('#ct-theme-toggle')).toBeVisible()
    await expect(page.locator('#ct-print-button')).toBeVisible()
    await expect(page.locator('#ct-projects')).toBeVisible()
    await expect(page.locator('#ct-resume')).toBeVisible()
  })
})
