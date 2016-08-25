import angular from 'angular';
import LeadsRoutes from './leads.route';
import LeadsController from './leads.controller';

import leadsForm from './leads-form/leads-form';

let leadsModule = angular.module('app.components.leads', [
        leadsForm.name
    ])
    .config(LeadsRoutes)
    .controller('LeadsController', LeadsController);

export default leadsModule;