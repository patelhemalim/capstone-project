import { Builder, Capabilities } from "selenium-webdriver"
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async()=>{
    await driver.get('http://127.0.0.1:4005/index3.html')


})
afterAll(async () => {await driver.quit()})

test('able to go back when back button clicks',async()=>{
    const goBack = await driver.findElement(By.id('back'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)

})