const puppeteer = require('puppeteer')

async function scrapeBow(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    
    

    const [muzzles] = await page.$x('//*[@id="mw-content-text"]/div/ul[8]')
    const attachment1 = await muzzles.getProperty('textContent')
    const bow_muzzle = await attachment1.jsonValue()

    const [barrels] = await page.$x('//*[@id="mw-content-text"]/div/ul[9]')
    const attachment2 = await barrels.getProperty('textContent')
    const bow_barrel = await attachment2.jsonValue()

    const [lasers] = await page.$x('//*[@id="mw-content-text"]/div/ul[10]')
    const attachment3 = await lasers.getProperty('textContent')
    const bow_laser = await attachment3.jsonValue()

    const [optic] = await page.$x('//*[@id="mw-content-text"]/div/ul[11]')
    const attachment4 = await optic.getProperty('textContent')
    const bow_optic = await attachment4.jsonValue()

    const [stock] = await page.$x('//*[@id="mw-content-text"]/div/ul[12]')
    const attachment5 = await stock.getProperty('textContent')
    const bow_stock = await attachment5.jsonValue()

    const [grip] = await page.$x('//*[@id="mw-content-text"]/div/ul[13]')
    const attachment6 = await grip.getProperty('textContent')
    const bow_grip = await attachment6.jsonValue()

    const [ammo] = await page.$x('//*[@id="mw-content-text"]/div/ul[14]')
    const attachment7 = await ammo.getProperty('textContent')
    const bow_ammo = await attachment7.jsonValue()

    const [underbarrel] = await page.$x('//*[@id="mw-content-text"]/div/ul[15]')
    const attachment8 = await underbarrel.getProperty('textContent')
    const bow_underbarrel = await attachment8.jsonValue()

    console.log(bow_muzzle.split("\n"), bow_barrel.split("\n"), bow_laser.split("\n"), bow_optic.split("\n"), bow_stock.split("\n"), bow_grip.split("\n"), bow_ammo.split("\n"), bow_underbarrel.split("\n"))
    process.exit()

}

scrapeBow('https://callofduty.fandom.com/wiki/Crossbow#Attachments_6')