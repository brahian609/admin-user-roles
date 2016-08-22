import roles from './roles/roles';
import profiles from './profiles/profiles';

let componentsModule = angular.module('app.components', [
    roles.name,
    profiles.name
]);

export default componentsModule;
