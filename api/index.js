const { Router } = require('express');

const myCryptos = require('./routes/myCryptos');
const igScrapper = require('./routes/igScrapper');
const ghScrapper = require('./routes/ghScrapper');

module.exports = () => {
    const route = Router();

    const oneMoreRoute = (method, path, func) => {
        switch (method) {
            case "get":
                route.get(path, (req, res) => {
                    try {
                        func(method, req, res)
                    } catch (err) {
                        utils.error(err);
                        return res.json({ error: true, error_message: "Something went wrong..." }).status(500);
                    }
                }); break;

            case "post":
                route.post(path, (req, res) => {
                    try {
                        func(method, req, res)
                    } catch (err) {
                        utils.error(err);
                        return res.json({ error: true, error_message: "Something went wrong..." }).status(500);
                    }
                }); break;

            default: break;
        }
    };

    const POST_____ = (strings, eval) => {
        oneMoreRoute('post', strings[0].trim(), eval);
    }

    const GET______ = (strings, eval) => {
        oneMoreRoute('get', strings[0].trim(), eval);
    }


    //
    // ────────────────────────────────────────────────────────── ROUTES ───────
    //

    // MyCryptos APIs
    POST_____`/my-cryptos/getPriceForCryptos                                 ${myCryptos.getPriceForCryptos}`
    GET______`/my-cryptos/getPriceForCryptos/:cryptoNames/:currencies        ${myCryptos.getPriceForCryptos}`

    // Instagram Scrapper APIs
    POST_____`/ig-scrapper/getUserInfo                                       ${igScrapper.getUserInfo}`
    GET______`/ig-scrapper/getUserInfo/:username                             ${igScrapper.getUserInfo}`


    // Github APIs
    POST_____`/gh-api/getRepoInfo                                            ${ghScrapper.getRepoInfo}`
    GET______`/gh-api/getRepoInfo/:username/:reponame                        ${ghScrapper.getRepoInfo}`


    return route;
}