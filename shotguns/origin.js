const puppeteer = require('puppeteer')

async function scrapeOrigin(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    
    

    const [muzzles] = await page.$x('//*[@id="mw-content-text"]/div/ul[12]')
    const attachment1 = await muzzles.getProperty('textContent')
    const origin_muzzle = await attachment1.jsonValue()

    const [barrels] = await page.$x('//*[@id="mw-content-text"]/div/ul[13]')
    const attachment2 = await barrels.getProperty('textContent')
    const origin_barrel = await attachment2.jsonValue()

    const [lasers] = await page.$x('//*[@id="mw-content-text"]/div/ul[14]')
    const attachment3 = await lasers.getProperty('textContent')
    const origin_laser = await attachment3.jsonValue()

    const [optic] = await page.$x('//*[@id="mw-content-text"]/div/ul[15]')
    const attachment4 = await optic.getProperty('textContent')
    const origin_optic = await attachment4.jsonValue()

    const [stock] = await page.$x('//*[@id="mw-content-text"]/div/ul[16]')
    const attachment5 = await stock.getProperty('textContent')
    const origin_stock = await attachment5.jsonValue()

    const [grip] = await page.$x('//*[@id="mw-content-text"]/div/ul[17]')
    const attachment6 = await grip.getProperty('textContent')
    const origin_grip = await attachment6.jsonValue()

    const [ammo] = await page.$x('//*[@id="mw-content-text"]/div/ul[18]')
    const attachment7 = await ammo.getProperty('textContent')
    const origin_ammo = await attachment7.jsonValue()

    const [underbarrel] = await page.$x('//*[@id="mw-content-text"]/div/ul[19]')
    const attachment8 = await underbarrel.getProperty('textContent')
    const origin_underbarrel = await attachment8.jsonValue()

    console.log(origin_muzzle.split("\n"), origin_barrel.split("\n"), origin_laser.split("\n"), origin_optic.split("\n"), origin_stock.split("\n"), origin_grip.split("\n"), origin_ammo.split("\n"), origin_underbarrel.split("\n"))
    process.exit()

}

scrapeOrigin('https://callofduty.fandom.com/wiki/Origin_12_Shotgun#Attachments_2')