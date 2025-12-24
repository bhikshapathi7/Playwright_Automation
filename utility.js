import { expect } from "@playwright/test";
export class Utility {

    constructor(page) {
        this.page = page;
        this.signUpFreeLink = this.page.getByRole('button', { name: 'Sign up for free' }).first();
    }

    async navigateUrl(url) {
        await this.page.goto(url);
    }

    async validateBackNavigation(title) {
        await expect(this.signUpFreeLink).toBeVisible();
        await expect(this.page).toHaveTitle(title)

    }

    async pageClose() {
        await this.page.close();
    }
}