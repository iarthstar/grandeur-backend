const utils = require("../utils");

let route = {};

const oneMoreRoute = (method, path, func) => {
    switch (method) {
        case "get":
            route.get(path, (req, res) => {
                try {
                    func(method, req, res)
                } catch (err) {
                    utils.error(err);
                    return res.json({ error: true, error_message: "Something went wrong..." }).status(500);
                }
            }); break;

        case "post":
            route.post(path, (req, res) => {
                try {
                    func(method, req, res)
                } catch (err) {
                    utils.error(err);
                    return res.json({ error: true, error_message: "Something went wrong..." }).status(500);
                }
            }); break;

        case "put":
            route.put(path, (req, res) => {
                try {
                    func(method, req, res)
                } catch (err) {
                    utils.error(err);
                    return res.json({ error: true, error_message: "Something went wrong..." }).status(500);
                }
            }); break;

        case "delete":
            route.delete(path, (req, res) => {
                try {
                    func(method, req, res)
                } catch (err) {
                    utils.error(err);
                    return res.json({ error: true, error_message: "Something went wrong..." }).status(500);
                }
            }); break;

        case "middle":
            route.use(path, (req, res, next) => {
                try {
                    func(method, req, res, next)
                } catch (err) {
                    utils.error(err);
                    return res.json({ error: true, error_message: "Something went wrong..." }).status(500);
                }
            }); break;

        default: break;
    }
};

exports.initializeRoute = rt => route = rt;

exports.MIDDLE___ = (strings, eval) => {
    oneMoreRoute('middle', strings[0].trim(), eval);
}

exports.POST_____ = (strings, eval) => {
    oneMoreRoute('post', strings[0].trim(), eval);
}

exports.GET______ = (strings, eval) => {
    oneMoreRoute('get', strings[0].trim(), eval);
}

exports.PUT______ = (strings, eval) => {
    oneMoreRoute('put', strings[0].trim(), eval);
}

exports.DELETE___ = (strings, eval) => {
    oneMoreRoute('delete', strings[0].trim(), eval);
}