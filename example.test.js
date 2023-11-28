// @ts-check
const { test, expect } = require('@playwright/test');

test('example', async ({ page }) => {
  await page.goto('https://mail.google.com');
  await page.getByLabel('Email or phone').fill('AutomationTest.1123');
  await page.locator('#identifierNext').getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('Enter your password').fill('AutomationTest@1');
  await page.locator('#passwordNext').getByRole('button', { name: 'Next' }).click();
  await expect(page.locator("[role='grid'] tbody :nth-child(1) [role='gridcell'] [role='link']", { hasText: 'Automation, finish setting up your new Google Account' })).toBeVisible({ timeout: 30000 });
});
