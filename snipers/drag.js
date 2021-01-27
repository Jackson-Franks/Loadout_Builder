const puppeteer = require('puppeteer')

async function scrapeDrag(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    
    

    const [muzzles] = await page.$x('//*[@id="mw-content-text"]/div/ul[10]')
    const attachment1 = await muzzles.getProperty('textContent')
    const drag_muzzle = await attachment1.jsonValue()

    const [barrels] = await page.$x('//*[@id="mw-content-text"]/div/ul[11]')
    const attachment2 = await barrels.getProperty('textContent')
    const drag_barrel = await attachment2.jsonValue()

    const [lasers] = await page.$x('//*[@id="mw-content-text"]/div/ul[12]')
    const attachment3 = await lasers.getProperty('textContent')
    const drag_laser = await attachment3.jsonValue()

    const [optic] = await page.$x('//*[@id="mw-content-text"]/div/ul[13]')
    const attachment4 = await optic.getProperty('textContent')
    const drag_optic = await attachment4.jsonValue()

    const [stock] = await page.$x('//*[@id="mw-content-text"]/div/ul[14]')
    const attachment5 = await stock.getProperty('textContent')
    const drag_stock = await attachment5.jsonValue()

    const [grip] = await page.$x('//*[@id="mw-content-text"]/div/ul[15]')
    const attachment6 = await grip.getProperty('textContent')
    const drag_grip = await attachment6.jsonValue()

    const [ammo] = await page.$x('//*[@id="mw-content-text"]/div/ul[16]')
    const attachment7 = await ammo.getProperty('textContent')
    const drag_ammo = await attachment7.jsonValue()

    const [underbarrel] = await page.$x('//*[@id="mw-content-text"]/div/ul[17]')
    const attachment8 = await underbarrel.getProperty('textContent')
    const drag_underbarrel = await attachment8.jsonValue()

    console.log(drag_muzzle.split("\n"), drag_barrel.split("\n"), drag_laser.split("\n"), drag_optic.split("\n"), drag_stock.split("\n"), drag_grip.split("\n"), drag_ammo.split("\n"), drag_underbarrel.split("\n"))
    process.exit()

}

scrapeDrag('https://callofduty.fandom.com/wiki/Dragunov#Attachments_7')
