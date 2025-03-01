import { Locator, Page } from "@playwright/test";

export class TablePage {

    private readonly tableObject: Locator
    private readonly rowObjectPromise: Promise<Locator[]>


    constructor(page: Page){
        this.tableObject = page.locator("xpath=//table[@id='countries']")
        this.rowObjectPromise = this.tableObject.locator("xpath=.//tr").all()
    }

    async quantityRows(){
        console.log('Cantidad de Filas',((await this.rowObjectPromise).length))
    }

    async loopThroughaLoop(language:string){
        const countries : Country[] = []
        const rows =  await this.rowObjectPromise
        interface Country {
            name: string
            capital: string
            currency: string
            primaryLanguage: string
        }
        for (let row of rows){
            let country: Country= {
                name: await row.locator('xpath=.//td[2]').innerText(),
                capital: await row.locator('xpath=.//td[3]').innerText(),
                currency: await row.locator('xpath=.//td[4]').innerText(),
                primaryLanguage: await row.locator('xpath=.//td[5]').innerText()
            }

            countries.push(country)
        }
        const filterButLanguage = countries.filter(country => country.primaryLanguage == language)
        console.log('Countrys filted by Language: ',filterButLanguage)

        /*for (let variable_loop of countries){
            console.log(variable_loop)
        }*/

    }








}