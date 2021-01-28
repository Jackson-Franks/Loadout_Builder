const puppeteer = require('puppeteer')
const db = require('../models')

async function scrapeScar(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    
    

    const [muzzles] = await page.$x('//*[@id="mw-content-text"]/div/ul[15]')
    const attachment1 = await muzzles.getProperty('textContent')
    const scar_muzzle = await attachment1.jsonValue()

    const [barrels] = await page.$x('//*[@id="mw-content-text"]/div/ul[16]')
    const attachment2 = await barrels.getProperty('textContent')
    const scar_barrel = await attachment2.jsonValue()

    const [lasers] = await page.$x('//*[@id="mw-content-text"]/div/ul[17]')
    const attachment3 = await lasers.getProperty('textContent')
    const scar_laser = await attachment3.jsonValue()

    const [optic] = await page.$x('//*[@id="mw-content-text"]/div/ul[18]')
    const attachment4 = await optic.getProperty('textContent')
    const scar_optic = await attachment4.jsonValue()

    const [stock] = await page.$x('//*[@id="mw-content-text"]/div/ul[19]')
    const attachment5 = await stock.getProperty('textContent')
    const scar_stock = await attachment5.jsonValue()

    const [grip] = await page.$x('//*[@id="mw-content-text"]/div/ul[20]')
    const attachment6 = await grip.getProperty('textContent')
    const scar_grip = await attachment6.jsonValue()

    const [ammo] = await page.$x('//*[@id="mw-content-text"]/div/ul[21]')
    const attachment7 = await ammo.getProperty('textContent')
    const scar_ammo = await attachment7.jsonValue()

    const [underbarrel] = await page.$x('//*[@id="mw-content-text"]/div/ul[22]')
    const attachment8 = await underbarrel.getProperty('textContent')
    const scar_underbarrel = await attachment8.jsonValue()

    // console.log(scar_muzzle.split("\n"), scar_barrel.split("\n"), scar_laser.split("\n"), scar_optic.split("\n"), scar_stock.split("\n"), scar_grip.split("\n"), scar_ammo.split("\n"), scar_underbarrel.split("\n"))
    // process.exit()

    scar_muzzle.split("\n").forEach(muzzle => {
        db.attachments.findOrCreate({
            where: {name: muzzle, type: "Muzzle"}
        }).then(([muzzle, wasCreated]) => {
            console.log(muzzle)
            
        })
        
    })

    scar_barrel.split("\n").forEach(barrel => {
        db.attachments.findOrCreate({
            where: {name: barrel, type: "Barrel"}
        }).then(([barrel, wasCreated]) => {
            console.log(barrel)
            
        })
        
    })

    scar_laser.split("\n").forEach(laser => {
        db.attachments.findOrCreate({
            where: {name: laser, type: "Laser"}
        }).then(([laser, wasCreated]) => {
            console.log(laser)
            
        })
        
    })

    scar_optic.split("\n").forEach(optic => {
        db.attachments.findOrCreate({
            where: {name: optic, type: "Optic"}
        }).then(([optic, wasCreated]) => {
            console.log(optic)
            
        })
        
    })

    scar_stock.split("\n").forEach(stock => {
        db.attachments.findOrCreate({
            where: {name: stock, type: "Stock"}
        }).then(([stock, wasCreated]) => {
            console.log(stock)
            
        })
        
    })

    scar_grip.split("\n").forEach(grip => {
        db.attachments.findOrCreate({
            where: {name: grip, type: "Grip"}
        }).then(([grip, wasCreated]) => {
            console.log(grip)
            
        })
        
    })

    scar_ammo.split("\n").forEach(ammo => {
        db.attachments.findOrCreate({
            where: {name: ammo, type: "Ammunition"}
        }).then(([ammo, wasCreated]) => {
            console.log(ammo)
            
        })
        
    })

    scar_underbarrel.split("\n").forEach(underbarrel => {
        db.attachments.findOrCreate({
            where: {name: underbarrel, type: "Underbarrel"}
        }).then(([underbarrel, wasCreated]) => {
            console.log(underbarrel)
            
        })
        
    })

}

scrapeScar('https://callofduty.fandom.com/wiki/SCAR-H#Attachments_4')

