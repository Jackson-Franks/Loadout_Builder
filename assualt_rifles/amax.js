const puppeteer = require('puppeteer')
const db = require('../models')

async function scrapeAmax(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    
    

    const [muzzles] = await page.$x('//*[@id="mw-content-text"]/div/ul[1]')
    const attachment1 = await muzzles.getProperty('textContent')
    const amax_muzzle = await attachment1.jsonValue()

    const [barrels] = await page.$x('//*[@id="mw-content-text"]/div/ul[2]')
    const attachment2 = await barrels.getProperty('textContent')
    const amax_barrel = await attachment2.jsonValue()

    const [lasers] = await page.$x('//*[@id="mw-content-text"]/div/ul[3]')
    const attachment3 = await lasers.getProperty('textContent')
    const amax_laser = await attachment3.jsonValue()

    const [optic] = await page.$x('//*[@id="mw-content-text"]/div/ul[4]')
    const attachment4 = await optic.getProperty('textContent')
    const amax_optic = await attachment4.jsonValue()

    const [stock] = await page.$x('//*[@id="mw-content-text"]/div/ul[5]')
    const attachment5 = await stock.getProperty('textContent')
    const amax_stock = await attachment5.jsonValue()

    const [grip] = await page.$x('//*[@id="mw-content-text"]/div/ul[6]')
    const attachment6 = await grip.getProperty('textContent')
    const amax_grip = await attachment6.jsonValue()

    const [ammo] = await page.$x('//*[@id="mw-content-text"]/div/ul[7]')
    const attachment7 = await ammo.getProperty('textContent')
    const amax_ammo = await attachment7.jsonValue()

    const [underbarrel] = await page.$x('//*[@id="mw-content-text"]/div/ul[8]')
    const attachment8 = await underbarrel.getProperty('textContent')
    const amax_underbarrel = await attachment8.jsonValue()

    // console.log(amax_muzzle.split("\n"), amax_barrel.split("\n"), amax_laser.split("\n"), amax_optic.split("\n"), amax_stock.split("\n"), amax_grip.split("\n"), amax_ammo.split("\n"), amax_underbarrel.split("\n"))
    // process.exit()

    // amax_muzzle.split("\n").forEach(muzzle => {
    //     db.attachments.findOrCreate({
    //         where: {name: muzzle, type: "Muzzle"}
    //     }).then(([muzzle, wasCreated]) => {
    //         console.log(muzzle)
    //         process.exit()
    //     })
        
    // })

    // amax_barrel.split("\n").forEach(barrel => {
    //     db.attachments.findOrCreate({
    //         where: {name: barrel, type: "Barrel"}
    //     }).then(([barrel, wasCreated]) => {
    //         console.log(barrel)
            
    //     })
        
    // })

    // amax_laser.split("\n").forEach(laser => {
    //     db.attachments.findOrCreate({
    //         where: {name: laser, type: "Laser"}
    //     }).then(([laser, wasCreated]) => {
    //         console.log(laser)
            
    //     })
        
    // })

    // amax_optic.split("\n").forEach(optic => {
    //     db.attachments.findOrCreate({
    //         where: {name: optic, type: "Optic"}
    //     }).then(([optic, wasCreated]) => {
    //         console.log(optic)
            
    //     })
        
    // })

    // amax_stock.split("\n").forEach(stock => {
    //     db.attachments.findOrCreate({
    //         where: {name: stock, type: "Stock"}
    //     }).then(([stock, wasCreated]) => {
    //         console.log(stock)
            
    //     })
        
    // })

    // amax_grip.split("\n").forEach(grip => {
    //     db.attachments.findOrCreate({
    //         where: {name: grip, type: "Grip"}
    //     }).then(([grip, wasCreated]) => {
    //         console.log(grip)
            
    //     })
        
    // })

    // amax_ammo.split("\n").forEach(ammo => {
    //     db.attachments.findOrCreate({
    //         where: {name: ammo, type: "Ammunition"}
    //     }).then(([ammo, wasCreated]) => {
    //         console.log(ammo)
            
    //     })
        
    // })

    amax_underbarrel.split("\n").forEach(underbarrel => {
        db.attachments.findOrCreate({
            where: {name: underbarrel, type: "Underbarrel"}
        }).then(([underbarrel, wasCreated]) => {
            console.log(underbarrel)
            
        })
        
    })
}

scrapeAmax('https://callofduty.fandom.com/wiki/CR-56_AMAX#Attachments')

