import { expect } from "@playwright/test";
export class Solutions {

    constructor(page) {
        this.page = page;
        this.solutionsLink = this.page.getByText('Solutions', { exact: true });
        this.locationRetailLink = this.page.getByRole('link', { name: 'location Retail' });
        this.headerText = this.page.locator('h1');
        this.requestDemoButton = this.page.getByRole('button', { name: 'Request a demo' }).nth(1);
        this.sauseLabsLink = this.page.getByRole('link', { name: 'Saucelabs' });
    }

    async solutionPageNavigation() {
        await this.solutionsLink.click();
        await this.locationRetailLink.click();
        await expect(this.headerText).toHaveText('DELIVER SEAMLESS RETAIL DIGITAL EXPERIENCES FOR YOUR SHOPPERS')
        await expect(this.requestDemoButton).toBeVisible();
        await this.sauseLabsLink.click();
    }
}