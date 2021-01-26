const puppeteer = require('puppeteer')

async function scrapeIso(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    
    

    const [muzzles] = await page.$x('//*[@id="mw-content-text"]/div/ul[1]')
    const attachment1 = await muzzles.getProperty('textContent')
    const iso_muzzle = await attachment1.jsonValue()

    const [barrels] = await page.$x('//*[@id="mw-content-text"]/div/ul[2]')
    const attachment2 = await barrels.getProperty('textContent')
    const iso_barrel = await attachment2.jsonValue()

    const [lasers] = await page.$x('//*[@id="mw-content-text"]/div/ul[3]')
    const attachment3 = await lasers.getProperty('textContent')
    const iso_laser = await attachment3.jsonValue()

    const [optic] = await page.$x('//*[@id="mw-content-text"]/div/ul[4]')
    const attachment4 = await optic.getProperty('textContent')
    const iso_optic = await attachment4.jsonValue()

    const [stock] = await page.$x('//*[@id="mw-content-text"]/div/ul[5]')
    const attachment5 = await stock.getProperty('textContent')
    const iso_stock = await attachment5.jsonValue()

    const [grip] = await page.$x('//*[@id="mw-content-text"]/div/ul[6]')
    const attachment6 = await grip.getProperty('textContent')
    const iso_grip = await attachment6.jsonValue()

    const [ammo] = await page.$x('//*[@id="mw-content-text"]/div/ul[7]')
    const attachment7 = await ammo.getProperty('textContent')
    const iso_ammo = await attachment7.jsonValue()

    const [underbarrel] = await page.$x('//*[@id="mw-content-text"]/div/ul[8]')
    const attachment8 = await underbarrel.getProperty('textContent')
    const iso_underbarrel = await attachment8.jsonValue()

    console.log(iso_muzzle.split("\n"), iso_barrel.split("\n"), iso_laser.split("\n"), iso_optic.split("\n"), iso_stock.split("\n"), iso_grip.split("\n"), iso_ammo.split("\n"), iso_underbarrel.split("\n"))
    process.exit()

}

scrapeIso('https://callofduty.fandom.com/wiki/ISO')