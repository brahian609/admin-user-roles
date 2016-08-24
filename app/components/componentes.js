import navbar from './widgets/navbar/navbar';
import login from './login/login';
import home from './home/home';
import companies from './companies/companies';
import roles from './roles/roles';
import profiles from './profiles/profiles';
import adminNav from './widgets/admin-nav/admin-nav';
import loginRoutes from './login/login.routes';

let componentsModule = angular.module('app.components', [
    navbar.name,
    login.name,
    home.name,
    companies.name,
    roles.name,
    profiles.name,
    adminNav.name,
    loginRoutes.name
]);

export default componentsModule;
