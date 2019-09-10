const { Router } = require('express');

const myCryptos = require('./routes/myCryptos');
const igScrapper = require('./routes/igScrapper');

module.exports = () => {
    const route = Router();

    const POST = "post", GET = "get";

    const addRoute = (method, path, func) => {
        switch (method) {
            case "get":
                route.get(`/${path.join("/")}`, (req, res) => func(method, req, res));
                break;
            case "post":
                route.post(`/${path.join("/")}`, (req, res) => func(method, req, res));
                break;
            default:
                route.get(`/${path.join("/")}`, (req, res) => func(method, req, res));
                break;
        }
    };


    // MyCryptos APIs
    addRoute(POST, ["my-cryptos", "getPriceForCryptos"]                               , myCryptos.getPriceForCryptos);
    addRoute(GET , ["my-cryptos", "getPriceForCryptos", ":cryptoName", ":currencies"] , myCryptos.getPriceForCryptos);


    // Instagram Scrapper
    addRoute(POST, ["ig-scrapper", "getUserInfo"]                                     , igScrapper.getUserInfo);
    addRoute(GET , ["ig-scrapper", "getUserInfo", ":username"]                        , igScrapper.getUserInfo);


    // Todo :: Github Scrapper
    


    return route;
}