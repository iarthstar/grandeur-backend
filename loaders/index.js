const expressLoader = require('./express');

exports.init = async ({ expressApp }) => {
    
    await expressLoader.init({ app: expressApp });
    console.log('Express Intialized');

}