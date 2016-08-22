import angular from 'angular';
import RolesRoutes from './roles.route';
import RolesController from './roles.controller';

let rolesModule = angular.module('app.components.roles', [

    ])
    .config(RolesRoutes)
    .controller('RolesController', RolesController);

export default rolesModule;