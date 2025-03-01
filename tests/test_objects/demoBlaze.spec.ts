import { test } from '@playwright/test'
import { DemoPage } from '../page_object/DemoPage1ro'




test('Flujo Normal de compras', async({page})=> {
    const instaxTest = new DemoPage(page)
    await instaxTest.navigate('https://www.demoblaze.com/index.html')
    await instaxTest.validateTitleOfficial()
    await instaxTest.selectArtefacts()
    await instaxTest.loginPage('Juan Aldahir Fong','Panama','Panama','08254887745523','September','1995')
    //await page.pause()
})

/*test('Recorrido por pasos demoblaze',async({page})=>{
    await test.step('Colocar sitio web',async() => {
        const instaxTest = new DemoPage(page)
        await instaxTest.navigate('https://www.demoblaze.com/index.html')
    })
    await test.step('Validar si se encuentra en la pagina correcta',async() =>{
        const instaxTest = new DemoPage(page)
        await instaxTest.validateTitleOfficial()
    })
    await test.step('Seleccionar objectos para comprar', async()=>{
        const instaxTest = new DemoPage(page)
        await instaxTest.selectArtefacts()
    })
    await test.step('LoginPay', async()=> {
        const instaxTest = new DemoPage(page)
        await instaxTest.loginPage('Juan Aldahir Fong','Panama','Panama','08254887745523','September','1995')
    })
    
})*/
