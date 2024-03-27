import { test, expect } from '@playwright/test';
import HomePage from '../pages/home.page';

test.describe('Home', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigate()
    })
    

    test('Open Home page and verify title', async ({ page }) => {  
        // verify the title
        await expect(page).toHaveTitle("Practice E-Commerce Site – SDET Unicorns");
    })

    test('Open About page and verify title', async ({ page }) => {
        // open the url
        await page.goto('https://practice.sdetunicorns.com/about');

        // verify the title
        await expect(page).toHaveTitle("About – Practice E-Commerce Site");
    })

    test('Click get started button using CSS selector', async ({ page }) => {

        await expect(page).not.toHaveURL(/.*#get-started/);
        // Click the button
        // await page.locator('#get-started').click()
        await homePage.getStartedBtn.click()

        // verify the url has #get-started
        await expect(page).toHaveURL(/.*#get-started/);
    })

    test('Verify heading text is visible using text selector', async () => {

        // find the text locator
        // const headingText = await page.locator('text = Think different. Make different.')
        const headingText = await homePage.headingText

        // verify the heading text is visible
        await expect(headingText).toBeVisible();

    })

    test('Verify my home link is enabled using text and css selector', async () => {

        // find the home text
        // const homeText = await page.locator('#zak-primary-menu >> text=Home')
        // const homeText = await page.locator('#zak-primary-menu:has-text("Home")')
        const homeText = await homePage.homeLink

        // verify the heading text is visible
        await expect(homeText).toBeEnabled();
    })

    test('Verify search icon is visible using xpath selector', async () => {

        // find the search icon
        // const searchIcon = await page.locator('//div[@class="zak-header-actions zak-header-actions--desktop"]//a[@class="zak-header-search__toggle"]')
        const searchIcon = await homePage.searchIcon

        // verify the search icon is visible
        await expect(searchIcon).toBeVisible();
    })
    
    test('Verify text for all nav links', async () => {
 

        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
          ];

        // open the url
        // await page.goto('https://practice.sdetunicorns.com/');
        // await homePage.navigate()

        // find the nav links
        // const navLinks = page.locator('#zak-primary-menu li[id*=menu]')
        // const navLinks = page.locator('#zak-primary-menu li[id*=menu]').nth(3)
        // const navLinks = homePage.navLinks

        // verify the nav links text
        // expect(await navLinks.allTextContents()).toEqual(expectedLinks);
        // expect(await navLinks.textContent()).toEqual(expectedLinks[3]);
        // expect(await homePage.getNavLinksText()).toEqual(expectedLinks);
        expect(await homePage.getNavLinksText()).toEqual(expectedLinks);
    })


    test('Verify text for all nav links tru loops', async () => {
    

        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
          ];

        // open the url
        // await page.goto('https://practice.sdetunicorns.com/');
        await homePage.navigate()

        // find the nav links
        // const navLinks = page.locator('#zak-primary-menu li[id*=menu]')
        // const navLinks = await homePage.navLinks

        // print out all the links
        // for (const el of await navLinks.elementHandles()) {
        //     console.log(await el.textContent())
        // }

        // verify the nav links text
        // expect(await navLinks.allTextContents()).toEqual(expectedLinks);
        expect(await homePage.getNavLinksText()).toEqual(expectedLinks);
        

    })

})
