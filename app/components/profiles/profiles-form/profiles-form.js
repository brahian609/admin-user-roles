import angular from 'angular';
import profilesFormComponent from './profiles-form.component';

let profilesFormModule = angular.module('app.components.profilesForm', [])
    .component('profilesForm', profilesFormComponent);

export default profilesFormModule;