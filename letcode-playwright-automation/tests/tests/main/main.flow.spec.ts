import { test } from '@playwright/test';

import { uploadCsvFile } from '../flows/misuploadcsvoutput.flow';
import { env } from '../../../configs/env.config';
import { select_tenant } from '../functions/header/tenants/tenant_selection.func';
//import { reviewUploadedFile } from '../flows/reviewUpload.flow';
//import { buildJob } from '../flows/buildJob.flow';
//import { generateJobTicket } from '../flows/generateJobTicket.flow';
//import { exportJobCsv } from '../flows/exportJobCsv.flow';
//import { reviewTransmissionList } from '../flows/transmissionList.flow';

test('Main Flow - CSV upload to transmission export', async ({ page }) => {
  
  //access job build list
  await page.goto(env.portalURL, { waitUntil: 'domcontentloaded' })
  await page.waitForSelector('#rcp-portal-grid', {timeout: 60000})

  //select tenant
  await select_tenant(page)

  //click portal image to access jobbuild list
  await page.locator('.rcp-portal-card').click({ timeout: 60000 });
  await page.waitForSelector('#order-product-list', {timeout: 60000})


  //upload CSV
  await uploadCsvFile(page, {
    filePath: 'tests/data/mainflow/data_test_mf.csv',
    templateName: 'MultiAttributeMappingTemplate',
  });

  /*
    await reviewUploadedFile(page);
  
    await buildJob(page, {
      buildType: 'Auto',
    });
  
    const jobContext = await generateJobTicket(page, {
      customer: 'Customer A',
      prepressSystem: 'Prepress-01',
      pressSystem: 'Press-01',
      strippingTemplate: 'Strip-Template-01',
    });
  
    await exportJobCsv(page);
  
    await reviewTransmissionList(page, jobContext);*/
});
