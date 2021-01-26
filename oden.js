const puppeteer = require('puppeteer')

async function scrapeOden(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    
    

    const [muzzles] = await page.$x('//*[@id="mw-content-text"]/div/ul[1]')
    const attachment1 = await muzzles.getProperty('textContent')
    const oden_muzzle = await attachment1.jsonValue()

    const [barrels] = await page.$x('//*[@id="mw-content-text"]/div/ul[2]')
    const attachment2 = await barrels.getProperty('textContent')
    const oden_barrel = await attachment2.jsonValue()

    const [lasers] = await page.$x('//*[@id="mw-content-text"]/div/ul[3]')
    const attachment3 = await lasers.getProperty('textContent')
    const oden_laser = await attachment3.jsonValue()

    const [optic] = await page.$x('//*[@id="mw-content-text"]/div/ul[4]')
    const attachment4 = await optic.getProperty('textContent')
    const oden_optic = await attachment4.jsonValue()

    const [stock] = await page.$x('//*[@id="mw-content-text"]/div/ul[5]')
    const attachment5 = await stock.getProperty('textContent')
    const oden_stock = await attachment5.jsonValue()

    const [grip] = await page.$x('//*[@id="mw-content-text"]/div/ul[6]')
    const attachment6 = await grip.getProperty('textContent')
    const oden_grip = await attachment6.jsonValue()

    const [ammo] = await page.$x('//*[@id="mw-content-text"]/div/ul[7]')
    const attachment7 = await ammo.getProperty('textContent')
    const oden_ammo = await attachment7.jsonValue()

    const [underbarrel] = await page.$x('//*[@id="mw-content-text"]/div/ul[8]')
    const attachment8 = await underbarrel.getProperty('textContent')
    const oden_underbarrel = await attachment8.jsonValue()

    console.log(oden_muzzle.split("\n"), oden_barrel.split("\n"), oden_laser.split("\n"), oden_optic.split("\n"), oden_stock.split("\n"), oden_grip.split("\n"), oden_ammo.split("\n"), oden_underbarrel.split("\n"))
    process.exit()

}

scrapeOden('https://callofduty.fandom.com/wiki/Oden#Attachments')
