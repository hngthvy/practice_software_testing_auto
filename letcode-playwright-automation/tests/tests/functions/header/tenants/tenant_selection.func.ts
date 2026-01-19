//function select tenant in the header
import { expect, Page } from "@playwright/test";
import { env } from "../../../../../configs/env.config";

export async function select_tenant(page:Page) {
    //open tenant menu
    await page.locator('a.xux-dropdown.xux-size-tenants').click({ force: true });

    //check opened
    const tenants_dropdown = page.locator('a.xux-dropdown-open')
    await expect(tenants_dropdown).toBeVisible();

    //select tenant option
    await page
    .locator('li[role="option"]')
    .filter({ has: page.locator('span', { hasText: env.qa_tenant_using}) })
    .click()

    


}