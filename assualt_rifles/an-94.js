const puppeteer = require('puppeteer')

async function scrapeAn(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    
    

    const [muzzles] = await page.$x('//*[@id="mw-content-text"]/div/ul[19]')
    const attachment1 = await muzzles.getProperty('textContent')
    const an_muzzle = await attachment1.jsonValue()

    const [barrels] = await page.$x('//*[@id="mw-content-text"]/div/ul[20]')
    const attachment2 = await barrels.getProperty('textContent')
    const an_barrel = await attachment2.jsonValue()

    const [lasers] = await page.$x('//*[@id="mw-content-text"]/div/ul[21]')
    const attachment3 = await lasers.getProperty('textContent')
    const an_laser = await attachment3.jsonValue()

    const [optic] = await page.$x('//*[@id="mw-content-text"]/div/ul[22]')
    const attachment4 = await optic.getProperty('textContent')
    const an_optic = await attachment4.jsonValue()

    const [stock] = await page.$x('//*[@id="mw-content-text"]/div/ul[23]')
    const attachment5 = await stock.getProperty('textContent')
    const an_stock = await attachment5.jsonValue()

    const [grip] = await page.$x('//*[@id="mw-content-text"]/div/ul[24]')
    const attachment6 = await grip.getProperty('textContent')
    const an_grip = await attachment6.jsonValue()

    const [ammo] = await page.$x('//*[@id="mw-content-text"]/div/ul[25]')
    const attachment7 = await ammo.getProperty('textContent')
    const an_ammo = await attachment7.jsonValue()

    const [underbarrel] = await page.$x('//*[@id="mw-content-text"]/div/ul[26]')
    const attachment8 = await underbarrel.getProperty('textContent')
    const an_underbarrel = await attachment8.jsonValue()

    console.log(an_muzzle.split("\n"), an_barrel.split("\n"), an_laser.split("\n"), an_optic.split("\n"), an_stock.split("\n"), an_grip.split("\n"), an_ammo.split("\n"), an_underbarrel.split("\n"))
    process.exit()

}

scrapeAn('https://callofduty.fandom.com/wiki/AN-94#Call_of_Duty:_Modern_Warfare')

