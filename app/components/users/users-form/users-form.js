import angular from 'angular';
import usersFormComponent from './users-form.component';

let usersFormModule = angular.module('app.components.usersForm', [])
    .component('usersForm', usersFormComponent);

export default usersFormModule;