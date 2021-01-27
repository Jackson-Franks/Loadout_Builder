const puppeteer = require('puppeteer')

async function scrapePkm(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    
    

    const [muzzles] = await page.$x('/html/body/div[3]/div[7]/div/div[1]/article/div/div[1]/div[1]/div/ul[2]')
    const attachment1 = await muzzles.getProperty('textContent')
    const pkm_muzzle = await attachment1.jsonValue()

    const [barrels] = await page.$x('/html/body/div[3]/div[7]/div/div[1]/article/div/div[1]/div[1]/div/ul[3]')
    const attachment2 = await barrels.getProperty('textContent')
    const pkm_barrel = await attachment2.jsonValue()

    const [lasers] = await page.$x('/html/body/div[3]/div[7]/div/div[1]/article/div/div[1]/div[1]/div/ul[4]')
    const attachment3 = await lasers.getProperty('textContent')
    const pkm_laser = await attachment3.jsonValue()

    const [optic] = await page.$x('/html/body/div[3]/div[7]/div/div[1]/article/div/div[1]/div[1]/div/ul[5]')
    const attachment4 = await optic.getProperty('textContent')
    const pkm_optic = await attachment4.jsonValue()

    const [stock] = await page.$x('/html/body/div[3]/div[7]/div/div[1]/article/div/div[1]/div[1]/div/ul[6]')
    const attachment5 = await stock.getProperty('textContent')
    const pkm_stock = await attachment5.jsonValue()

    const [grip] = await page.$x('/html/body/div[3]/div[7]/div/div[1]/article/div/div[1]/div[1]/div/ul[7]')
    const attachment6 = await grip.getProperty('textContent')
    const pkm_grip = await attachment6.jsonValue()

    const [ammo] = await page.$x('/html/body/div[3]/div[7]/div/div[1]/article/div/div[1]/div[1]/div/ul[8]')
    const attachment7 = await ammo.getProperty('textContent')
    const pkm_ammo = await attachment7.jsonValue()

    const [underbarrel] = await page.$x('/html/body/div[3]/div[7]/div/div[1]/article/div/div[1]/div[1]/div/ul[9]')
    const attachment8 = await underbarrel.getProperty('textContent')
    const pkm_underbarrel = await attachment8.jsonValue()

    console.log(pkm_muzzle.split("\n"), pkm_barrel.split("\n"), pkm_laser.split("\n"), pkm_optic.split("\n"), pkm_stock.split("\n"), pkm_grip.split("\n"), pkm_ammo.split("\n"), pkm_underbarrel.split("\n"))
    process.exit()

}

scrapePkm('https://callofduty.fandom.com/wiki/PKM')




