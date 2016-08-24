import angular from 'angular';

import providers from './providers/providers';
import services from './services/services';

let sharedModule = angular.module('app.shared', [
        providers.name,
        services.name
    ]);

export default sharedModule;