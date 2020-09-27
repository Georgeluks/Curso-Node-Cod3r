import { Router } from "../common/router";
import * as restify from 'restify';
import { User } from "./users.model";

class UsersRouter extends Router {
    applyRoutes(application: restify.Server){
        application.get('/users', (req, res, next) => {
            User.findAll().then(users => {
                res.json(users);
                return next();
            });
        });

        application.get('/users/:id', (req, res, next) => {
            User.findUserById(req.params.id).then(user => {
                if(user){
                    res.json(user);
                    return next()
                } else {
                    res.send(404);
                    return next();
                }
            })
        })
    };
};

export const usersRouter = new UsersRouter();