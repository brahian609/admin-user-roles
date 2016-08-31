import angular from 'angular';
import UsersRoutes from './users.route';
import UsersController from './users.controller';

import usersForm from './users-form/users-form';

let usersModule = angular.module('app.components.users', [
        usersForm.name
    ])
    .config(UsersRoutes)
    .controller('UsersController', UsersController);

export default usersModule;