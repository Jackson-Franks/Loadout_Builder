const puppeteer = require('puppeteer')

async function scrapeAug(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    
    

    const [muzzles] = await page.$x('//*[@id="mw-content-text"]/div/ul[14]')
    const attachment1 = await muzzles.getProperty('textContent')
    const aug_muzzle = await attachment1.jsonValue()

    const [barrels] = await page.$x('//*[@id="mw-content-text"]/div/ul[15]')
    const attachment2 = await barrels.getProperty('textContent')
    const aug_barrel = await attachment2.jsonValue()

    const [lasers] = await page.$x('//*[@id="mw-content-text"]/div/ul[16]')
    const attachment3 = await lasers.getProperty('textContent')
    const aug_laser = await attachment3.jsonValue()

    const [optic] = await page.$x('//*[@id="mw-content-text"]/div/ul[17]')
    const attachment4 = await optic.getProperty('textContent')
    const aug_optic = await attachment4.jsonValue()

    const [stock] = await page.$x('//*[@id="mw-content-text"]/div/ul[18]')
    const attachment5 = await stock.getProperty('textContent')
    const aug_stock = await attachment5.jsonValue()

    const [grip] = await page.$x('//*[@id="mw-content-text"]/div/ul[19]')
    const attachment6 = await grip.getProperty('textContent')
    const aug_grip = await attachment6.jsonValue()

    const [ammo] = await page.$x('//*[@id="mw-content-text"]/div/ul[20]')
    const attachment7 = await ammo.getProperty('textContent')
    const aug_ammo = await attachment7.jsonValue()

    const [underbarrel] = await page.$x('//*[@id="mw-content-text"]/div/ul[21]')
    const attachment8 = await underbarrel.getProperty('textContent')
    const aug_underbarrel = await attachment8.jsonValue()

    console.log(aug_muzzle.split("\n"), aug_barrel.split("\n"), aug_laser.split("\n"), aug_optic.split("\n"), aug_stock.split("\n"), aug_grip.split("\n"), aug_ammo.split("\n"), aug_underbarrel.split("\n"))
    process.exit()

}

scrapeAug('https://callofduty.fandom.com/wiki/AUG#Call_of_Duty:_Modern_Warfare')



