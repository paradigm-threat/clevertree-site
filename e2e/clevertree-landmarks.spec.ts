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

  test('desktop no-JS geometry matches the production layout', async ({ browser }) => {
    const context = await browser.newContext({
      javaScriptEnabled: false,
      colorScheme: 'dark',
      viewport: { width: 1024, height: 900 },
    })
    const page = await context.newPage()
    await page.goto('/ssr-home.html')

    const bio = page.locator('#ct-bio')
    const projects = page.locator('#ct-projects')
    const libraries = page.locator('#ct-libraries')
    const body = page.locator('body')
    const firstCard = projects.locator(':scope > *').first()

    await expect(projects).toHaveCSS('grid-template-columns', /px 4\d\d(?:\.\d+)?px/)
    await expect(bio).toHaveCSS('text-align', 'left')
    const [bioWidth, projectWidth] = await Promise.all([
      bio.evaluate((element) => element.getBoundingClientRect().width),
      projects.evaluate((element) => element.getBoundingClientRect().width),
    ])
    expect(bioWidth).toBeGreaterThan(950)
    expect(Math.abs(bioWidth - projectWidth)).toBeLessThan(1)
    await expect(libraries.locator(':scope > *').first()).toHaveCSS('height', '134px')
    await expect(firstCard).toHaveCSS(
      'background-color',
      await body.evaluate((element) => getComputedStyle(element).backgroundColor),
    )
    await context.close()
  })

  test('mobile no-JS uses the real device viewport and one-column layout', async ({ browser }) => {
    const context = await browser.newContext({
      javaScriptEnabled: false,
      colorScheme: 'dark',
      viewport: { width: 390, height: 844 },
      isMobile: true,
    })
    const page = await context.newPage()
    await page.goto('/ssr-home.html')

    await expect(page.locator('body')).toHaveCSS('width', '390px')
    await expect(page.locator('header img')).toHaveCSS('height', '104px')
    await expect(page.locator('#ct-name')).toHaveCSS('font-size', '48px')
    await expect(page.locator('#ct-name')).toHaveCSS('line-height', '48px')
    await expect(page.locator('#ct-projects')).toHaveCSS('grid-template-columns', '358px')
    await expect(page.locator('#ct-bio')).toHaveCSS('width', '358px')
    await expect(page.locator('#ct-bio')).toHaveCSS('text-align', 'center')
    await context.close()
  })

  test('SSR preserves contact schemes and emits responsive theme CSS', async ({ page }) => {
    await page.goto('/ssr-home.html')
    await expect(page.locator('a[href="mailto:ari.asulin@gmail.com"]')).toHaveCount(1)
    await expect(page.locator('a[href="tel:602-632-6729"]')).toHaveCount(0)
    await expect(page.locator('a[href="https://github.com/clevertree"]')).toHaveCount(1)

    const css = await page.locator('#relay-ssr-theme').textContent()
    expect(css).toContain('prefers-color-scheme: dark')
    expect(css).toContain('@media (min-width: 768px)')
    expect(css).toContain('.md\\:ct-projects-md')
  })
})
