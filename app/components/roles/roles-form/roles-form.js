import angular from 'angular';
import rolesFormComponent from './roles-form.component';

let rolesFormModule = angular.module('app.components.rolesForm', [])
    .component('rolesForm', rolesFormComponent);

export default rolesFormModule;