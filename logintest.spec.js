import { expect, test } from '@playwright/test'

test('Login test1', async ({ page }) => {

    await page.goto('https://demo.applitools.com')
    // await page.pause()
    await page.getByRole('textbox', { name: 'Enter your username' }).fill('kohli')
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('virat18')
    await page.getByRole('link', { name: 'Sign in' }).click()
    await expect(page).toHaveTitle('ACME demo app')

})

test('Login test2', async ({ page }) => {

    // 1. Navigate and Log In
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Use the name attribute as it's more stable for textboxes
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

})