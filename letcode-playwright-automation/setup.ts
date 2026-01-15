import { FullConfig, Page, expect } from '@playwright/test';
import { env } from './tests/data/env.config';
export async function globalSetup(page: Page) {

  // Go to base URL
  await page.goto(env.baseUrl, { waitUntil: 'domcontentloaded', timeout: 600000});
  
  // Redirect to username login page
  //await expect(page).toHaveURL(/login/i);

  // Step 1: username
  await page.fill('input[name="username"]', env.adminUser);
  await page.click('button[type="submit"]');

  // Step 2: password
  await expect(page.locator('input[name="password"]')).toBeVisible();
  await page.fill('input[name="password"]', env.adminPassword);
  await page.click('button[type="submit"]');

  // Back to base URL after login
  console.log('baseURL', process.env.BASE_URL_QA)
  //await page.goto(baseUrl);
  await page.waitForURL('https://qa.rcp.fujifilm.com/#/rcp/portal"')
  await page.locator('img[src*="portal"]').click();
  
}

