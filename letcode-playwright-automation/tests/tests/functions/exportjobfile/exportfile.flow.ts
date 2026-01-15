import { Page } from '@playwright/test';

export async function exportJobCsv(page: Page) {
  await page.click('#btnExportCsv');
  await page.waitForSelector('.export-complete');
  await page.click('#btnCloseDetail');
}
