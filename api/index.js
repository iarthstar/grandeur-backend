/**
 * @file api/index.js
 * @description all the exposed routes are here
 * 
 * @author Arth Gajjar <iarthstar@gmail.com>
 */




// modules import
const { Router } = require('express');

const { MIDDLE___, POST_____, GET______, PUT______, DELETE___, initializeRoute } = require('./utils');

const middleware = require('./middlewares');

const myCryptos  = require('./routes/my_cryptos');
const igScrapper = require('./routes/ig_scrapper');
const ghScrapper = require('./routes/gh_api');
const reqres     = require('./routes/req_res');

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