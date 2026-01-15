import { test, expect } from '@playwright/test'
test.setTimeout(600000)
test('Verify column names in list', async ({ page, baseURL }) => {

  const _BASE_URL_QA = baseURL ?? ''
  await page.goto('/', { waitUntil: 'domcontentloaded' });

  const expectedColumns = [
    '受注番号',
    '件数',
    '顧客名',
    '製品名',
    '受注担当者名',
    '受注日',
    '下版日',
    '納期',
    '受注数量',
    '前回受注番号',
    'ステータス',
    'ジョブチケット',
    '成ステータス',
    '学習データ',
    '登録日時',
    '更新日時',
    '更新者'
  ];

  const columnHeaders = page.locator('table thead tr th');
  await expect(columnHeaders).toHaveCount(expectedColumns.length+1);

  for (let i = 0; i < expectedColumns.length; i++) {
    await expect(columnHeaders.nth(i)).toHaveText(expectedColumns[i]);
  }
});
