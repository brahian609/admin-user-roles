import angular from 'angular';
import groupsFormComponent from './groups-form.component';

let groupsFormModule = angular.module('app.components.groupsForm', [])
    .component('groupsForm', groupsFormComponent);

export default groupsFormModule;