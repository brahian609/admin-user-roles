import angular from 'angular';
import RolesFormController from './roles-form.controller';

let rolesFormModule = angular.module('rolesForm', [])
    .controller('RolesFormController', RolesFormController);

export default rolesFormModule;