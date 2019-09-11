const { Router } = require('express');

const myCryptos = require('./routes/myCryptos');
const igScrapper = require('./routes/igScrapper');
const ghScrapper = require('./routes/ghScrapper');

module.exports = () => {
    const route = Router();

    const oneMoreRoute = (method, path, func) => {
        switch (method) {
            case "get":
                route.get(path, (req, res) => func(method, req, res));
                break;
            case "post":
                route.post(path, (req, res) => func(method, req, res));
                break;
            default: break;
        }
    };

    const POST = (strings, eval) => {
        oneMoreRoute('post', strings[0].trim(), eval);
    }

    const GET = (strings, eval) => {
        oneMoreRoute('get', strings[0].trim(), eval);
    }


    //
    // ────────────────────────────────────────────────────────── ROUTES ───────
    //
    
    // MyCryptos APIs
    POST `/my-cryptos/getPriceForCryptos                                 ${ myCryptos.getPriceForCryptos }`
    GET  `/my-cryptos/getPriceForCryptos/:cryptoNames/:currencies        ${ myCryptos.getPriceForCryptos }`


    // Instagram Scrapper APIs
    POST `/ig-scrapper/getUserInfo                                       ${ igScrapper.getUserInfo }`
    GET  `/ig-scrapper/getUserInfo/:username                             ${ igScrapper.getUserInfo }`


    // Todo :: Github APIs
    POST `/gh-api/getRepoInfo                                            ${ ghScrapper.getRepoInfo }`
    GET  `/gh-api/getRepoInfo/:username/:reponame                        ${ ghScrapper.getRepoInfo }`


    return route;
}