import { test, expect} from '@playwright/test';
import ContactPage from '../pages/contact.page';
import { faker } from '@faker-js/faker';

test.describe('Contact Page', () => {
    let contactPage: ContactPage;

    test('Fill contact form and verify success message', async ({ page }) => {
        contactPage = new ContactPage(page);

        // open the contact page
        // await page.goto('https://practice.sdetunicorns.com/contact');
        await contactPage.navigate();

        // fill out the input fields
        await contactPage.submitForm('test_' + faker.person.fullName(), faker.internet.email(), faker.phone.number(), faker.lorem.paragraphs(2));

        // verify success message
        await expect(contactPage.successTxt).toHaveText('Thanks for contacting us! We will be in touch with you shortly')
    })
    
})
