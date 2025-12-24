import { test, expect } from '@playwright/test'

test('This is drop down test', async ({ page }) => {
  await page.goto('https://demoqa.com/select-menu');
  await expect(page).toHaveTitle('DEMOQA');
  //await page.getByRole('link', { name: 'Request/Enquire' }).first().click();
  const countryDropdown = page.locator('#selectOne').click()

  // By label
 // await countryDropdown.selectOption(countryDropdown, { label: 'India' })
  // By value

await page.getByText('Mr.', { exact: true }).click();

  // Verification
  await expect(page.locator('#selectOne')).toContainText('Mr.');

  // By index
 // await countryDropdown.selectOption({ index: 25 })

})