/**
 * @file loaders/index.js
 * @description all the loaders required for the server are here
 * 
 * @author Arth Gajjar <iarthstar@gmail.com>
 */



// modules import
const utils = require('../utils');
const expressLoader = require('./express');

exports.init = async ({ expressApp }) => {
    
    await expressLoader.init({ app: expressApp });
    utils.success('Express Intialized');

}