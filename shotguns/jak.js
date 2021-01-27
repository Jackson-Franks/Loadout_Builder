const puppeteer = require('puppeteer')

async function scrapeJak(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    
    

    const [muzzles] = await page.$x('//*[@id="mw-content-text"]/div/ul[5]')
    const attachment1 = await muzzles.getProperty('textContent')
    const jak_muzzle = await attachment1.jsonValue()

    const [barrels] = await page.$x('//*[@id="mw-content-text"]/div/ul[6]')
    const attachment2 = await barrels.getProperty('textContent')
    const jak_barrel = await attachment2.jsonValue()

    const [lasers] = await page.$x('//*[@id="mw-content-text"]/div/ul[7]')
    const attachment3 = await lasers.getProperty('textContent')
    const jak_laser = await attachment3.jsonValue()

    const [optic] = await page.$x('//*[@id="mw-content-text"]/div/ul[8]')
    const attachment4 = await optic.getProperty('textContent')
    const jak_optic = await attachment4.jsonValue()

    const [stock] = await page.$x('//*[@id="mw-content-text"]/div/ul[9]')
    const attachment5 = await stock.getProperty('textContent')
    const jak_stock = await attachment5.jsonValue()

    const [grip] = await page.$x('//*[@id="mw-content-text"]/div/ul[10]')
    const attachment6 = await grip.getProperty('textContent')
    const jak_grip = await attachment6.jsonValue()

    const [ammo] = await page.$x('//*[@id="mw-content-text"]/div/ul[11]')
    const attachment7 = await ammo.getProperty('textContent')
    const jak_ammo = await attachment7.jsonValue()

    const [underbarrel] = await page.$x('//*[@id="mw-content-text"]/div/ul[12]')
    const attachment8 = await underbarrel.getProperty('textContent')
    const jak_underbarrel = await attachment8.jsonValue()

    console.log(jak_muzzle.split("\n"), jak_barrel.split("\n"), jak_laser.split("\n"), jak_optic.split("\n"), jak_stock.split("\n"), jak_grip.split("\n"), jak_ammo.split("\n"), jak_underbarrel.split("\n"))
    process.exit()

}

scrapeJak('https://callofduty.fandom.com/wiki/AA-12')
