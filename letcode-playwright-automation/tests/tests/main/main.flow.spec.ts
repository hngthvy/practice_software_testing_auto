    import { test } from '@playwright/test';

import { uploadCsvFile } from '../flows/misuploadcsvoutput.flow';
//import { reviewUploadedFile } from '../flows/reviewUpload.flow';
//import { buildJob } from '../flows/buildJob.flow';
//import { generateJobTicket } from '../flows/generateJobTicket.flow';
//import { exportJobCsv } from '../flows/exportJobCsv.flow';
//import { reviewTransmissionList } from '../flows/transmissionList.flow';

test('Main Flow - CSV upload to transmission export', async ({ page }) => {

  await uploadCsvFile(page, {
    filePath: 'data/mainflow/data_test_mf.csv',
    templateName: 'Default Template',
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
