const utils = require('../../utils');
const axios = require('axios');

const getCount = ({ count }) => count;

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
                const { username, biography, full_name, is_private, edge_owner_to_timeline_media, edge_followed_by, edge_follow, profile_pic_url_hd } = userInfo;

                return res.send({
                    username,
                    biography,
                    full_name,
                    is_private,
                    posts: getCount(edge_owner_to_timeline_media),
                    followers: getCount(edge_followed_by),
                    following: getCount(edge_follow),
                    profile_pic_url: profile_pic_url_hd
                });

            } else {
                throw "Regex Test Failed";
            }
        }).catch(err => {
            utils.error("AXIOS CATCH", err);
            return res.json({ error : true, error_message : "Something went wrong..." }).status(404);
        });
};
