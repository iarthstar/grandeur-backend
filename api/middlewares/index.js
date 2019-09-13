const utils = require("../../utils");
const basicAuth = require("./basic_auth");

exports.testing = (_method, _req, _res, next) => {
    utils.log("MIDDLEWARE", "TESTING");
    next();
}

exports.basicAuth = basicAuth;