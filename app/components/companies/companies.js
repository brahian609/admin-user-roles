import angular from 'angular';
import CompaniesRoutes from './companies.route';
import CompaniesController from './companies.controller';

import companiesForm from './companies-form/companies-form';

let companiesModule = angular.module('app.components.companies', [
        companiesForm.name
    ])
    .config(CompaniesRoutes)
    .controller('CompaniesController', CompaniesController);

export default companiesModule;