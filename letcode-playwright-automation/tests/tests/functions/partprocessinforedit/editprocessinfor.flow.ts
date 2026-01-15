import { Page } from '@playwright/test';

type EditProcessInput = {
  prepressSystem: string;
  pressSystem: string;
  strippingTemplate: string;
};

export async function editProcessInfo(
  page: Page,
  data: EditProcessInput
): Promise<string> {

  await page.click('#btnEditPart');

  await page.click('#btnAddPrepressProcess');
  await page.click('#dialogOk');

  await page.click('#btnEditInfo');
  await page.selectOption('#prepressSystemField', data.prepressSystem);
  await page.selectOption('#pressSystemField', data.pressSystem);

  await page.click('#btnImposition');

  await page.selectOption('#strippingTemplate', data.strippingTemplate);

  const totalPages = await page.locator('#totalPageNumber').inputValue();

  await page.click('#dialogOk');

  return totalPages;
}
