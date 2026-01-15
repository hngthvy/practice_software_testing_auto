import { Page } from '@playwright/test';
import { editProcessInfo } from '../partprocessinforedit/editprocessinfor.flow';

type GenerateTicketInput = {
  customer: string;
  prepressSystem: string;
  pressSystem: string;
  strippingTemplate: string;
};

export async function generateJobTicket(
  page: Page,
  data: GenerateTicketInput
) {
  await page.selectOption('#customerField', data.customer);

  const totalPages = await editProcessInfo(page, {
    prepressSystem: data.prepressSystem,
    pressSystem: data.pressSystem,
    strippingTemplate: data.strippingTemplate,
  });

  await page.fill('#partPages', totalPages);

  await page.click('#btnSpecificationEnabled');
  await page.click('#btnSave');
  await page.click('#btnGenerate');

  await page.waitForSelector('.processing-complete');

  return {
    customer: data.customer,
    totalPages,
  };
}
