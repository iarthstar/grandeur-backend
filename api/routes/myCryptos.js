const utils = require("../../utils");
const axios = require('axios');

exports.getPriceForCryptos = (method, req, res) => {
    
    try {
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
                utils.error(err);
                return res.json({ error: false, error_message: "Something went wrong..." }).status(404);
            });
    } catch (err) {
        utils.error(err);
        return res.json({ error: true, error_message: "Something went wrong..." }).status(404);
    }

};