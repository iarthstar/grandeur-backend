/**
 * @file index.js
 * @description Entry point of App
 * 
 * @author Arth Gajjar <iarthstar@gmail.com>
 * @version 1.0
 */




//
// ────────────────────────────────────────────────────────── INIT APP ─────
//

const utils = require("./utils");
utils.initApp();

// modules import
const config = require('./config');
const loaders = require('./loaders');
const express = require('express');

async function startServer() {

    const app = express();

    await loaders.init({ expressApp: app });

    app.listen(config.server.PORT, err => {
        if (err) {
            utils.log(err);
            return;
        }
        utils.success(`Server is running on -> http://localhost:${config.server.PORT}`);
    });
}

startServer();