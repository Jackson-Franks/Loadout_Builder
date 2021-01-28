const puppeteer = require('puppeteer')
const db = require('../models')

async function scrapeFal(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    
    

    const [muzzles] = await page.$x('//*[@id="mw-content-text"]/div/ul[4]')
    const attachment1 = await muzzles.getProperty('textContent')
    const fal_muzzle = await attachment1.jsonValue()

    const [barrels] = await page.$x('//*[@id="mw-content-text"]/div/ul[5]')
    const attachment2 = await barrels.getProperty('textContent')
    const fal_barrel = await attachment2.jsonValue()

    const [lasers] = await page.$x('//*[@id="mw-content-text"]/div/ul[6]')
    const attachment3 = await lasers.getProperty('textContent')
    const fal_laser = await attachment3.jsonValue()

    const [optic] = await page.$x('//*[@id="mw-content-text"]/div/ul[7]')
    const attachment4 = await optic.getProperty('textContent')
    const fal_optic = await attachment4.jsonValue()

    const [stock] = await page.$x('//*[@id="mw-content-text"]/div/ul[8]')
    const attachment5 = await stock.getProperty('textContent')
    const fal_stock = await attachment5.jsonValue()

    const [grip] = await page.$x('//*[@id="mw-content-text"]/div/ul[9]')
    const attachment6 = await grip.getProperty('textContent')
    const fal_grip = await attachment6.jsonValue()

    const [ammo] = await page.$x('//*[@id="mw-content-text"]/div/ul[10]')
    const attachment7 = await ammo.getProperty('textContent')
    const fal_ammo = await attachment7.jsonValue()

    const [underbarrel] = await page.$x('//*[@id="mw-content-text"]/div/ul[11]')
    const attachment8 = await underbarrel.getProperty('textContent')
    const fal_underbarrel = await attachment8.jsonValue()

    // console.log(fal_muzzle.split("\n"), fal_barrel.split("\n"), fal_laser.split("\n"), fal_optic.split("\n"), fal_stock.split("\n"), fal_grip.split("\n"), fal_ammo.split("\n"), fal_underbarrel.split("\n"))
    // process.exit()

    fal_muzzle.split("\n").forEach(muzzle => {
        db.attachments.findOrCreate({
            where: {name: muzzle, type: "Muzzle"}
        }).then(([muzzle, wasCreated]) => {
            console.log(muzzle)
            
        })
        
    })

    fal_barrel.split("\n").forEach(barrel => {
        db.attachments.findOrCreate({
            where: {name: barrel, type: "Barrel"}
        }).then(([barrel, wasCreated]) => {
            console.log(barrel)
            
        })
        
    })

    fal_laser.split("\n").forEach(laser => {
        db.attachments.findOrCreate({
            where: {name: laser, type: "Laser"}
        }).then(([laser, wasCreated]) => {
            console.log(laser)
            
        })
        
    })

    fal_optic.split("\n").forEach(optic => {
        db.attachments.findOrCreate({
            where: {name: optic, type: "Optic"}
        }).then(([optic, wasCreated]) => {
            console.log(optic)
            
        })
        
    })

    fal_stock.split("\n").forEach(stock => {
        db.attachments.findOrCreate({
            where: {name: stock, type: "Stock"}
        }).then(([stock, wasCreated]) => {
            console.log(stock)
            
        })
        
    })

    fal_grip.split("\n").forEach(grip => {
        db.attachments.findOrCreate({
            where: {name: grip, type: "Grip"}
        }).then(([grip, wasCreated]) => {
            console.log(grip)
            
        })
        
    })

    fal_ammo.split("\n").forEach(ammo => {
        db.attachments.findOrCreate({
            where: {name: ammo, type: "Ammunition"}
        }).then(([ammo, wasCreated]) => {
            console.log(ammo)
            
        })
        
    })

    // fal_underbarrel.split("\n").forEach(underbarrel => {
    //     db.attachments.findOrCreate({
    //         where: {name: underbarrel, type: "Underbarrel"}
    //     }).then(([underbarrel, wasCreated]) => {
    //         console.log(underbarrel)
            
    //     })
        
    // })

}

scrapeFal('https://callofduty.fandom.com/wiki/FAL#Attachments_4')


