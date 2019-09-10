const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('../api');
const config = require('../config');

exports.init = async ({ app }) => {

    app.get('/status', (_req, res) => { res.status(200).end(); });
    app.head('/status', (_req, res) => { res.status(200).end(); });
    app.enable('trust proxy');

    app.use(cors());
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use(config.api.prefix, routes());

    return app;
};