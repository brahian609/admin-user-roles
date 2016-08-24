import angular from 'angular';
import BaseService from './base.service';

let servicesModule = angular.module('app.shared.services', [])
    .service('BaseService', BaseService);

export default servicesModule;