import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {

    private readonly usernameTextbox: Locator
    private readonly passwordTextbox: Locator
    private readonly loginButton: Locator
    private readonly validadorCars: Locator
    private readonly objects_on_cart_one: Locator
    private readonly objects_on_cart_two: Locator
    private readonly checkout: Locator
    private readonly firstnamefinal: Locator
    private readonly lastnamefinal: Locator
    private readonly zipcode: Locator
    private readonly prelastbotton: Locator
    private readonly ultimatebotton: Locator

    

    constructor(page: Page){
        this.usernameTextbox = page.getByRole('textbox',{name:'Username'})
        this.passwordTextbox = page.getByRole('textbox',{name:'Password'})
        this.loginButton = page.getByRole('button',{name:'Login'})
        this.validadorCars = page.locator('#shopping_cart_container').getByRole('link')
        this.objects_on_cart_one = page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button')
        this.objects_on_cart_two = page.locator('div').filter({ hasText: /^\$9\.99ADD TO CART$/ }).getByRole('button')
        this.checkout = page.getByRole('link', { name: 'CHECKOUT' })
        this.firstnamefinal = page.locator('[data-test="firstName"]')
        this.lastnamefinal = page.locator('[data-test="lastName"]')
        this.zipcode = page.locator('[data-test="postalCode"]')
        this.prelastbotton = page.getByRole('button', { name: 'CONTINUE' })
        this.ultimatebotton = page.getByRole('link', { name: 'FINISH' })
    }

    async fillUsername(username:string){
        await this.usernameTextbox.fill(username)

    }

    async fillPassword(password:string){
        await this.passwordTextbox.fill(password)

    }

    async clickButton(){
        await this.loginButton.click()

    }

    async valideCartShopping(){
        await expect(this.validadorCars).toBeVisible()
    }

    async append_object_cart(){
        await expect(this.objects_on_cart_one).toBeVisible();
        await expect(this.objects_on_cart_two).toBeVisible();
        await this.objects_on_cart_one.click()
        await this.objects_on_cart_two.click()
        
    }

    async insideCartShopping(){
        await this.validadorCars.click()
    }

    async reviewCheckOut(firstname:string,lastname:string,zipcodes:string){
        await this.checkout.click()
        await this.firstnamefinal.fill(firstname)
        await this.lastnamefinal.fill(lastname)
        await this.zipcode.fill(zipcodes)
        await this.prelastbotton.click()
        await this.ultimatebotton.click()

    }

    

    }