import angular from 'angular';
import ProfilesRoutes from './profiles.route';
import ProfilesController from './profiles.controller';

import profilesForm from './profiles-form/profiles-form';

let profilesModule = angular.module('app.components.profiles', [
        profilesForm.name
    ])
    .config(ProfilesRoutes)
    .controller('ProfilesController', ProfilesController);

export default profilesModule;