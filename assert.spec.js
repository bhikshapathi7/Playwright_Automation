import { test, expect } from '@playwright/test'

test('assertions test', async ({ page }) => {

    // 1. Navigate and Log In
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Use the name attribute as it's more stable for textboxes
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    // validating url
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

    //validating title
    await expect(page).toHaveTitle('OrangeHRM')
    //await page.pause()
    await expect(page.getByText('My Actions')).toBeVisible()
    await expect(page.getByRole('link', { name: 'Admin' })).toBeEnabled()
    await page.getByRole('link', { name: 'Admin' }).click()
    //await expect(page.locator('.oxd-icon.bi-check').first()).not.toBeChecked()
    await expect(page.locator('//h5[contains(.,"System Users")]')).toBeVisible()
    await expect(page.locator('//h5[contains(.,"System Users")]/../../../div[2]/form/div/div/div/div/div[2]/input')).toBeEditable()
    //await expect(page.getByRole('textbox').nth(1)).toBeEditable()
    await expect(page.getByRole('button', { name: 'Search' })).toBeEnabled()
    await expect.soft(page.locator('//div[@class="orangehrm-horizontal-padding orangehrm-vertical-padding"]/span')).toHaveText(' (17) Records Found')

    await expect(page).toHaveScreenshot()
    await page.locator('//span[contains(.,"manda userSmith")]/i').click()

    await expect(page.locator('//li/a[text()="Logout"]')).toHaveAttribute('/web/index.php/auth/logout')
    await page.locator('//a[@href="/web/index.php/auth/logout"]').click()

    // 
})