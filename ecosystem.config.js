module.exports = {
    apps: [{
        name: 'grandeur',
        script: 'index.js',

        args: 'one two',
        instances : "max",
        exec_mode : "cluster",
        autorestart: true,
        watch: false,

        env_production: {
            NODE_ENV: 'production'
        }
    }],
};
