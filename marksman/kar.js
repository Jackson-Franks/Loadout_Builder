const puppeteer = require('puppeteer')

async function scrapeKar(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    
    

    const [muzzles] = await page.$x('//*[@id="mw-content-text"]/div/ul[13]')
    const attachment1 = await muzzles.getProperty('textContent')
    const kar_muzzle = await attachment1.jsonValue()

    const [barrels] = await page.$x('//*[@id="mw-content-text"]/div/ul[14]')
    const attachment2 = await barrels.getProperty('textContent')
    const kar_barrel = await attachment2.jsonValue()

    const [lasers] = await page.$x('//*[@id="mw-content-text"]/div/ul[15]')
    const attachment3 = await lasers.getProperty('textContent')
    const kar_laser = await attachment3.jsonValue()

    const [optic] = await page.$x('//*[@id="mw-content-text"]/div/ul[16]')
    const attachment4 = await optic.getProperty('textContent')
    const kar_optic = await attachment4.jsonValue()

    const [stock] = await page.$x('//*[@id="mw-content-text"]/div/ul[17]')
    const attachment5 = await stock.getProperty('textContent')
    const kar_stock = await attachment5.jsonValue()

    const [grip] = await page.$x('//*[@id="mw-content-text"]/div/ul[18]')
    const attachment6 = await grip.getProperty('textContent')
    const kar_grip = await attachment6.jsonValue()

    const [ammo] = await page.$x('//*[@id="mw-content-text"]/div/ul[19]')
    const attachment7 = await ammo.getProperty('textContent')
    const kar_ammo = await attachment7.jsonValue()

    const [underbarrel] = await page.$x('//*[@id="mw-content-text"]/div/ul[20]')
    const attachment8 = await underbarrel.getProperty('textContent')
    const kar_underbarrel = await attachment8.jsonValue()

    console.log(kar_muzzle.split("\n"), kar_barrel.split("\n"), kar_laser.split("\n"), kar_optic.split("\n"), kar_stock.split("\n"), kar_grip.split("\n"), kar_ammo.split("\n"), kar_underbarrel.split("\n"))
    process.exit()

}

scrapeKar('https://callofduty.fandom.com/wiki/Kar98k#Call_of_Duty:_Modern_Warfare')