const utils = require("../../utils");

exports.testing = (_method, _req, _res, next) => {
    utils.log("MIDDLEWARE", "TESTING");
    next();
}