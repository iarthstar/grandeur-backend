const appName = require("../package.json").name;

module.exports = {
    apps: [{
        name: appName,
        script: 'index.js',

        instances : "max",
        exec_mode : "cluster",
        autorestart: true,
        watch: false,

        env_production: {
            NODE_ENV: 'production'
        }
    }],
};
