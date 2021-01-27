const puppeteer = require('puppeteer')

async function scrapeEbr(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    
    

    const [muzzles] = await page.$x('//*[@id="mw-content-text"]/div/ul[16]')
    const attachment1 = await muzzles.getProperty('textContent')
    const ebr_muzzle = await attachment1.jsonValue()

    const [barrels] = await page.$x('//*[@id="mw-content-text"]/div/ul[17]')
    const attachment2 = await barrels.getProperty('textContent')
    const ebr_barrel = await attachment2.jsonValue()

    const [lasers] = await page.$x('//*[@id="mw-content-text"]/div/ul[18]')
    const attachment3 = await lasers.getProperty('textContent')
    const ebr_laser = await attachment3.jsonValue()

    const [optic] = await page.$x('//*[@id="mw-content-text"]/div/ul[19]')
    const attachment4 = await optic.getProperty('textContent')
    const ebr_optic = await attachment4.jsonValue()

    const [stock] = await page.$x('//*[@id="mw-content-text"]/div/ul[20]')
    const attachment5 = await stock.getProperty('textContent')
    const ebr_stock = await attachment5.jsonValue()

    const [grip] = await page.$x('//*[@id="mw-content-text"]/div/ul[21]')
    const attachment6 = await grip.getProperty('textContent')
    const ebr_grip = await attachment6.jsonValue()

    const [ammo] = await page.$x('//*[@id="mw-content-text"]/div/ul[22]')
    const attachment7 = await ammo.getProperty('textContent')
    const ebr_ammo = await attachment7.jsonValue()

    const [underbarrel] = await page.$x('//*[@id="mw-content-text"]/div/ul[23]')
    const attachment8 = await underbarrel.getProperty('textContent')
    const ebr_underbarrel = await attachment8.jsonValue()

    console.log(ebr_muzzle.split("\n"), ebr_barrel.split("\n"), ebr_laser.split("\n"), ebr_optic.split("\n"), ebr_stock.split("\n"), ebr_grip.split("\n"), ebr_ammo.split("\n"), ebr_underbarrel.split("\n"))
    process.exit()

}

scrapeEbr('https://callofduty.fandom.com/wiki/M14_EBR#Attachments_5')
