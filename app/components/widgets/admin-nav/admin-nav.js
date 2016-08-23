import angular from 'angular';
import adminNavComponent from './admin-nav.component';

let adminNavModule = angular.module('adminNav', [])
    .component('adminNav', adminNavComponent);

export default adminNavModule;