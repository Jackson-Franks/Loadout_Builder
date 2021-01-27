const puppeteer = require('puppeteer')

async function scrapeSa87(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    
    

    const [muzzles] = await page.$x('//*[@id="mw-content-text"]/div/ul[16]')
    const attachment1 = await muzzles.getProperty('textContent')
    const sa87_muzzle = await attachment1.jsonValue()

    const [barrels] = await page.$x('//*[@id="mw-content-text"]/div/ul[17]')
    const attachment2 = await barrels.getProperty('textContent')
    const sa87_barrel = await attachment2.jsonValue()

    const [lasers] = await page.$x('//*[@id="mw-content-text"]/div/ul[18]')
    const attachment3 = await lasers.getProperty('textContent')
    const sa87_laser = await attachment3.jsonValue()

    const [optic] = await page.$x('//*[@id="mw-content-text"]/div/ul[19]')
    const attachment4 = await optic.getProperty('textContent')
    const sa87_optic = await attachment4.jsonValue()

    const [stock] = await page.$x('//*[@id="mw-content-text"]/div/ul[20]')
    const attachment5 = await stock.getProperty('textContent')
    const sa87_stock = await attachment5.jsonValue()

    const [grip] = await page.$x('//*[@id="mw-content-text"]/div/ul[21]')
    const attachment6 = await grip.getProperty('textContent')
    const sa87_grip = await attachment6.jsonValue()

    const [ammo] = await page.$x('//*[@id="mw-content-text"]/div/ul[22]')
    const attachment7 = await ammo.getProperty('textContent')
    const sa87_ammo = await attachment7.jsonValue()

    const [underbarrel] = await page.$x('//*[@id="mw-content-text"]/div/ul[23]')
    const attachment8 = await underbarrel.getProperty('textContent')
    const sa87_underbarrel = await attachment8.jsonValue()

    console.log(sa87_muzzle.split("\n"), sa87_barrel.split("\n"), sa87_laser.split("\n"), sa87_optic.split("\n"), sa87_stock.split("\n"), sa87_grip.split("\n"), sa87_ammo.split("\n"), sa87_underbarrel.split("\n"))
    process.exit()

}

scrapeSa87('https://callofduty.fandom.com/wiki/L86_LSW')

