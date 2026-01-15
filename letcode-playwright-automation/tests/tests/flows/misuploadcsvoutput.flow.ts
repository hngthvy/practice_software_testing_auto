import { Page } from '@playwright/test';

type UploadCsvInput = {
  filePath: string;
  templateName: string;
};

export async function uploadCsvFile(
  page: Page,
  data: UploadCsvInput
) {
  await page.click('#btnUploadCsv');
  await page.setInputFiles('#fileInput', data.filePath);
  await page.selectOption('#templateSelect', data.templateName);
  await page.click('#btnOk');
}
