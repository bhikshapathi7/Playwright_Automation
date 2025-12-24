import { test, expect } from '@playwright/test'

test('This is drop down test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page).toHaveTitle('OrangeHRM');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.locator('div:nth-child(6) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
  await page.getByText('Automaton Tester').click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).nth(1).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).nth(1).fill('QA ');
  await page.getByText('QA 123').click();
})