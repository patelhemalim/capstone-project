import { Builder, Capabilities } from "selenium-webdriver"
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async()=>{
    await driver.get('http://127.0.0.1:4005/index1.html')


})
afterAll(async () => {await driver.quit()})

test('able to log in when button clicks',async()=>{
    const logIN = await driver.findElement(By.id('login-submit'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)

})