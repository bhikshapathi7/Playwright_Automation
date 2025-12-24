import { test, expect } from '@playwright/test'

test('This is loacators test', async ({ page }) => {

     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     await page.waitForTimeout(3000)

     //
     await page.getByPlaceholder('Username').fill('Admin')
     await page.locator('//input[@name="password"]').fill('admin123')
     await page.locator('//button[@type="submit"]').click()

     await page.getAttribute('/web/index.php/admin/viewAdminModule').click()
     await page.getByText(' Add ').click()
     await page.locator('//button[text()=" Cancel "]').click()

     await page.locator('//div[@class="oxd-table-row oxd-table-row--with-border"]/div[2]/div[contains(.,"Nithyakala_1")]/../../div/div/button/i[@class="oxd-icon bi-trash"]').click()

     await page.locator('//button/i[@class="oxd-icon bi-trash oxd-button-icon"]').click()

})