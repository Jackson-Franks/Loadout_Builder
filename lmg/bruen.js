const puppeteer = require('puppeteer')

async function scrapeBruen(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    
    

    const [muzzles] = await page.$x('//*[@id="mw-content-text"]/div/ul[3]')
    const attachment1 = await muzzles.getProperty('textContent')
    const bruen_muzzle = await attachment1.jsonValue()

    const [barrels] = await page.$x('//*[@id="mw-content-text"]/div/ul[4]')
    const attachment2 = await barrels.getProperty('textContent')
    const bruen_barrel = await attachment2.jsonValue()

    const [lasers] = await page.$x('//*[@id="mw-content-text"]/div/ul[5]')
    const attachment3 = await lasers.getProperty('textContent')
    const bruen_laser = await attachment3.jsonValue()

    const [optic] = await page.$x('//*[@id="mw-content-text"]/div/ul[6]')
    const attachment4 = await optic.getProperty('textContent')
    const bruen_optic = await attachment4.jsonValue()

    const [stock] = await page.$x('//*[@id="mw-content-text"]/div/ul[7]')
    const attachment5 = await stock.getProperty('textContent')
    const bruen_stock = await attachment5.jsonValue()

    const [grip] = await page.$x('//*[@id="mw-content-text"]/div/ul[8]')
    const attachment6 = await grip.getProperty('textContent')
    const bruen_grip = await attachment6.jsonValue()

    const [ammo] = await page.$x('//*[@id="mw-content-text"]/div/ul[9]')
    const attachment7 = await ammo.getProperty('textContent')
    const bruen_ammo = await attachment7.jsonValue()

    const [underbarrel] = await page.$x('//*[@id="mw-content-text"]/div/ul[10]')
    const attachment8 = await underbarrel.getProperty('textContent')
    const bruen_underbarrel = await attachment8.jsonValue()

    console.log(bruen_muzzle.split("\n"), bruen_barrel.split("\n"), bruen_laser.split("\n"), bruen_optic.split("\n"), bruen_stock.split("\n"), bruen_grip.split("\n"), bruen_ammo.split("\n"), bruen_underbarrel.split("\n"))
    process.exit()

}

scrapeBruen('https://callofduty.fandom.com/wiki/M249_SAW')
