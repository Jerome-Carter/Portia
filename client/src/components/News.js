import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, Button, Card } from 'react-bootstrap/';
import './Portfolios.css';
const axios = require('axios');
const cheerio = require('cheerio');


let info = {content: [], url: []};
let content =[]
async function scrape() {
axios.get("/r/wallstreetbets/search/?q=flair%3ADD&include_over_18=on&sort=new").then((res) => {
    //res.header("Access-Control-Allow-Origin", "*");
    const $ =  cheerio.load(res.data);
    
    
    $(`._eYtD2XCVieq6emjKBH3m`).each(function(i, elm) {
        //console.log(i);
        console.log($(elm).text()); // for testing do text() 
        info.content.push($(elm).text());
        
    });
    
    $(".SQnoC3ObvgnGjWt90zD9Z._2INHSNB8V5eaWp4P0rY_mE").each(function(i,elm) {
        //console.log(i);
        //console.log($(elm).attr('href'));
        info.url.push($(elm).attr('href'));
    });

    
});
}
scrape();
let infoList = []
console.log(JSON.stringify(info))
console.log(JSON.stringify(info))
for (let i = 0; i < info.url.length; i++){
    console.log(i);
    infoList.push( <li key={i}>{info.content[i]}</li>)
}
console.log(content)
content.forEach( (item, index) =>{
    console.log(index);
    infoList.push( <li key={index}>{item}</li> )
})

console.log(infoList);

function News() {
    
    return (
        <>
            <p>hi</p>
            <ul>
                {infoList}
            </ul>
        </>
    );
    
}
export default News;

/*
function News() {
    return (
    <ListGroup as="ul" >
        <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
        <Card style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
        </Card.Text>
        <Button variant="primary">Get More Knowledge</Button>
        </Card.Body>
        </Card>
        </ListGroup.Item>

    </ListGroup>
            );
        }

export default News;
*/