import { Page, expect } from '@playwright/test';

export async function displayjobproperty(page: Page) {
  await page.click('.uploaded-file-row:first-child');

  await expect(page.locator('#fieldOrderNo')).not.toBeEmpty();
  await expect(page.locator('#fieldCustomer')).not.toBeEmpty();
  await expect(page.locator('#fieldTotalPages')).not.toBeEmpty();
}
