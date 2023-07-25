const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/', (req, res) => {
    // console.log(res.ok);
    res.send('Hello! This API is Developed By LakshayCharmingDeveloper as a LIVE Project-2')
})

router.get('/news',async(req, res) => {
    const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=dd30967d1d854b799d75da5a94a311c2")
    // console.log(response);
    const ParsedData =await response.json()
    console.log(ParsedData);
    res.send(ParsedData)
})
module.exports = router




//     fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=dd30967d1d854b799d75da5a94a311c")
//         .then(response => {
//             if (response.ok) {
//                 return response.json()
//             }
//             else {
//                 res.send({ "res": "Articles Not Found" })
//             }
//         })
//         .then(data => {
//             // console.log(data);
//             res.send(data)
//         })
//         .catch((err) => {
//             console.log("sir error agya hai", err);
//         })