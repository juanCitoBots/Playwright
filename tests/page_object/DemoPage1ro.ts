import { expect, Locator, Page } from "@playwright/test";


export class DemoPage {
    private readonly page: Page
    private readonly objectTitle: Locator
    private readonly categoriesPhones: Locator
    private readonly categoriesLaptops: Locator
    private readonly categoriesMonitors: Locator
    private readonly primaryPhone : Locator
    private readonly addCartPrimaryPhone : Locator
    private readonly secondPhone : Locator
    private readonly addCartSecondPhone: Locator
    private readonly primaryLaptop: Locator
    private readonly addCartPrimaryLaptop: Locator
    private readonly primaryMonitor: Locator
    private readonly addCartPrimaryMonitor: Locator
    private readonly buttonHomeReturn: Locator
    private readonly cartbutton: Locator
    private readonly placeOrderbutton: Locator
    private readonly nameCamp: Locator
    private readonly countryCamp: Locator
    private readonly cityCamp: Locator
    private readonly cardCamp: Locator
    private readonly mounthCamp: Locator
    private readonly yearCamp: Locator
    private readonly purchaseButton: Locator

    constructor(page: Page){
       this.page = page
       this.objectTitle = page.getByRole('link',{name: 'PRODUCT STORE'})
       //this.objectTitle = page.getByText('PRODUCT STORE')
       this.categoriesPhones = page.getByRole('link',{name: 'Phones'})
       this.categoriesLaptops = page.getByRole('link',{name:'Laptops'})
       this.categoriesMonitors = page.getByRole('link',{name:'Monitors'})
       this.primaryPhone = page.getByRole('link',{name:'Samsung galaxy s6'})
       this.addCartPrimaryPhone = page.getByRole('link',{name:'Add to cart'})
       this.secondPhone = page.getByRole('link',{name:'Nokia lumia 1520'})
       //this.addCartSecondPhone = page.getByRole('link',{name:'Add to cart'})
       this.primaryLaptop = page.getByRole('link',{name:'Sony vaio i5'})
       //this.addCartPrimaryLaptop = page.getByRole('link',{name:'Add to cart'})
       this.primaryMonitor = page.getByRole('link',{name:'Apple monitor 24'})
       //this.addCartPrimaryMonitor = page.getByRole('link',{name:'Add to cart'})
       this.buttonHomeReturn = page.getByRole('link',{name:'Home (current)'})
       this.cartbutton = page.getByRole('link',{name:'Cart'})
       this.placeOrderbutton = page.getByRole('button', { name: 'Place Order' })
       //this.nameCamp = page.getByRole('textbox', { name: 'Total: 1610 Name:' })
       this.nameCamp = page.locator("xpath =//*[@id='name']")
       this.countryCamp = page.getByRole('textbox', { name: 'Country:' })
       this.cityCamp = page.getByRole('textbox', { name: 'City:' })
       this.cardCamp = page.getByRole('textbox', { name: 'Credit card:' })
       this.mounthCamp = page.getByRole('textbox', { name: 'Month:' })
       this.yearCamp = page.getByRole('textbox', { name: 'Year:' })
       this.purchaseButton = page.getByRole('button', { name: 'Purchase' })

    }



    async validateTitleOfficial(){
        await expect(this.objectTitle).toBeVisible()
    }

    async navigate(link:string){
        await this.page.goto(link)
    }

    async loginPage(nameComplete:string,country:string,city:string,card:string,mounth:string,year:string){
        await this.placeOrderbutton.click()
        await this.nameCamp.fill(nameComplete)
        await this.countryCamp.fill(country)
        await this.cityCamp.fill(city)
        await this.cardCamp.fill(card)
        await this.mounthCamp.fill(mounth)
        await this.yearCamp.fill(year)
        await this.purchaseButton.click()
    }




    async selectArtefacts(){
        await this.categoriesPhones.click()
        await this.primaryPhone.click()  // Select by primary phone
        await this.addCartPrimaryPhone.click()  // Add the primary phone on the cart
        await this.page.on('dialog',async dialog => {
            console.log(dialog.message())
            await dialog.accept()
        })     // drive the exceptions and pop-ups
        await this.buttonHomeReturn.click()
        await this.secondPhone.click()
        await this.addCartPrimaryPhone.click()
        await this.page.on('dialog',async dialog => {
            console.log(dialog.message())
            await dialog.accept()
        })     // drive the exceptions and pop-ups
        await this.buttonHomeReturn.click()
        await this.categoriesLaptops.click()
        await this.primaryLaptop.click()
        await this.addCartPrimaryPhone.click()
        await this.page.on('dialog',async dialog => {
            console.log(dialog.message())
            await dialog.accept()
        })     // drive the exceptions and pop-ups
        await this.buttonHomeReturn.click()
        await this.cartbutton.click()
        
        
    }





    }


