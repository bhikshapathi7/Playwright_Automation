import { test, expect } from '@playwright/test'
import { Products } from '../pages/products.js'
import { Resources } from '../pages/res.js'
import { Solutions } from '../pages/solutions.js'
import { Utility } from '../pages/utility.js'



test.describe('POM Practice', () => {


    let products;
    let resources;
    let solutions;
    let utility;

    test.beforeEach(async ({ page }) => {
        products = new Products(page)
        resources = new Resources(page)
        solutions = new Solutions(page)
        utility = new Utility(page)
        await utility.navigateUrl('https://saucelabs.com/');
        await page.waitForTimeout(10000)
        await page.waitForLoadState('load');

    })

    test.afterEach(async () => {
        await utility.pageClose();
    })

    test('Products page navigation', async () => {
        await products.productsPageNavigation();
    })

    test('Resource page navigation', async () => {

        await resources.resourcesNavigation();
    })

    test('Solutions Navigation', async () => {

        await solutions.solutionPageNavigation();
    })
})