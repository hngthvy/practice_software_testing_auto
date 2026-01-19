import { Page, expect } from '@playwright/test';
import { chromium } from '@playwright/test';
import { env } from './configs/env.config';
import { select_tenant } from './tests/tests/functions/header/tenants/tenant_selection.func';

//setup login before access to test
export default async function globalSetup() {
  const proxyServer =
    env.proxy.host && env.proxy.port
      ? `http://${env.proxy.host}:${env.proxy.port}`
      : undefined;

  const browser = await chromium.launch({
    proxy: proxyServer ? { server: proxyServer } : undefined,
  });

  const context = await browser.newContext();
  await context.clearCookies();

  const page = await context.newPage();

  // Go to base URL
  await page.goto(env.baseUrlQA, { waitUntil: 'domcontentloaded', timeout: 600000});


  // Step 1: username
  await page.fill('input[name="username"]', env.adminUser);
  await page.click('button[type="submit"]');

  // Step 2: password
  await expect(page.locator('input[name="password"]')).toBeVisible();
  await page.fill('input[name="password"]', env.adminPassword);
  await page.click('button[type="submit"]');

  // Back to base URL after login
  console.log('Access baseURL successful')

  await context.storageState({ path: 'storageState.json' });
  await browser.close();

}

