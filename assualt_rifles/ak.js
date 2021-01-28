const puppeteer = require('puppeteer')
const db = require('../models')


async function scrapeAk(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    
    

    // const [muzzles] = await page.$x('//*[@id="mw-content-text"]/div/ul[22]')
    // const attachment1 = await muzzles.getProperty('textContent')
    // const ak_muzzle = await attachment1.jsonValue()

    // const [barrels] = await page.$x('//*[@id="mw-content-text"]/div/ul[23]')
    // const attachment2 = await barrels.getProperty('textContent')
    // const ak_barrel = await attachment2.jsonValue()

    // const [lasers] = await page.$x('//*[@id="mw-content-text"]/div/ul[24]')
    // const attachment3 = await lasers.getProperty('textContent')
    // const ak_laser = await attachment3.jsonValue()

    // const [optic] = await page.$x('//*[@id="mw-content-text"]/div/ul[25]')
    // const attachment4 = await optic.getProperty('textContent')
    // const ak_optic = await attachment4.jsonValue()

    // const [stock] = await page.$x('//*[@id="mw-content-text"]/div/ul[26]')
    // const attachment5 = await stock.getProperty('textContent')
    // const ak_stock = await attachment5.jsonValue()

    // const [grip] = await page.$x('//*[@id="mw-content-text"]/div/ul[27]')
    // const attachment6 = await grip.getProperty('textContent')
    // const ak_grip = await attachment6.jsonValue()

    // const [ammo] = await page.$x('//*[@id="mw-content-text"]/div/ul[28]')
    // const attachment7 = await ammo.getProperty('textContent')
    // const ak_ammo = await attachment7.jsonValue()

    const [underbarrel] = await page.$x('//*[@id="mw-content-text"]/div/ul[29]')
    const attachment8 = await underbarrel.getProperty('textContent')
    const ak_underbarrel = await attachment8.jsonValue()

    // console.log(ak_muzzle.split("\n"), ak_barrel.split("\n"), ak_laser.split("\n"), ak_optic.split("\n"), ak_stock.split("\n"), ak_grip.split("\n"), ak_ammo.split("\n"), ak_underbarrel.split("\n"))
    // process.exit()

    
    // ak_muzzle.split("\n").forEach(muzzle => {
    //     db.attachments.findOrCreate({
    //         where: {name: muzzle, type: "Muzzle"}
    //     }).then(([muzzle, wasCreated]) => {
    //         console.log(muzzle)
    //         process.exit()
    //     })
        
    // })

    // ak_barrel.split("\n").forEach(barrel => {
    //     db.attachments.findOrCreate({
    //         where: {name: barrel, type: "Barrel"}
    //     }).then(([barrel, wasCreated]) => {
    //         console.log(barrel)
            
    //     })
        
    // })

    // ak_laser.split("\n").forEach(laser => {
    //     db.attachments.findOrCreate({
    //         where: {name: laser, type: "Laser"}
    //     }).then(([laser, wasCreated]) => {
    //         console.log(laser)
            
    //     })
        
    // })

    // ak_optic.split("\n").forEach(optic => {
    //     db.attachments.findOrCreate({
    //         where: {name: optic, type: "Optic"}
    //     }).then(([optic, wasCreated]) => {
    //         console.log(optic)
            
    //     })
        
    // })

    // ak_stock.split("\n").forEach(stock => {
    //     db.attachments.findOrCreate({
    //         where: {name: stock, type: "Stock"}
    //     }).then(([stock, wasCreated]) => {
    //         console.log(stock)
            
    //     })
        
    // })

    // ak_grip.split("\n").forEach(grip => {
    //     db.attachments.findOrCreate({
    //         where: {name: grip, type: "Grip"}
    //     }).then(([grip, wasCreated]) => {
    //         console.log(grip)
            
    //     })
        
    // })

    // ak_ammo.split("\n").forEach(ammo => {
    //     db.attachments.findOrCreate({
    //         where: {name: ammo, type: "Ammunition"}
    //     }).then(([ammo, wasCreated]) => {
    //         console.log(ammo)
            
    //     })
        
    // })

    ak_underbarrel.split("\n").forEach(underbarrel => {
        db.attachments.findOrCreate({
            where: {name: underbarrel, type: "Underbarrel"}
        }).then(([underbarrel, wasCreated]) => {
            console.log(underbarrel)
            
        })
        
    })

}

scrapeAk('https://callofduty.fandom.com/wiki/AK-47#Attachments_7')
