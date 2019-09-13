const bodyParser = require('body-parser');
const cors       = require('cors');
const routes     = require('../api');
const config     = require('../config');
const utils      = require('../utils');

exports.init = async ({ app }) => {

    app.get('/', (_req, res) => { res.status(200).end(); });
    app.get('/status', (_req, res) => { res.status(200).end(); });
    app.head('/status', (_req, res) => { res.status(200).end(); });
    app.enable('trust proxy');

    app.use(cors());

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use(config.api.prefix, routes());

    app.use((_req, _res, next) => {
        const err = new Error('Something went wrong...');
        utils.error(err);
        err['status'] = 404;
        next(err);
    });

    app.use((err, _req, res, _next) => {  
        return res.json({
            error: true,
            error_message: err.message
        }).status(err.status || 500);
    });

    return app;
};