const utils = require('../../utils');
const axios = require('axios');

exports.getRepoInfo = (method, req, res) => {

    try {
        let options = {};

        switch (method) {
            case "post": {
                const { username, reponame } = req.body;
                options.url = `https://api.github.com/repos/${username}/${reponame}`;
            } break;

            case "get": {
                const { username, reponame } = req.params;
                options.url = `https://api.github.com/repos/${username}/${reponame}`;
            } break;
        }

        options.method = "get";
        options.headers = {
            'Accept': 'application/vnd.github.v3+json'
        };

        axios(options)
            .then(response => {
                const {
                    language,
                    description,
                    name: reponame,
                    private: is_private,
                    stargazers_count: stargazers,
                    watchers_count: watchers,
                    forks_count: forks,
                    open_issues_count: open_issues
                } = response.data;

                return res.send({
                    reponame,
                    description,
                    stargazers,
                    watchers,
                    forks,
                    open_issues,
                    is_private,
                    language
                });

            }).catch(err => {
                utils.error(err);
                return res.json({ error: false, error_message: "Something went wrong..." }).status(404);
            });

    } catch (err) {
        utils.error(err);
        return res.json({ error: true, error_message: "Something went wrong..." }).status(404);
    }


};