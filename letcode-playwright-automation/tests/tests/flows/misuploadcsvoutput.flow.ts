import { Page, expect } from '@playwright/test';
import { uploadFile } from '../functions/csvupload/select_mapping_template.flow';

type UploadCsvInput = {
  filePath: string;
  templateName: string;
};

export async function uploadCsvFile(
  page: Page,
  data: UploadCsvInput
) {

  
  //click Upload file
  uploadFile(page, data.filePath)

  //open Mapping template menu
  await page
    .locator('div')
    .filter({ has: page.locator('select#opl-csv-upload-mapping-template') })
    .locator('a.xux-dropdown')
    .click();


  //check opened
  const template_dropdown = page.locator('a.xux-dropdown-open')
  await expect(template_dropdown).toBeVisible();

  //select Mapping Template by data.templateName
  await page
    .locator('li[role="option"]')
    .filter({ has: page.locator('span', { hasText: data.templateName }) })
    .click()

  //Tick Uploading order information with duplicate order numbers
  await expect(page.locator('#opl-csv-upload-checkbox')).toBeChecked();

  //Click OK
  await page.locator('button#opl-csv-upload-import-btn').click();
}
