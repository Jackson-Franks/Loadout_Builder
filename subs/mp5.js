const puppeteer = require('puppeteer')

async function scrapeMp5(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    
    

    const [muzzles] = await page.$x('//*[@id="mw-content-text"]/div/ul[18]')
    const attachment1 = await muzzles.getProperty('textContent')
    const mp5_muzzle = await attachment1.jsonValue()

    const [barrels] = await page.$x('//*[@id="mw-content-text"]/div/ul[19]')
    const attachment2 = await barrels.getProperty('textContent')
    const mp5_barrel = await attachment2.jsonValue()

    const [lasers] = await page.$x('//*[@id="mw-content-text"]/div/ul[20]')
    const attachment3 = await lasers.getProperty('textContent')
    const mp5_laser = await attachment3.jsonValue()

    const [optic] = await page.$x('//*[@id="mw-content-text"]/div/ul[21]')
    const attachment4 = await optic.getProperty('textContent')
    const mp5_optic = await attachment4.jsonValue()

    const [stock] = await page.$x('//*[@id="mw-content-text"]/div/ul[22]')
    const attachment5 = await stock.getProperty('textContent')
    const mp5_stock = await attachment5.jsonValue()

    const [grip] = await page.$x('//*[@id="mw-content-text"]/div/ul[23]')
    const attachment6 = await grip.getProperty('textContent')
    const mp5_grip = await attachment6.jsonValue()

    const [ammo] = await page.$x('//*[@id="mw-content-text"]/div/ul[24]')
    const attachment7 = await ammo.getProperty('textContent')
    const mp5_ammo = await attachment7.jsonValue()

    const [underbarrel] = await page.$x('//*[@id="mw-content-text"]/div/ul[25]')
    const attachment8 = await underbarrel.getProperty('textContent')
    const mp5_underbarrel = await attachment8.jsonValue()

    console.log(mp5_muzzle.split("\n"), mp5_barrel.split("\n"), mp5_laser.split("\n"), mp5_optic.split("\n"), mp5_stock.split("\n"), mp5_grip.split("\n"), mp5_ammo.split("\n"), mp5_underbarrel.split("\n"))
    process.exit()

}

scrapeMp5('https://callofduty.fandom.com/wiki/MP5#Attachments_5')



