import { test, expect } from '@playwright/test';
import BlogPage from '../pages/blog.page';


test.describe('Blog Page', () => {
    let blogPage: BlogPage;

    test('Verify recent posts count and verify the length of each list item', async ({ page }) => {
        blogPage = new BlogPage(page);
        
        // open the blog page
        // await page.goto('https://practice.sdetunicorns.com/blog');
        await blogPage.navigate();

        // get the recent post list elements
        // const recentPostsList = page.locator('#recent-posts-3 ul li')

        // loop tru the list and assert the char length
        for (const el of await blogPage.recentPostsList.elementHandles()) {
            // expect((await el.textContent()).length).toBeGreaterThan(10)
            // console.log((await el.textContent())!.length);

            expect(((await el.textContent())!.trim()).length).toBeGreaterThan(10)
        }

        // assert the total length = 5
        expect(await blogPage.recentPostsList.count()).toEqual(5)
      
    })
    
})