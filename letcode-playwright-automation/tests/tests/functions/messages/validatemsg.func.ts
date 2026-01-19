import { Page } from "@playwright/test";


export function validateInformationMsg(
  msg: string,
  templateName: string
): boolean {
  const JOB_MSG_01 = '件の受注製品情報を読み込みました。';

  if (!msg.includes(JOB_MSG_01)) {
    throw new Error(`"${JOB_MSG_01}" not found in message: ${msg}`);
  }

  return true;
}


async function checkInnerMsgText(page: Page) {
    const inner_msg_text = await page.locator('span.white-space-pre-line').innerText()

    return validateInformationMsg(inner_msg_text, " ")
}