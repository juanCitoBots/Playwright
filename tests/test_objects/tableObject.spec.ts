import { test } from '@playwright/test'
import { TablePage } from '../page_object/Table.Page'


test('Count this table', async({page}) => {
    await page.goto('https://cosmocode.io/automation-practice-webtable/')
    const instant_two = new TablePage(page)
    await instant_two.quantityRows()
    await instant_two.loopThroughaLoop('Spanish')
})