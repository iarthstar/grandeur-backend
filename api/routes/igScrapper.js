const axios = require('axios');

exports.getUserInfo = (method, req, res) => {
    let options = {};

    switch (method) {
        case "post": {
            const { username } = req.body;
            options.url = `https://www.instagram.com/${username}/`;
        } break;
        
        case "get": {
            const { username } = req.params;
            options.url = `https://www.instagram.com/${username}/`;
        } break;
    }

    options.method = "get";

    axios(options)
        .then(response => {

            const str = response.data;
            const sharedDataRegex = /(window._sharedData = )(.*)(;<\/script>)/;

            if ( sharedDataRegex.test(str) ) {
                const userInfo = JSON.parse(sharedDataRegex.exec(str)[2]).entry_data.ProfilePage[0].graphql.user; 

                const { username, biography, full_name, is_private } = userInfo;

                return res.send({
                    username,
                    biography,
                    full_name,
                    is_private,
                    followers: getCount(userInfo.edge_followed_by),
                    following: getCount(userInfo.edge_follow),
                    profile_pic_url: userInfo.profile_pic_url_hd
                });

            } else {
                console.log("error");
                throw "";
            }
        }).catch(err => {
            return res.json({ error : true, error_message : "username not found" }).status(404);
        });
};

function getCount ({ count }) { return count; };