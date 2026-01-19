import test, { Page } from "@playwright/test";

export async function uploadFile(page: Page, filePath: string) {
    // Start waiting for the file chooser dialog before clicking the button
    const fileChooserPromise = page.waitForEvent('filechooser', {timeout: 60000});

    // Click the non-input element that opens the file dialog

    //click Upload button
    await page.click('#opl-import-btn');

    // Wait for the dialog to appear and get a reference to it
    const fileChooser = await fileChooserPromise;

    // Set the files using the fileChooser object
    await fileChooser.setFiles(filePath);
}