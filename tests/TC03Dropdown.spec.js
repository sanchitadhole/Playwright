const { test, expect } = require('@playwright/test')

test('verify the static dropdown', async ({ page }) => {
    await page.goto('https://letcode.in/dropdowns');
    await page.locator('#fruits').selectOption('4');
    await page.locator('#superheros').selectOption('ta');
    await page.locator('#lang').selectOption('sharp');
    await page.locator('#lang').selectOption('swift')
});

test.only('verify the dynamic dropdown', async ({ page }) => {
    await page.goto('https://www.redbus.in/');
    await page.locator('#src').fill('pune', { delay: 1000 });
    await page.waitForSelector(".placeHolderMainText");
    const OptCount = await page.locator(".placeHolderMainText").count();
    console.log(OptCount)
    for (let i = 0; i < OptCount; i++) {
        let text = await page.locator(".placeHolderMainText").nth(i).textContent()
        if (text == 'Nashik Phata') {
            await page.locator('.placeHolderMainText').nth(i).click()
            break
        }
    }

    await page.pause()

});


