import { test, chromium } from '@playwright/test'



test('Slomotion test', async () => {

    const browser = await chromium.launch({
        headless: false,
        slowMo: 1000
    })

    const context = browser.newContext({

        recordVideo: {
            dir: 'videos/',
            size: { width: 800, height: 600 }
        }
    })

    const page = await context.newPage()

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
    await await page.close()
    await context.close()

})