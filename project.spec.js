import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';


test.beforeEach('Launching browser', async ({ page }) => {
    await page.goto("https://todomvc.com/")
    await page.waitForLoadState('load');
});

test.afterEach('Closing page fixture', async ({ page }) => {

    await page.close();

});
test('Todo site demo test @smoke', async ({ page }) => {
    await page.waitForTimeout(3000);
    await expect(page.getByText('Helping you select an MV*')).toBeVisible();
    await page.getByRole('link', { name: 'React New', exact: true }).click();
    const text_input = page.getByTestId('text-input');
    await expect(text_input).toBeVisible();
    await text_input.fill('Virat');
    await text_input.press('Enter');
    await text_input.fill('Rohit');
    await text_input.press('Enter');
    await text_input.fill('Msd');
    await text_input.press('Enter');
    await text_input.fill('Rahul');
    await text_input.press('Enter');
    await text_input.fill('Bumarah');
    await text_input.press('Enter');
    await text_input.fill('Hardhik');
    await text_input.press('Enter');
    await page.getByRole('listitem').filter({ hasText: 'Msd' }).getByTestId('todo-item-toggle').check();
    await page.getByRole('listitem').filter({ hasText: 'Virat' }).getByTestId('todo-item-toggle').check();
    await page.getByRole('listitem').filter({ hasText: 'Rohit' }).getByTestId('todo-item-toggle').check();
    await page.getByRole('link', { name: 'Completed' }).click();
    await page.getByRole('link', { name: 'Completed' }).click();
    await page.getByRole('link', { name: 'Active' }).click();
    await page.getByRole('link', { name: 'All' }).click();
    await page.getByRole('button', { name: 'Clear completed' }).click();
    await page.getByRole('link', { name: 'Active' }).click();
    await expect(page.getByTestId('todo-list')).toContainText('Rahul');
    await page.getByText('Bumarah').click();
    await page.getByRole('button', { name: '×' }).click();
})

test('Validating links in todo mvc site @regression', async ({ page }) => {
    const alllinks = page.locator('a');
    const count = await alllinks.count();
    console.log("Total links in the page:" + count);

});