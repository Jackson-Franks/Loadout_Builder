const puppeteer = require('puppeteer')

async function scrapeP90(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    
    

    const [muzzles] = await page.$x('//*[@id="mw-content-text"]/div/ul[7]')
    const attachment1 = await muzzles.getProperty('textContent')
    const p90_muzzle = await attachment1.jsonValue()

    const [barrels] = await page.$x('//*[@id="mw-content-text"]/div/ul[8]')
    const attachment2 = await barrels.getProperty('textContent')
    const p90_barrel = await attachment2.jsonValue()

    const [lasers] = await page.$x('//*[@id="mw-content-text"]/div/ul[9]')
    const attachment3 = await lasers.getProperty('textContent')
    const p90_laser = await attachment3.jsonValue()

    const [optic] = await page.$x('//*[@id="mw-content-text"]/div/ul[10]')
    const attachment4 = await optic.getProperty('textContent')
    const p90_optic = await attachment4.jsonValue()

    const [stock] = await page.$x('//*[@id="mw-content-text"]/div/ul[11]')
    const attachment5 = await stock.getProperty('textContent')
    const p90_stock = await attachment5.jsonValue()

    const [grip] = await page.$x('//*[@id="mw-content-text"]/div/ul[12]')
    const attachment6 = await grip.getProperty('textContent')
    const p90_grip = await attachment6.jsonValue()

    const [ammo] = await page.$x('//*[@id="mw-content-text"]/div/ul[13]')
    const attachment7 = await ammo.getProperty('textContent')
    const p90_ammo = await attachment7.jsonValue()

    const [underbarrel] = await page.$x('//*[@id="mw-content-text"]/div/ul[14]')
    const attachment8 = await underbarrel.getProperty('textContent')
    const p90_underbarrel = await attachment8.jsonValue()

    console.log(p90_muzzle.split("\n"), p90_barrel.split("\n"), p90_laser.split("\n"), p90_optic.split("\n"), p90_stock.split("\n"), p90_grip.split("\n"), p90_ammo.split("\n"), p90_underbarrel.split("\n"))
    process.exit()

}

scrapeP90('https://callofduty.fandom.com/wiki/P90#Attachments_3')

