const puppeteer = require('puppeteer')
const db = require('../models')

async function scrapeFamas(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    
    

    // const [muzzles] = await page.$x('//*[@id="mw-content-text"]/div/ul[7]')
    // const attachment1 = await muzzles.getProperty('textContent')
    // const famas_muzzle = await attachment1.jsonValue()

    // const [barrels] = await page.$x('//*[@id="mw-content-text"]/div/ul[8]')
    // const attachment2 = await barrels.getProperty('textContent')
    // const famas_barrel = await attachment2.jsonValue()

    // const [lasers] = await page.$x('//*[@id="mw-content-text"]/div/ul[9]')
    // const attachment3 = await lasers.getProperty('textContent')
    // const famas_laser = await attachment3.jsonValue()

    // const [optic] = await page.$x('//*[@id="mw-content-text"]/div/ul[10]')
    // const attachment4 = await optic.getProperty('textContent')
    // const famas_optic = await attachment4.jsonValue()

    // const [stock] = await page.$x('//*[@id="mw-content-text"]/div/ul[11]')
    // const attachment5 = await stock.getProperty('textContent')
    // const famas_stock = await attachment5.jsonValue()

    // const [grip] = await page.$x('//*[@id="mw-content-text"]/div/ul[12]')
    // const attachment6 = await grip.getProperty('textContent')
    // const famas_grip = await attachment6.jsonValue()

    // const [ammo] = await page.$x('//*[@id="mw-content-text"]/div/ul[13]')
    // const attachment7 = await ammo.getProperty('textContent')
    // const famas_ammo = await attachment7.jsonValue()

    const [underbarrel] = await page.$x('//*[@id="mw-content-text"]/div/ul[14]')
    const attachment8 = await underbarrel.getProperty('textContent')
    const famas_underbarrel = await attachment8.jsonValue()

  

    // console.log(famas_muzzle.split("\n"), famas_barrel.split("\n"), famas_laser.split("\n"), famas_optic.split("\n"), famas_stock.split("\n"), famas_grip.split("\n"), famas_ammo.split("\n"), famas_underbarrel.split("\n"))
    // process.exit()

    // famas_muzzle.split("\n").forEach(muzzle => {
    //     db.attachments.findOrCreate({
    //         where: {name: muzzle, type: "Muzzle"}
    //     }).then(([muzzle, wasCreated]) => {
    //         console.log(muzzle)
    //         process.exit()
    //     })
        
    // })

    // famas_barrel.split("\n").forEach(barrel => {
    //     db.attachments.findOrCreate({
    //         where: {name: barrel, type: "Barrel"}
    //     }).then(([barrel, wasCreated]) => {
    //         console.log(barrel)
            
    //     })
        
    // })

    // famas_laser.split("\n").forEach(laser => {
    //     db.attachments.findOrCreate({
    //         where: {name: laser, type: "Laser"}
    //     }).then(([laser, wasCreated]) => {
    //         console.log(laser)
            
    //     })
        
    // })

    // famas_optic.split("\n").forEach(optic => {
    //     db.attachments.findOrCreate({
    //         where: {name: optic, type: "Optic"}
    //     }).then(([optic, wasCreated]) => {
    //         console.log(optic)
            
    //     })
        
    // })

    // famas_stock.split("\n").forEach(stock => {
    //     db.attachments.findOrCreate({
    //         where: {name: stock, type: "Stock"}
    //     }).then(([stock, wasCreated]) => {
    //         console.log(stock)
            
    //     })
        
    // })

    // famas_grip.split("\n").forEach(grip => {
    //     db.attachments.findOrCreate({
    //         where: {name: grip, type: "Grip"}
    //     }).then(([grip, wasCreated]) => {
    //         console.log(grip)
            
    //     })
        
    // })

    // famas_ammo.split("\n").forEach(ammo => {
    //     db.attachments.findOrCreate({
    //         where: {name: ammo, type: "Ammunition"}
    //     }).then(([ammo, wasCreated]) => {
    //         console.log(ammo)
            
    //     })
        
    // })

    famas_underbarrel.split("\n").forEach(underbarrel => {
        db.attachments.findOrCreate({
            where: {name: underbarrel, type: "Underbarrel"}
        }).then(([underbarrel, wasCreated]) => {
            console.log(underbarrel)
            
        })
        
    })
}

scrapeFamas('https://callofduty.fandom.com/wiki/FAMAS#Attachments_5')


