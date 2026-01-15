import { Page } from '@playwright/test';

type BuildJobInput = {
  buildType: string;
};

export async function buildJob(
  page: Page,
  data: BuildJobInput
) {
  await page.click('#btnJobBuild');
  await page.click('#confirmOk');

  await page.selectOption('#buildTypeSelect', data.buildType);
  await page.click('#btnOk');

  if (await page.locator('#optionalOk').isVisible()) {
    await page.click('#optionalOk');
  }

  await page.click('#finalOk');
  await page.waitForSelector('.processing-complete');
}
