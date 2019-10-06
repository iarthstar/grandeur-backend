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

const crypto_api  = require('./routes/crypto_api');
const ig_scrapper = require('./routes/ig_scrapper');
const gh_api      = require('./routes/gh_api');
const req_res     = require('./routes/req_res');

module.exports = () => {

    const route = Router();

    initializeRoute(route);

    //
    // ────────────────────────────────────────────────────────── ROUTES ───────
    //


    // CryptoCompare APIs
    POST_____`/crypto_api/get_price_for_cryptos                                 ${ crypto_api.get_price_for_cryptos }`
    GET______`/crypto_api/get_price_for_cryptos/:cryptoNames/:currencies        ${ crypto_api.get_price_for_cryptos }`


    // Instagram Scrapper APIs
    POST_____`/ig_scrapper/get_user_info                                        ${ ig_scrapper.get_user_info }`
    GET______`/ig_scrapper/get_user_info/:username                              ${ ig_scrapper.get_user_info }`


    // Github APIs
    POST_____`/gh_api/get_repo_info                                             ${ gh_api.get_repo_info }`
    GET______`/gh_api/get_repo_info/:username/:reponame                         ${ gh_api.get_repo_info }`
    POST_____`/gh_api/get_release_info/                                         ${ gh_api.get_release_info }`
    GET______`/gh_api/get_release_info/:username/:reponame                      ${ gh_api.get_release_info }`


    // ReqRes APIs
    MIDDLE___`/req_res/users                                                    ${ middleware.basicAuth }`
    POST_____`/req_res/users                                                    ${ req_res.users }`
    GET______`/req_res/users/:id                                                ${ req_res.users }`
    PUT______`/req_res/users/:id                                                ${ req_res.users }`
    DELETE___`/req_res/users/:id                                                ${ req_res.users }`


    // Todo :: MyCryptos APIs


    //
    // ─────────────────────────────────────────────────────────────────────────
    //


    return route;
}