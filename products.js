import { expect } from "@playwright/test";
export class Products {

    constructor(page) {

        this.page = page;
        this.productsLink = this.page.getByRole('banner').getByText('Products')
        this.sauseAIButton = this.page.getByRole('link', { name: 'location Sauce AI', exact: true })
        this.talkToExpertButton = this.page.getByRole('button', { name: 'Talk to an expert' })
        this.homeLink = this.page.getByRole('link', { name: 'Home' })

    }

    async productsPageNavigation() {
        await this.productsLink.click();
        await this.sauseAIButton.click();
        await expect(this.talkToExpertButton).toBeVisible();
        await this.homeLink.click();

    }



}