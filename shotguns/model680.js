const puppeteer = require('puppeteer')

async function scrapeModel(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    
    

    const [muzzles] = await page.$x('//*[@id="mw-content-text"]/div/ul[2]')
    const attachment1 = await muzzles.getProperty('textContent')
    const model_muzzle = await attachment1.jsonValue()

    const [barrels] = await page.$x('//*[@id="mw-content-text"]/div/ul[3]')
    const attachment2 = await barrels.getProperty('textContent')
    const model_barrel = await attachment2.jsonValue()

    const [lasers] = await page.$x('//*[@id="mw-content-text"]/div/ul[4]')
    const attachment3 = await lasers.getProperty('textContent')
    const model_laser = await attachment3.jsonValue()

    const [optic] = await page.$x('//*[@id="mw-content-text"]/div/ul[5]')
    const attachment4 = await optic.getProperty('textContent')
    const model_optic = await attachment4.jsonValue()

    const [stock] = await page.$x('//*[@id="mw-content-text"]/div/ul[6]')
    const attachment5 = await stock.getProperty('textContent')
    const model_stock = await attachment5.jsonValue()

    const [grip] = await page.$x('//*[@id="mw-content-text"]/div/ul[7]')
    const attachment6 = await grip.getProperty('textContent')
    const model_grip = await attachment6.jsonValue()

    const [ammo] = await page.$x('//*[@id="mw-content-text"]/div/ul[8]')
    const attachment7 = await ammo.getProperty('textContent')
    const model_ammo = await attachment7.jsonValue()

    const [underbarrel] = await page.$x('//*[@id="mw-content-text"]/div/ul[9]')
    const attachment8 = await underbarrel.getProperty('textContent')
    const model_underbarrel = await attachment8.jsonValue()

    console.log(model_muzzle.split("\n"), model_barrel.split("\n"), model_laser.split("\n"), model_optic.split("\n"), model_stock.split("\n"), model_grip.split("\n"), model_ammo.split("\n"), model_underbarrel.split("\n"))
    process.exit()

}

scrapeModel('https://callofduty.fandom.com/wiki/Remington_870_MCS#Call_of_Duty:_Modern_Warfare')

