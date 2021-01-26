// const axios = require('axios')
// const cheerio = require('cheerio')
// const URL = 'https://callofduty.fandom.com/wiki/Call_of_Duty:_Modern_Warfare_(2019)'



// axios.get(URL)
// .then(res => {
//     let $ = cheerio.load(res.data)
//     let result = $('.navbox-group')
//     let resultTitles = result.map((index, element) => {
//         return ($(element).find('a').attr('title'))
//     })
//     console.log(resultTitles)
// })

// axios.get(URL)
// .then(res => {
//     let $ = cheerio.load(res.data)
//     let result = $('.navbox-group')
//     let resultTitles = result.map((index, element) => {
//         return ($(element).find('a').attr('title'))
//     })
//     }).then(res => {
//         axios.get('https://callofduty.fandom.com/wiki/Kilo_141')
//         .then(res => {
//     cheerio.load(res.data)
//     })
// })

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

    console.log(assualt.split("·"), sub.split("·"), shot.split("·"), lmg.split("·"), marks.split("·"), sniper.split("·"))
    process.exit()
}

scrapeGun('https://callofduty.fandom.com/wiki/Call_of_Duty:_Modern_Warfare_(2019)')

