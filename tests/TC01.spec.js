const {test,expect} = require('@playwright/test')

test('verify login functionality with valid credentials',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[type="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();
    page.waitForEvent('load')
    await expect(page.locator('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')).toBeVisible()

})

test.only('verify login functionality with Invalid credentials',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('input[name="username"]').fill('AddmDSFSDFin');
    await page.locator('input[type="password"]').fill('admiSFDSFn123');
    await page.locator('button[type="submit"]').click();
    page.waitForEvent('load')
    await expect(page.locator('.oxd-text.oxd-text--p.oxd-alert-content-text')).toHaveText('Invalid credentials')
})


// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/sanchitadhole/Playwright.git
// git push -u origin main
