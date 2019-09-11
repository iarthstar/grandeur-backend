const { Router } = require('express');

const myCryptos = require('./routes/myCryptos');
const igScrapper = require('./routes/igScrapper');

module.exports = () => {
    const route = Router();

    const addRoute = (method, path, func) => {
        switch (method) {
            case "get":
                route.get(`${Array.isArray(path) ? path.join("/") : path}`, (req, res) => func(method, req, res));
                break;
            case "post":
                route.post(`${Array.isArray(path) ? path.join("/") : path}`, (req, res) => func(method, req, res));
                break;
            default: break;
        }
    };

    const POST = (strings, eval) => {
        addRoute('post', strings[0].trim(), eval);
    }

    const GET = (strings, eval) => {
        addRoute('get', strings[0].trim(), eval);
    }

    
    // MyCryptos APIs
    POST `/my-cryptos/getPriceForCryptos                                 ${myCryptos.getPriceForCryptos}`
    GET  `/my-cryptos/getPriceForCryptos/:cryptoNames/:currencies        ${myCryptos.getPriceForCryptos}`


    // Instagram Scrapper APIs
    POST `/ig-scrapper/getUserInfo                                       ${igScrapper.getUserInfo}`
    GET  `/ig-scrapper/getUserInfo/:username                             ${igScrapper.getUserInfo}`


    // Todo :: Github Scrapper
    


    return route;
}