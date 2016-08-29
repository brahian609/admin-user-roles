import angular from 'angular';
import RolesFormController from './roles-form.controller';

let rolesFormModule = angular.module('app.components.rolesForm', [])
    .controller('RolesFormController', RolesFormController);

export default rolesFormModule;