const config = require('./config');
const loaders = require('./loaders');
const express = require('express');

async function startServer() {

    const app = express();

    await loaders.init({ expressApp: app });

    app.listen(config.server.PORT, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(`Server is running on: http://localhost:${config.server.PORT}`);
    });
}

startServer();