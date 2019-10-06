const utils = require('../../utils');
const axios = require('axios');

exports.get_repo_info = (method, req, res) => {

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
                name             : reponame,
                private          : is_private,
                stargazers_count : stargazers,
                watchers_count   : watchers,
                forks_count      : forks,
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
            utils.error("AXIOS CATCH", err);
            return res.json({ error: false, error_message: "Something went wrong..." }).status(404);
        });

};

exports.get_release_info = (method, req, res) => {

    let options = {};

    switch (method) {
        case "post": {
            const { username, reponame } = req.body;
            options.url = `https://api.github.com/repos/${username}/${reponame}/releases`;
        } break;

        case "get": {
            const { username, reponame } = req.params;
            options.url = `https://api.github.com/repos/${username}/${reponame}/releases`;
        } break;
    }

    options.method = "get";
    options.headers = {
        'Accept': 'application/vnd.github.v3+json'
    };

    axios(options)
        .then(response => {
            const data = response.data;
            let total_download_count = 0;
            const resObj = {};

            data.forEach(({tag_name, assets}) => {
                const download_count = assets[0].download_count;
                resObj[tag_name] = {
                    download_count
                };
                total_download_count += download_count;
            });

            resObj["total_download_count"] = total_download_count;

            return res.send(resObj);

        }).catch(err => {
            utils.error("AXIOS CATCH", err);
            return res.json({ error: false, error_message: "Something went wrong..." }).status(404);
        });

};