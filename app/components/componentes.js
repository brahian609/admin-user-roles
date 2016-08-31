import angular from 'angular';

import login from './login/login';
import errors from './errors/errors';
import home from './home/home';
import leads from './leads/leads';
import contacts from './contacts/contacts';
import roles from './roles/roles';
import profiles from './profiles/profiles';
import loginRoutes from './login/login.routes';
import widgets from './widgets/widgets';

let componentsModule = angular.module('app.components', [
    login.name,
    errors.name,
    home.name,
    leads.name,
    contacts.name,
    roles.name,
    profiles.name,
    loginRoutes.name,
    widgets.name
]);

export default componentsModule;
