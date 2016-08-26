import navbar from './widgets/navbar/navbar';
import login from './login/login';
import errors from './errors/errors';
import home from './home/home';
import leads from './leads/leads';
import contacts from './contacts/contacts';
import roles from './roles/roles';
import profiles from './profiles/profiles';
import adminNav from './widgets/admin-nav/admin-nav';
import loginRoutes from './login/login.routes';

let componentsModule = angular.module('app.components', [
    navbar.name,
    login.name,
    errors.name,
    home.name,
    leads.name,
    contacts.name,
    roles.name,
    profiles.name,
    adminNav.name,
    loginRoutes.name
]);

export default componentsModule;
