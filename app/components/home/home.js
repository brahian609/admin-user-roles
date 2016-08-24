import angular from 'angular';
import HomeRoutes from './home.route';
import HomeController from './home.controller';


let homeModule = angular.module('app.components.home', [

    ])
    .config(HomeRoutes)
    .controller('HomeController', HomeController);

export default homeModule;