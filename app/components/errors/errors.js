import angular from 'angular';
import ErrorsRoutes from './errors.route';
import ErrorsController from './errors.controller';


let errorsModule = angular.module('app.components.errors', [

    ])
    .config(ErrorsRoutes)
    .controller('ErrorsController', ErrorsController);

export default errorsModule;