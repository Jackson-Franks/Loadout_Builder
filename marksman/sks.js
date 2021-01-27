const puppeteer = require('puppeteer')

async function scrapeSks(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    
    

    const [muzzles] = await page.$x('//*[@id="mw-content-text"]/div/ul[2]')
    const attachment1 = await muzzles.getProperty('textContent')
    const sks_muzzle = await attachment1.jsonValue()

    const [barrels] = await page.$x('//*[@id="mw-content-text"]/div/ul[3]')
    const attachment2 = await barrels.getProperty('textContent')
    const sks_barrel = await attachment2.jsonValue()

    const [lasers] = await page.$x('//*[@id="mw-content-text"]/div/ul[4]')
    const attachment3 = await lasers.getProperty('textContent')
    const sks_laser = await attachment3.jsonValue()

    const [optic] = await page.$x('//*[@id="mw-content-text"]/div/ul[5]')
    const attachment4 = await optic.getProperty('textContent')
    const sks_optic = await attachment4.jsonValue()

    const [stock] = await page.$x('//*[@id="mw-content-text"]/div/ul[6]')
    const attachment5 = await stock.getProperty('textContent')
    const sks_stock = await attachment5.jsonValue()

    const [grip] = await page.$x('//*[@id="mw-content-text"]/div/ul[7]')
    const attachment6 = await grip.getProperty('textContent')
    const sks_grip = await attachment6.jsonValue()

    const [ammo] = await page.$x('//*[@id="mw-content-text"]/div/ul[8]')
    const attachment7 = await ammo.getProperty('textContent')
    const sks_ammo = await attachment7.jsonValue()

    const [underbarrel] = await page.$x('//*[@id="mw-content-text"]/div/ul[9]')
    const attachment8 = await underbarrel.getProperty('textContent')
    const sks_underbarrel = await attachment8.jsonValue()

    console.log(sks_muzzle.split("\n"), sks_barrel.split("\n"), sks_laser.split("\n"), sks_optic.split("\n"), sks_stock.split("\n"), sks_grip.split("\n"), sks_ammo.split("\n"), sks_underbarrel.split("\n"))
    process.exit()

}

scrapeSks('https://callofduty.fandom.com/wiki/SKS#Attachments_2')
