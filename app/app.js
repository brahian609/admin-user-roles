import angular from 'angular';
import libraries from './app.libraries';
import components from './components/componentes';


angular.module('app', [
    libraries.name,
    components.name
]);