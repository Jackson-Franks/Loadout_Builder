const puppeteer = require('puppeteer')

async function scrapeMp7(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    
    

    const [muzzles] = await page.$x('//*[@id="mw-content-text"]/div/ul[15]')
    const attachment1 = await muzzles.getProperty('textContent')
    const mp7_muzzle = await attachment1.jsonValue()

    const [barrels] = await page.$x('//*[@id="mw-content-text"]/div/ul[16]')
    const attachment2 = await barrels.getProperty('textContent')
    const mp7_barrel = await attachment2.jsonValue()

    const [lasers] = await page.$x('//*[@id="mw-content-text"]/div/ul[17]')
    const attachment3 = await lasers.getProperty('textContent')
    const mp7_laser = await attachment3.jsonValue()

    const [optic] = await page.$x('//*[@id="mw-content-text"]/div/ul[18]')
    const attachment4 = await optic.getProperty('textContent')
    const mp7_optic = await attachment4.jsonValue()

    const [stock] = await page.$x('//*[@id="mw-content-text"]/div/ul[19]')
    const attachment5 = await stock.getProperty('textContent')
    const mp7_stock = await attachment5.jsonValue()

    const [grip] = await page.$x('//*[@id="mw-content-text"]/div/ul[20]')
    const attachment6 = await grip.getProperty('textContent')
    const mp7_grip = await attachment6.jsonValue()

    const [ammo] = await page.$x('//*[@id="mw-content-text"]/div/ul[21]')
    const attachment7 = await ammo.getProperty('textContent')
    const mp7_ammo = await attachment7.jsonValue()

    const [underbarrel] = await page.$x('//*[@id="mw-content-text"]/div/ul[22]')
    const attachment8 = await underbarrel.getProperty('textContent')
    const mp7_underbarrel = await attachment8.jsonValue()

    console.log(mp7_muzzle.split("\n"), mp7_barrel.split("\n"), mp7_laser.split("\n"), mp7_optic.split("\n"), mp7_stock.split("\n"), mp7_grip.split("\n"), mp7_ammo.split("\n"), mp7_underbarrel.split("\n"))
    process.exit()

}

scrapeMp7('https://callofduty.fandom.com/wiki/MP7#Attachments_5')
