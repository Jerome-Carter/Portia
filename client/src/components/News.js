import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, Button, Card } from 'react-bootstrap/';
import './Portfolios.css';
const axios = require('axios');
const cheerio = require('cheerio');

async function scrape() {
    let temp = { content: [], url: [] };
    const res = await axios.get("/r/wallstreetbets/search/?q=flair%3ADD&include_over_18=on&sort=new");
    //res.header("Access-Control-Allow-Origin", "*");
    const $ = cheerio.load(res.data);


    $(`._eYtD2XCVieq6emjKBH3m`).each(function (i, elm) {
        //console.log(i);
        //console.log($(elm).text()); // for testing do text() 
        temp.content.push($(elm).text());

    });

    $(".SQnoC3ObvgnGjWt90zD9Z._2INHSNB8V5eaWp4P0rY_mE").each(function (i, elm) {
        //console.log(i);
        //console.log($(elm).attr('href'));
        temp.url.push($(elm).attr('href'));
    });
    let infoObj = []
    temp.content.forEach((item, index) => {
        //console.log(index);
        infoObj.push({ content: item, url: "https://reddit.com" + temp.url[index] })
    })
    console.log(infoObj);

    return infoObj
}

function News() {

    const [info, setInfo] = useState([]);

    useEffect(() => {
        scrape().then((data) => {
            console.log(data);
            setInfo(data);
        })
    }, []);
    return (
        
        <ListGroup as="ul" >
            <>
            {info.map(data =>   
        <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >

                     
        <Card style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Text>
                {data.content}
        </Card.Text>
        <a href= {data.url} target="_blank"><Button variant="primary">Get More Knowledge</Button></a>
        </Card.Body>
        </Card>
        </ListGroup.Item>
        )}
</>
    </ListGroup>
    
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
            
        }

export default News;


<ul>
                {info.map(data =>
                    <li key={data.url}><a href={data.url}>{data.content}</a></li>

                )}
            </ul>
*/