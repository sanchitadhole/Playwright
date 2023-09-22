const {test,expect} = require('@playwright/test')

test('verify the static dropdown',async({page})=>{
    await page.goto('https://letcode.in/dropdowns');
    await page.locator('#fruits').selectOption('4');
    await page.locator('#superheros').selectOption('ta');
    await page.locator('#lang').selectOption('sharp');
    await page.locator('#lang').selectOption('swift')
});

test('verify the dynamic dropdown',async({page})=>{
    await page.goto('https://www.redbus.in/');
    await page.locator('#src').fill('pune');
    await page.pause()
   
});

