const { test, expect } = require('@playwright/test')
test('verify drag and drop using inbuild command', async ({ page }) => {
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
    await page.locator('#box6').dragTo(await page.locator('#box106'));
    await expect(page.locator('#box6')).toHaveAttribute('style', 'visibility: visible; background-color: rgb(0, 255, 0);')
})
test('verify drag and drop using variables', async ({ page }) => {
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
    let rome = await page.locator('#box6');
    let Italy = await page.locator('#box106')
    await rome.dragTo(Italy);
    await expect(page.locator('#box6')).toHaveAttribute('style', 'visibility: visible; background-color: rgb(0, 255, 0);')
});

test('verify drag and drop using mouse actioms', async ({ page }) => {
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
    await page.locator('#box6').hover();
    await page.mouse.down();
    await page.locator('#box106').hover()
    await page.mouse.up()
    await expect(page.locator('#box6')).toHaveAttribute('style', 'visibility: visible; background-color: rgb(0, 255, 0);')
})