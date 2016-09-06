import angular from 'angular';
import leadsFormComponent from './leads-form.component';

let leadsFormModule = angular.module('app.components.leadsForm', [])
    .component('leadsForm', leadsFormComponent);

export default leadsFormModule;