import { test } from '@playwright/test'
//import { LoginPage } from './page_object/LoginPage'

test('purchase an item', async ({page})=> {

    await page.goto(process.env.URL)
    const instancia = new LoginPage(page)
    await instancia.fillUsername('problem_user')
    await instancia.fillPassword('secret_sauce')
    await instancia.clickButton()
    await instancia.valideCartShopping()
    await instancia.append_object_cart()
    await instancia.insideCartShopping()
    await instancia.reviewCheckOut('Juan','Fong','507')
    /*await page.pause()*/
    })