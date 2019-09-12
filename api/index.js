const { Router } = require('express');

const { MIDDLE___, POST_____, GET______, PUT______, DELETE___, initializeRoute } = require('./utils');

const middleware = require('./middlewares');

const myCryptos  = require('./routes/myCryptos');
const igScrapper = require('./routes/igScrapper');
const ghScrapper = require('./routes/ghScrapper');
const reqres     = require('./routes/reqres');

module.exports = () => {

    const route = Router();

    initializeRoute(route);

    //
    // ────────────────────────────────────────────────────────── ROUTES ───────
    //


    // MyCryptos APIs
    POST_____`/my-cryptos/getPriceForCryptos                                 ${ myCryptos.getPriceForCryptos }`
    GET______`/my-cryptos/getPriceForCryptos/:cryptoNames/:currencies        ${ myCryptos.getPriceForCryptos }`


    // Instagram Scrapper APIs
    MIDDLE___`/ig-scrapper/getUserInfo                                       ${ middleware.testing }`
    POST_____`/ig-scrapper/getUserInfo                                       ${ igScrapper.getUserInfo }`
    GET______`/ig-scrapper/getUserInfo/:username                             ${ igScrapper.getUserInfo }`


    // Github APIs
    POST_____`/gh-api/getRepoInfo                                            ${ ghScrapper.getRepoInfo }`
    GET______`/gh-api/getRepoInfo/:username/:reponame                        ${ ghScrapper.getRepoInfo }`


    // ReqRes APIs
    MIDDLE___`/req-res/users                                                 ${ middleware.basicAuth }`
    POST_____`/req-res/users                                                 ${ reqres.users }`
    GET______`/req-res/users/:id                                             ${ reqres.users }`
    PUT______`/req-res/users/:id                                             ${ reqres.users }`
    DELETE___`/req-res/users/:id                                             ${ reqres.users }`


    //
    // ─────────────────────────────────────────────────────────────────────────
    //


    return route;
}