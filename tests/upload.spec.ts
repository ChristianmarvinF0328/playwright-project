import { test, expect } from '@playwright/test';
import CartPage from '../pages/cart.page';
import path from 'path';

test.describe('Upload File', () => {
  let cartPage: CartPage;

  const fileName = ['5mb.pdf', 'sample_png_img.png']

  for (const name of fileName) {
    test(`should upload a ${name} file`, async ({ page }) => {
      cartPage = new CartPage(page);
  
      // Open url
      await page.goto("https://practice.sdetunicorns.com/cart/");
  
      // provide test file path
      const filePath = path.join(__dirname, `../data/${name}`);
      
      // upload test file
      cartPage.uploadComponent().uploadFile(filePath);
  
      // assertion
      await expect(cartPage.uploadComponent().successTxt)
        .toContainText('uploaded successfully', {timeout: 15000});
    })
  }

    test('Should upload a test file', async ({ page }) => {
      cartPage = new CartPage(page);

        // open url
        // await page.goto('https://practice.sdetunicorns.com/cart');
        await cartPage.navigate();


        // provide test file
        const filePath = path.join(__dirname, '../data/5mb.pdf');

        // // upload test file
        // await page.setInputFiles('input#upfile_1', filePath);
        cartPage.uploadComponent().uploadFile(filePath);

      
        // // click submit button
        // await page.locator('#upload_1').click();

        // assertion
        // await expect(page.locator('#wfu_messageblock_header_1_1'))
        // .toContainText('uploaded successfully', {timeout: 10000});   

        await expect(cartPage.uploadComponent().successTxt)
        .toContainText('uploaded successfully', {timeout: 15000});   
     })

     
     test('should upload a test file on a hidden input field', async ({ page }) => {
      cartPage = new CartPage(page);
        // open url
        // await page.goto('https://practice.sdetunicorns.com/cart');
        await cartPage.navigate();

        // provide test file
        const filePath = path.join(__dirname, '../data/sample_png_img.png');

        // DOM Manipulation
        await page.evaluate(() => {
            const selector = document.querySelector('input#upfile_1');
            if (selector) {
              selector.className = ''
            }
        })

        // // upload test file
        // await page.setInputFiles('input#upfile_1', filePath)
      
        // // click submit button
        // await page.locator('#upload_1').click();
        cartPage.uploadComponent().uploadFile(filePath);

        // assertion
        await expect(cartPage.uploadComponent().successTxt)
        .toContainText('uploaded successfully');   
     })
     
    
})