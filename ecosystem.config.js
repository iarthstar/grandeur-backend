const appName = require("./package.json").name;

module.exports = {
    apps: [{
        name: "grandeur",
        script: 'index.js',

        instances : "max",
        exec_mode : "cluster",
        autorestart: true,
        watch: false,
    }]
};
