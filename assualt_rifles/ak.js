const puppeteer = require('puppeteer')


async function scrapeAk(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    
    

    const [muzzles] = await page.$x('//*[@id="mw-content-text"]/div/ul[22]')
    const attachment1 = await muzzles.getProperty('textContent')
    const ak_muzzle = await attachment1.jsonValue()

    const [barrels] = await page.$x('//*[@id="mw-content-text"]/div/ul[23]')
    const attachment2 = await barrels.getProperty('textContent')
    const ak_barrel = await attachment2.jsonValue()

    const [lasers] = await page.$x('//*[@id="mw-content-text"]/div/ul[24]')
    const attachment3 = await lasers.getProperty('textContent')
    const ak_laser = await attachment3.jsonValue()

    const [optic] = await page.$x('//*[@id="mw-content-text"]/div/ul[25]')
    const attachment4 = await optic.getProperty('textContent')
    const ak_optic = await attachment4.jsonValue()

    const [stock] = await page.$x('//*[@id="mw-content-text"]/div/ul[26]')
    const attachment5 = await stock.getProperty('textContent')
    const ak_stock = await attachment5.jsonValue()

    const [grip] = await page.$x('//*[@id="mw-content-text"]/div/ul[27]')
    const attachment6 = await grip.getProperty('textContent')
    const ak_grip = await attachment6.jsonValue()

    const [ammo] = await page.$x('//*[@id="mw-content-text"]/div/ul[28]')
    const attachment7 = await ammo.getProperty('textContent')
    const ak_ammo = await attachment7.jsonValue()

    const [underbarrel] = await page.$x('//*[@id="mw-content-text"]/div/ul[29]')
    const attachment8 = await underbarrel.getProperty('textContent')
    const ak_underbarrel = await attachment8.jsonValue()

    console.log(ak_muzzle.split("\n"), ak_barrel.split("\n"), ak_laser.split("\n"), ak_optic.split("\n"), ak_stock.split("\n"), ak_grip.split("\n"), ak_ammo.split("\n"), ak_underbarrel.split("\n"))
    process.exit()

}

scrapeAk('https://callofduty.fandom.com/wiki/AK-47#Attachments_7')
