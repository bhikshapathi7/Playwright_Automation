import { test, expect } from '@playwright/test';

test('Should successfully log in, navigate, and log out', async ({ page }) => {

    // 1. Navigate and Log In
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Use the name attribute as it's more stable for textboxes
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button', { name: 'Login' }).click();

    // **VALIDATION:** Assert that the user is logged in (e.g., check for the Dashboard header)
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

    // 2. Navigate and Perform Actions (Deleting a record is often unreliable and should be avoided in basic tests)
    await page.getByRole('link', { name: 'My Info' }).click();

    await page.getByRole('button').filter({ hasText: /^$/ }).nth(3).click();

    // 3. Confirm Deletion
    // This is the confirmation button for the delete action above.
    await page.getByRole('button', { name: 'Yes, Delete' }).click();

    // 4. Logout
    // Locator for the user profile dropdown (usually spans the user's name/icon)
    await page.locator('span.oxd-user-dropdown-tab').click();

    await page.getByRole('menuitem', { name: 'Logout' }).click();

    // 5. Final Validation: Ensure logout was successful (e.g., check for the Login header)
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();


});