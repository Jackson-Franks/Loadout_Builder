
const db = require('./models')
const puppeteer = require('puppeteer')

async function scrapeGun(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    
    

    const [el] = await page.$x('//*[@id="mw-content-text"]/div/table[4]/tbody/tr/td/table/tbody/tr[3]/td[2]/div')
    const txt = await el.getProperty('textContent')
    const assualt = await txt.jsonValue()


    const [el2] = await page.$x('//*[@id="mw-content-text"]/div/table[4]/tbody/tr/td/table/tbody/tr[5]/td[2]/div')
    const gun2 = await el2.getProperty('textContent')
    const sub = await gun2.jsonValue()

    const [el3] = await page.$x('//*[@id="mw-content-text"]/div/table[4]/tbody/tr/td/table/tbody/tr[7]/td[2]/div')
    const gun3 = await el3.getProperty('textContent')
    const shot = await gun3.jsonValue()

    const [el4] = await page.$x('//*[@id="mw-content-text"]/div/table[4]/tbody/tr/td/table/tbody/tr[9]/td[2]/div')
    const gun4 = await el4.getProperty('textContent')
    const lmg = await gun4.jsonValue()

    const [el5] = await page.$x('//*[@id="mw-content-text"]/div/table[4]/tbody/tr/td/table/tbody/tr[11]/td[2]/div')
    const gun5 = await el5.getProperty('textContent')
    const marks = await gun5.jsonValue()

    const [el6] = await page.$x('//*[@id="mw-content-text"]/div/table[4]/tbody/tr/td/table/tbody/tr[13]/td[2]/div')
    const gun6 = await el6.getProperty('textContent')
    const sniper = await gun6.jsonValue()

    let assualtArray = assualt.split("·").map(gun => {
        gun.trim()
        return{name: gun, type: "Assault Rifle"}
    })

    // let subArray = sub.split("·").map(gun => {
    //     gun.trim()
    //     return{name: gun, type: "Submachine Gun"}
    // })

    // let lmgArray = lmg.split("·").map(gun => {
    //     gun.trim()
    //     return{name: gun, type: "Light Machine Gun"}
    // })

    // let shotgunArray = shot.split("·").map(gun => {
    //     gun.trim()
    //     return{name: gun, type: "Shotgun"}
    // })
    
    // let marksmanArray = marks.split("·").map(gun => {
    //     gun.trim()
    //     return{name: gun, type: "Marksman Rifle"}
    // })

    // let sniperArray = sniper.split("·").map(gun => {
    //     gun.trim()
    //     return{name: gun, type: "Sniper Rifle"}
    // })

    db.guns.bulkCreate(assualtArray).then(guns=> {
        console.log('nice')
        process.exit()
    })

    // db.guns.bulkCreate(subArray).then(guns=> {
    //     console.log('nice')
    //     process.exit()
    // })

    // db.guns.bulkCreate(lmgArray).then(guns=> {
    //     console.log('nice')
    //     process.exit()
    // })

    // db.guns.bulkCreate(shotgunArray).then(guns=> {
    //     console.log('nice')
    //     process.exit()
    // })

    // db.guns.bulkCreate(marksmanArray).then(guns=> {
    //     console.log('nice')
    //     process.exit()
    // })

    // db.guns.bulkCreate(sniperArray).then(guns=> {
    //     console.log('nice')
    //     process.exit()
    // })

    // console.log(assualtArray, subArray, lmgArray, shotgunArray, marksmanArray, sniperArray)
    // console.log(assualt.split("·"), sub.split("·"), shot.split("·"), lmg.split("·"), marks.split("·"), sniper.split("·"))
}

scrapeGun('https://callofduty.fandom.com/wiki/Call_of_Duty:_Modern_Warfare_(2019)')

