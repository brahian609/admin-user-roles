import angular from 'angular';
import LeadsFormController from './leads-form.controller';

let leadsFormModule = angular.module('leadsForm', [])
    .controller('LeadsFormController', LeadsFormController);

export default leadsFormModule;