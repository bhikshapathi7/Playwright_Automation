import { expect } from "@playwright/test";

export class Resources {
    constructor(page) {
        this.page = page;
        // Cleaned up typos and simplified locators
        this.resourcesLink = this.page.getByRole('button', { name: 'Resources', exact: true });
        this.playwrightLink = this.page.getByRole('link', { name: 'Playwright' });
        this.playwrightHeading = this.page.getByRole('heading', { name: 'Playwright', exact: true });
        this.backToTopicsLink = this.page.getByRole('link', { name: 'Back to Topics' });
        this.appiumHeading = this.page.getByRole('heading', { name: 'Appium' });
        this.homeLink = this.page.getByRole('link', { name: 'Home' });
        this.onePlatformHeading = this.page.getByRole('heading', { name: 'One Platform for Continuous' });
    }

    // Fixed typo in method name to match your test file
    async resourcesNavigation() {
        await this.resourcesLink.click();
        await this.playwrightLink.click();

        // Assertions are good here to ensure the page changed before the next click
        await expect(this.playwrightHeading).toBeVisible();

        await this.backToTopicsLink.click();
        await expect(this.appiumHeading).toBeVisible();

        await this.homeLink.click();
        await expect(this.onePlatformHeading).toBeVisible();
    }
}