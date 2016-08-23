import angular from 'angular';
import CompaniesFormController from './companies-form.controller';

let companiesFormModule = angular.module('companiesForm', [])
    .controller('CompaniesFormController', CompaniesFormController);

export default companiesFormModule;