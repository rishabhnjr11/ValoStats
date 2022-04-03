const fs = require("fs");
const request = require("request");
const path = require("path");
const cheerio = require("cheerio");
const url = "https://www.vlr.gg/event/449/valorant-champions-2021";

request(url,cb);

function cb(err,res, body){
    if(err){
        console.error("error",err);
    }else{
        tourMetaDetails(body);
    }
}

function tourMetaDetails(html){
    let selecTool = cheerio.load(html);
    let Eventname=selecTool('h1[class="wf-title"]').text().trim();
    // console.log(Eventname);
    let basicDate=selecTool('#wrapper > div.col-container > div > div.wf-card.mod-event.mod-header.mod-full > div.event-header > div.event-desc > div > div.event-desc-items > div:nth-child(1) > div.event-desc-item-value').text().trim();
    let basicPrizePool=selecTool('#wrapper > div.col-container > div > div.wf-card.mod-event.mod-header.mod-full > div.event-header > div.event-desc > div > div.event-desc-items > div:nth-child(2) > div.event-desc-item-value').text().trim();
    let basicVenue=selecTool('#wrapper > div.col-container > div > div.wf-card.mod-event.mod-header.mod-full > div.event-header > div.event-desc > div > div.event-desc-items > div:nth-child(3) > div.event-desc-item-value').text().trim();
//     console.log(basicDate.text().trim());
//     console.log(basicPrizePool.text().trim());
//     console.log(basicVenue.text().trim());
}
