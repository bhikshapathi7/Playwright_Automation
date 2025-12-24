import { test, expect } from '@playwright/test'

test('This is drop down test', async ({ page }) => {
  await page.goto('https://demoqa.com/select-menu');
  await expect(page).toHaveTitle('DEMOQA');
 
 const dd= 'select#oldSelectMenu';

const val = await page.$$(dd+ 'option')
//const colors = await dd.allTextContents();

for (let x in val){

const text = await x.textContent();
  console.log('dropdow values is : ' +text)
}

})