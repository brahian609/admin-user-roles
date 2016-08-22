import angular from 'angular';
import RolesRoutes from './roles.route';
import RolesController from './roles.controller';

import rolesForm from './roles-form/roles-form';

let rolesModule = angular.module('app.components.roles', [
        rolesForm.name
    ])
    .config(RolesRoutes)
    .controller('RolesController', RolesController);

export default rolesModule;