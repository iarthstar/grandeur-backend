const utils = require('../utils');
const expressLoader = require('./express');

exports.init = async ({ expressApp }) => {
    
    await expressLoader.init({ app: expressApp });
    utils.success('Express Intialized');

}