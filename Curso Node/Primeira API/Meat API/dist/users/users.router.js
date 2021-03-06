"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("../common/router");
const users_model_1 = require("./users.model");
class UsersRouter extends router_1.Router {
    applyRoutes(application) {
        application.get('/users', (req, res, next) => {
            users_model_1.User.findAll().then(users => {
                res.json(users);
                return next();
            });
        });
        application.get('/users/:id', (req, res, next) => {
            users_model_1.User.findUserById(req.params.id).then(user => {
                if (user) {
                    res.json(user);
                    return next();
                }
                else {
                    res.send(404);
                    return next();
                }
            });
        });
    }
    ;
}
;
exports.usersRouter = new UsersRouter();
