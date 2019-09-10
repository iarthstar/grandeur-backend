const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    server : {
        PORT: process.env.PORT || 8080,
    },
    database : {
    },
    api : {
        prefix : ""
    }
}