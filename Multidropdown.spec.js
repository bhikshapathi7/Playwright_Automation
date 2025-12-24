import { test, expect } from '@playwright/test'

test('This is drop down test', async ({ page }) => {
  await page.goto('https://demoqa.com/select-menu');
  await expect(page).toHaveTitle('DEMOQA');
  //await page.getByRole('link', { name: 'Request/Enquire' }).first().click();
  const dropdown = page.locator('#colors').click()

  // By value
//await dropdown.selectOption('['red', 'green', 'blue']);

// By label
await page.selectOption('#colors', [{ label: 'Red' }, { label: 'Blue' }]);

// Mix of index and value
await page.selectOption('#colors', [{ index: 0 }, 'green']);

})