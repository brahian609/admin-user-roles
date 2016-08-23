import angular from 'angular';
import navbarComponent from './navbar.component.js';

let navbarModule = angular.module('navbar', [])
    .component('navbar', navbarComponent);

export default navbarModule;