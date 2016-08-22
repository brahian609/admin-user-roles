import angular from 'angular';
import ProfilesFormController from './profiles-form.controller';

let profilesFormModule = angular.module('profilesForm', [])
    .controller('ProfilesFormController', ProfilesFormController);

export default profilesFormModule;