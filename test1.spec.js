import { test, expect } from '@playwright/test'

test('This is my Playwright test', async ({ page }) => {


    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page).toHaveTitle('OrangeHRM');
    console.log('Jai Mahakaal')

})