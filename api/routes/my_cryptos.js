const utils = require("../../utils");
const axios = require('axios');

exports.get_price_for_cryptos = (method, req, res) => {

    let options = {};

    switch (method) {
        case "post": {
            const { cryptoNames, currencies } = req.body;
            options.url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${cryptoNames.join(",")}&tsyms=${currencies.join(",")}`;
        } break;

        case "get": {
            const { cryptoNames, currencies } = req.params;
            options.url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${cryptoNames}&tsyms=${currencies}`;
        } break;
    }

    options.method = "get";

    axios(options)
        .then(response => {
            return res.send(response.data);
        }).catch(err => {
            utils.error("AXIOS CATCH", err);
            return res.json({ error: false, error_message: "Something went wrong..." }).status(404);
        });

};