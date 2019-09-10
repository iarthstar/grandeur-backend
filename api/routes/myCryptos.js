const axios = require('axios');

exports.getPriceForCryptos = (method, req, res) => {
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
            return res.json({ err }).status(404);
        });

};


