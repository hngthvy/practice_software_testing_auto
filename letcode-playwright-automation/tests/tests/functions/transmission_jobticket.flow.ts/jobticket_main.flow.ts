import { Page, expect } from '@playwright/test';
import { readCsvFile, readJsonFile } from '../../../helpers/file_helper';

export async function reviewTransmissionList(
  page: Page,
  jobContext: any
) {
  await page.click('#tabTransmissionList');

  await page.click('.job-ticket-row:first-child');

  await expect(page.locator('#customerField'))
    .toHaveText(jobContext.customer);

  await page.click('#btnDownloadTicket');

  if (await page.locator('#ticketType').textContent() === 'XMF') {
    const json = readJsonFile('download/ticket.json');
    expect(json.customer).toBe(jobContext.customer);
  } else {
    const jdf = readJsonFile('download/ticket.jdf');
    expect(jdf.totalPages).toBe(jobContext.totalPages);
  }

  await page.click('#tabExportFile');
  await page.click('.export-row:first-child');
  await page.click('#btnDownloadCsv');

  const csv = readCsvFile('download/export.csv');
  //expect(csv.customer).toBe(jobContext.customer);
}
