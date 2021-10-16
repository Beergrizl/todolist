
describe('addItemForm', () => {

    it('base example, visually looks correct', async () => {
        await page.setDefaultNavigationTimeout(0)
        // APIs from jest-puppeteer
        await page.goto('http://localhost:9009/iframe.html?id=todolist-additemform--add-item-form-stories&args=&viewMode=story');
        const image = await page.screenshot();

        // API from jest-image-snapshot
        expect(image).toMatchImageSnapshot();
    });
});
