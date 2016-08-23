import angular from 'angular';
import libraries from './app.libraries';
import constants from './app.constants';
import components from './components/componentes';


angular.module('app', [
    libraries.name,
    constants.name,
    components.name
]);